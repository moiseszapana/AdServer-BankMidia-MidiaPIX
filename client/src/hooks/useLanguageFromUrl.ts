import { useLocation } from 'wouter';
import { Language } from '@/lib/translations';

export const useLanguageFromUrl = (): Language => {
  const [location] = useLocation();
  
  // Extrair idioma da URL
  const match = location.match(/^\/([a-z]{2})\//);
  const languageFromUrl = match ? (match[1] as Language) : 'pt';
  
  // Validar se é um idioma suportado
  if (['pt', 'en', 'es'].includes(languageFromUrl)) {
    return languageFromUrl as Language;
  }
  
  return 'pt';
};
