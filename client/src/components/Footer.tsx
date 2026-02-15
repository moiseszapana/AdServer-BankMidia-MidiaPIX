import { Github, ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  const version = "1.3.0";
  const author = "moiseszapana";
  const email = "moiseszapana@bankmidia.com.br";
  const repositoryUrl = "https://github.com/moiseszapana/BankMidia-MidiaPIX";

  return (
    <footer className="bg-sidebar border-t border-sidebar-border mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sidebar-foreground">Sobre</h3>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed">
              Documentação completa do BankMidia/MidiaPix AdServer. Encontre guias, tutoriais e referências para anunciantes e editores.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sidebar-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary hover:underline text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="/introducao" className="text-primary hover:underline text-sm">
                  Introdução Geral
                </a>
              </li>
              <li>
                <a href="/anunciantes" className="text-primary hover:underline text-sm">
                  Guia para Anunciantes
                </a>
              </li>
              <li>
                <a href="/editores" className="text-primary hover:underline text-sm">
                  Guia para Editores
                </a>
              </li>
              <li>
                <a href="/api" className="text-primary hover:underline text-sm">
                  Manual da API
                </a>
              </li>
              <li>
                <a href="/api-tester" className="text-primary hover:underline text-sm">
                  Testador da API
                </a>
              </li>
            </ul>
          </div>

          {/* Repositório */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-sidebar-foreground">Repositório</h3>
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium mb-4"
            >
              <Github size={16} />
              GitHub
            </a>
            <div className="space-y-2">
              <a
                href={`${repositoryUrl}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink size={14} />
                Release Notes
              </a>
              <a
                href={`${repositoryUrl}/blob/main/CHANGELOG.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink size={14} />
                Changelog
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sidebar-border my-8"></div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sidebar-foreground/70 text-sm">
              Desenvolvido para BankMidia/MidiaPix
            </p>
            <p className="text-sidebar-foreground/70 text-sm">
              Versão {version} • Autor: {author}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-sidebar-foreground/70" />
            <a
              href={`mailto:${email}`}
              className="text-primary hover:underline text-sm"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
