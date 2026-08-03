'use client';

import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Target date: Dec 2, 2026
    const targetDate = new Date('2026-12-02T09:00:00Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown(); // initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return (
      <div className={styles.countdownWrapper}>
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div key={unit} className={styles.timeBox}>
            <span className={styles.timeValue}>00</span>
            <span className={styles.timeLabel}>{unit}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.countdownWrapper}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className={styles.timeBox}>
          <span className={styles.timeValue}>{String(value).padStart(2, '0')}</span>
          <span className={styles.timeLabel}>{unit}</span>
        </div>
      ))}
    </div>
  );
}
