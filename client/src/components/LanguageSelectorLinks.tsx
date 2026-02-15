import { useLocation } from 'wouter';
import { Globe } from 'lucide-react';
import { Language } from '@/lib/translations';

export default function LanguageSelectorLinks() {
  const [location] = useLocation();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  // Extrair idioma atual da URL
  const match = location.match(/^\/([a-z]{2})\//);
  const currentLanguage = match ? (match[1] as Language) : 'pt';

  // Construir URL para o novo idioma
  const getLanguageUrl = (lang: Language) => {
    // Se estamos na raiz, ir para /pt/
    if (location === '/') {
      return `/${lang}/`;
    }

    // Remover idioma atual da URL e adicionar novo
    const pathWithoutLang = location.replace(/^\/[a-z]{2}\//, '/');
    return `/${lang}${pathWithoutLang}`;
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-muted-foreground" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <a
            key={lang.code}
            href={getLanguageUrl(lang.code)}
            className={`px-3 py-1 rounded text-sm font-medium transition-all ${
              currentLanguage === lang.code
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
            title={lang.name}
          >
            {lang.flag} {lang.code.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
}
