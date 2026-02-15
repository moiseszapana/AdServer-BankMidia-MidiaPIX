import { Link } from 'wouter';
import { ArrowRight, BookOpen, Users, BarChart3 } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = (path: string) => getTranslation(language, path);

  return (
    <DocsLayout currentPage="/">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 lg:p-12 border border-border">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('home.title')}
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            {t('home.subtitle')}
          </p>
          <p className="text-muted-foreground mb-8">
            {t('home.description')}
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Anunciantes Card */}
        <Link href="/anunciantes">
          <a className="group block p-8 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t('home.forAdvertisers')}</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              {t('home.advertisersDesc')}
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
              {t('home.accessGuide')} <ArrowRight size={20} />
            </div>
          </a>
        </Link>

        {/* Editores Card */}
        <Link href="/editores">
          <a className="group block p-8 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t('home.forPublishers')}</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              {t('home.publishersDesc')}
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
              {t('home.accessGuide')} <ArrowRight size={20} />
            </div>
          </a>
        </Link>
      </div>

      {/* Overview Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">{t('home.overview')}</h2>
        
        <div className="space-y-8">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="text-primary" size={24} />
              {t('home.whatIs')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('home.whatIsDesc')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('home.features')}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('home.browsers')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('home.browsersDesc')}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Google Chrome versão 80+
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Mozilla Firefox versão 75+
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Opera versão 67+
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Safari versão 13+
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Microsoft Edge versão 81+
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 lg:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">{t('home.cta')}</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          {t('home.ctaDesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/anunciantes">
            <a className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              {t('home.advertiser')}
            </a>
          </Link>
          <Link href="/editores">
            <a className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              {t('home.publisher')}
            </a>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
