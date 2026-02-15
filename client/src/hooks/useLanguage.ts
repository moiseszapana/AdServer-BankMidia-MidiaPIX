import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('pt');

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
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return { language, changeLanguage };
};
