'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function IWillAttendPage() {
  const [name, setName] = useState('');
  const [userImage, setUserImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const userImageRef = useRef<HTMLImageElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserImage(url);
      
      // Reset transformations
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageSize({
      width: e.currentTarget.clientWidth,
      height: e.currentTarget.clientHeight
    });
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!userImage) return;
    setIsDragging(true);
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    setPosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  const downloadImage = async () => {
    if (!containerRef.current) return;
    setIsGenerating(true);
    
    // Ensure custom fonts are loaded before drawing on canvas
    if (typeof document !== 'undefined' && document.fonts) {
      await document.fonts.ready;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsGenerating(false);
      return;
    }
    
    // Original iwill.png size
    const bgImage = new Image();
    bgImage.src = '/iwill.png';
    bgImage.onload = () => {
      // Set canvas size to the background image size for high quality
      canvas.width = bgImage.width;
      canvas.height = bgImage.height;
      
      const containerRect = containerRef.current!.getBoundingClientRect();
      
      // Draw background
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      
      // Draw user image if it exists
      if (userImage && userImageRef.current) {
        const uImg = userImageRef.current;
        
        // The exact white box coordinates in original image space
        const boxX = 765;
        const boxY = 1017;
        const boxW = 805;
        const boxH = 805;

        // Apply clip mask
        ctx.save();
        ctx.beginPath();
        ctx.rect(boxX, boxY, boxW, boxH);
        ctx.clip();

        // Display box size on screen
        const displayBoxW = containerRect.width * (805 / 2336);
        const displayBoxH = containerRect.height * (805 / 2925);
        
        const currentWidth = uImg.clientWidth;
        const currentHeight = uImg.clientHeight;
        
        const imgDisplayWidth = currentWidth * scale;
        const imgDisplayHeight = currentHeight * scale;
        
        // Display box center
        const centerX = displayBoxW / 2;
        const centerY = displayBoxH / 2;
        
        // Draw coordinates relative to white box
        const drawX = centerX + position.x - (imgDisplayWidth / 2);
        const drawY = centerY + position.y - (imgDisplayHeight / 2);
        
        // Scale to canvas space
        const boxRatioX = boxW / displayBoxW;
        const boxRatioY = boxH / displayBoxH;
        
        const finalX = boxX + (drawX * boxRatioX);
        const finalY = boxY + (drawY * boxRatioY);
        const finalWidth = imgDisplayWidth * boxRatioX;
        const finalHeight = imgDisplayHeight * boxRatioY;
        
        ctx.drawImage(uImg, finalX, finalY, finalWidth, finalHeight);
        ctx.restore();
      }

      // Draw Attendee Name between the two white lines (Y: 1932 to 2144, Center: 2038)
      if (name.trim()) {
        const displayName = name.trim().toUpperCase();
        ctx.save();
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        let fontSize = 64; // Sleek, elegant, fitting comfortably between the lines
        ctx.font = `700 ${fontSize}px "Inter", "Segoe UI", Arial, sans-serif`;
        
        const maxTextWidth = 1400;
        while (ctx.measureText(displayName).width > maxTextWidth && fontSize > 26) {
          fontSize -= 2;
          ctx.font = `700 ${fontSize}px "Inter", "Segoe UI", Arial, sans-serif`;
        }
        
        if ('letterSpacing' in ctx) {
          (ctx as any).letterSpacing = '6px';
        }
        
        ctx.fillText(displayName, canvas.width / 2, 2038);
        ctx.restore();
      }
      
      const dataUrl = canvas.toDataURL('image/png');
      setGeneratedImage(dataUrl);
      setIsGenerating(false);
    };
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        <h1 className={styles.title}>Create Your Badge</h1>
        <p className={styles.subtitle}>Enter your name, upload your photo, and share!</p>
      </div>
      
      <div className={styles.editorWrapper}>
        <div 
          className={styles.canvasContainer} 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img src="/iwill.png" alt="I Will Attend" className={styles.bgImage} />
          
          {userImage && (
            <div className={styles.whiteBox}>
              <div 
                className={styles.userImageWrapper}
                style={{
                  transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`,
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
              >
                <img 
                  ref={userImageRef}
                  src={userImage} 
                  alt="Your photo" 
                  className={styles.userImage} 
                  onLoad={handleImageLoad}
                  draggable="false"
                />
              </div>
            </div>
          )}

          {/* Attendee Name Overlay between the two white lines */}
          <div className={styles.nameOverlay}>
            {name.trim() ? (
              <span className={styles.nameText}>{name.trim()}</span>
            ) : (
              <span className={styles.namePlaceholder}>YOUR NAME HERE</span>
            )}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label htmlFor="attendeeName">Your Full Name</label>
            <input 
              id="attendeeName"
              type="text" 
              placeholder="e.g. Emmanuel Udoh" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={styles.textInput}
              maxLength={40}
            />
          </div>

          {!userImage ? (
            <div className={styles.uploadSection}>
              <label className={styles.uploadBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                Upload Photo
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  style={{ display: 'none' }} 
                />
              </label>
              <button 
                className={styles.secondaryBtn} 
                onClick={downloadImage} 
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Download Badge'}
              </button>
            </div>
          ) : (
            <>
              <div className={styles.controlGroup}>
                <div className={styles.sliderHeader}>
                  <label htmlFor="zoomSlider">Zoom</label>
                  <span className={styles.zoomValue}>{Math.round(scale * 100)}%</span>
                </div>
                <input 
                  id="zoomSlider"
                  type="range" 
                  min="0.1" 
                  max="3" 
                  step="0.01" 
                  value={scale} 
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className={styles.slider}
                />
                <span className={styles.dragHint}>💡 Tip: Drag the photo in the frame to adjust its position</span>
              </div>
              <div className={styles.actions}>
                <label className={styles.secondaryBtn}>
                  Change Photo
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    style={{ display: 'none' }} 
                  />
                </label>
                <button className={styles.primaryBtn} onClick={downloadImage} disabled={isGenerating}>
                  {isGenerating ? 'Generating...' : 'Download Badge'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {generatedImage && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Your Badge is Ready!</h3>
            <p className={styles.modalDesc}>
              <strong>Mobile users:</strong> Tap and hold the image below to save it to your photos.
            </p>
            <img src={generatedImage} alt="Generated Badge" className={styles.modalImage} />
            <div className={styles.modalActions}>
              <button className={styles.secondaryBtn} onClick={() => setGeneratedImage(null)}>
                Close
              </button>
              <button 
                className={styles.primaryBtn} 
                onClick={() => {
                  const link = document.createElement('a');
                  link.download = 'i-will-attend-design-summit.png';
                  link.href = generatedImage;
                  link.click();
                }}
              >
                Force Download (Desktop)
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
