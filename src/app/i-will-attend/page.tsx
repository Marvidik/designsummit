'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function IWillAttendPage() {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  
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

  const triggerDownload = (canvas: HTMLCanvasElement) => {
    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], 'i-will-attend-design-summit.png', { type: 'image/png' });
      
      const downloadFallback = () => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'i-will-attend-design-summit.png';
        link.href = url;
        document.body.appendChild(link); // Required for iOS
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 100);
      };

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
          files: [file],
          title: 'I Will Attend Design Summit',
        }).catch(() => {
          downloadFallback();
        });
      } else {
        downloadFallback();
      }
    }, 'image/png');
  };

  const downloadImage = () => {
    if (!containerRef.current) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
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
        
        triggerDownload(canvas);
      } else {
        // Just save background
        triggerDownload(canvas);
      }
    };
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        <h1 className={styles.title}>Create Your Badge</h1>
        <p className={styles.subtitle}>Upload your photo, position it, and share!</p>
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
        </div>

        <div className={styles.controls}>
          {!userImage ? (
            <label className={styles.uploadBtn}>
              Upload Photo
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                style={{ display: 'none' }} 
              />
            </label>
          ) : (
            <>
              <div className={styles.controlGroup}>
                <label>Zoom</label>
                <input 
                  type="range" 
                  min="0.1" 
                  max="3" 
                  step="0.01" 
                  value={scale} 
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className={styles.slider}
                />
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
                <button className={styles.primaryBtn} onClick={downloadImage}>
                  Download Badge
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
