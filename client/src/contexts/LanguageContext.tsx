import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Carregar idioma do localStorage
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['pt', 'en', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detectar idioma do navegador
      const browserLanguage = navigator.language.split('-')[0];
      if (browserLanguage === 'en') {
        setLanguage('en');
      } else if (browserLanguage === 'es') {
        setLanguage('es');
      } else {
        setLanguage('pt');
      }
    }
    setIsInitialized(true);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  if (!isInitialized) {
    return <div>{children}</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
