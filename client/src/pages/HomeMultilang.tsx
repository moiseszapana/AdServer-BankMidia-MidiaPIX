import { Link } from 'wouter';
import { ArrowRight, BookOpen, Users, BarChart3 } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';

export default function Home() {
  return (
    <DocsLayout currentPage="/">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 lg:p-12 border border-border">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Documentação BankMidia/MidiaPix
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            Bem-vindo à documentação completa do AdServer BankMidia/MidiaPix. Encontre guias detalhados, tutoriais e referências para aproveitar ao máximo nossa plataforma de publicidade online.
          </p>

          <p className="text-base text-muted-foreground max-w-2xl">
            BankMidia/MidiaPix é uma plataforma robusta que oferece soluções completas para Anunciantes e Editores gerenciarem suas campanhas publicitárias com eficiência.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* For Advertisers */}
        <Link href="/anunciantes">
          <a className="group">
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Para Anunciantes</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Aprenda como configurar campanhas, segmentar audiências e otimizar seus investimentos em publicidade.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Acessar guia
                <ArrowRight size={20} />
              </div>
            </div>
          </a>
        </Link>

        {/* For Publishers */}
        <Link href="/editores">
          <a className="group">
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Para Editores</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Descubra como gerenciar seus sites, zonas de anúncios e maximizar a receita com nossa plataforma.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Acessar guia
                <ArrowRight size={20} />
              </div>
            </div>
          </a>
        </Link>
      </div>

      {/* Additional Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Introduction */}
        <Link href="/introducao">
          <a className="group">
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <BookOpen className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Introdução Geral</h3>
              </div>
              <p className="text-muted-foreground">
                Conheça a arquitetura da plataforma, componentes principais e conceitos fundamentais.
              </p>
            </div>
          </a>
        </Link>

        {/* API Documentation */}
        <Link href="/api">
          <a className="group">
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <BookOpen className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Manual da API</h3>
              </div>
              <p className="text-muted-foreground">
                Documentação completa dos endpoints da API para integração com sistemas externos.
              </p>
            </div>
          </a>
        </Link>
      </div>
    </DocsLayout>
  );
}
