import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';

interface DocsLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function DocsLayout({ children, currentPage }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/introducao', label: 'Introdução Geral' },
    { href: '/anunciantes', label: 'Guia para Anunciantes' },
    { href: '/editores', label: 'Guia para Editores' },
    { href: '/api', label: 'Manual da API' },
    { href: '/api-tester', label: 'Testador da API' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl text-primary">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                B
              </div>
              <span>BankMidia/MidiaPix AdServer</span>
            </a>
          </Link>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={changeLanguage} />
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-16 left-0 w-64 bg-sidebar border-r border-sidebar-border
          transform lg:transform-none transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto z-30
        `}>
          <nav className="p-6 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    block px-4 py-2 rounded-lg transition-colors
                    ${currentPage === item.href
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground font-semibold'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }
                  `}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full">
          <div className="container py-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
