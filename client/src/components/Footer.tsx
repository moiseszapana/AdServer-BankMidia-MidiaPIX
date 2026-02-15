import { Github, ExternalLink, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export default function Footer() {
  const version = "1.2.0";
  const author = "moiseszapana";
  const email = "moiseszapana@bankmidia.com.br";
  const repositoryUrl = "https://github.com/moiseszapana/BankMidia-MidiaPIX";
  
  const { language } = useLanguage();
  const t = (path: string) => getTranslation(language, path);

  return (
    <footer className="bg-sidebar border-t border-sidebar-border mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.about')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.aboutDesc')}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-primary hover:underline">
                  {t('nav.inicio')}
                </a>
              </li>
              <li>
                <a href="/introducao" className="text-primary hover:underline">
                  {t('nav.introducao')}
                </a>
              </li>
              <li>
                <a href="/anunciantes" className="text-primary hover:underline">
                  {t('nav.anunciantes')}
                </a>
              </li>
              <li>
                <a href="/editores" className="text-primary hover:underline">
                  {t('nav.editores')}
                </a>
              </li>
            </ul>
          </div>

          {/* Repositório */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.repository')}</h3>
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Github size={18} />
              {t('footer.viewGithub')}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-sidebar-border my-8"></div>

        {/* Informações de Versão e Autor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>{t('footer.version')}:</strong> {version}
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>{t('footer.author')}:</strong>{' '}
              <a
                href={`https://github.com/${author}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                {author}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={14} />
              <a
                href={`mailto:${email}`}
                className="text-primary hover:underline"
              >
                {email}
              </a>
            </p>
          </div>

          <div className="text-sm text-muted-foreground text-right">
            <p className="mb-2">
              {t('footer.developed')} <strong>BankMidia/MidiaPix</strong>
            </p>
            <p>
              {t('footer.rights')}
            </p>
          </div>
        </div>

        {/* Links Adicionais */}
        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-3">
            <a
              href={`${repositoryUrl}/releases/tag/v${version}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {t('footer.releaseNotes')} v{version}
            </a>
            {' '} | {' '}
            <a
              href={`${repositoryUrl}/blob/main/DOCUMENTACAO_README.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {t('footer.projectDocs')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
