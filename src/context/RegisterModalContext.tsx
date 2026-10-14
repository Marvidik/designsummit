'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import RegisterModal from '@/components/RegisterModal';

interface RegisterModalContextType {
  isOpen: boolean;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
}

const RegisterModalContext = createContext<RegisterModalContextType | undefined>(undefined);

export function RegisterModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openRegisterModal = () => setIsOpen(true);
  const closeRegisterModal = () => setIsOpen(false);

  // Global click listener to intercept any registration link on the site
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.includes('tixo.online/akwa-ibom-design-summit-2026')) {
          // If this is the continue button inside the modal, allow direct navigation!
          if (target.getAttribute('data-modal-continue') === 'true' || target.closest('[data-modal-continue="true"]')) {
            return;
          }

          // Otherwise, intercept and open the Socials Follow registration modal!
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, true);
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  return (
    <RegisterModalContext.Provider value={{ isOpen, openRegisterModal, closeRegisterModal }}>
      {children}
      <RegisterModal isOpen={isOpen} onClose={closeRegisterModal} />
    </RegisterModalContext.Provider>
  );
}

export function useRegisterModal() {
  const context = useContext(RegisterModalContext);
  if (!context) {
    throw new Error('useRegisterModal must be used within a RegisterModalProvider');
  }
  return context;
}
