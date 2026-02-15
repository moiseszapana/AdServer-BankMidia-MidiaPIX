import { Github, ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  const version = "1.0.0";
  const releaseDate = "15 de março de 2025";
  const author = "moiseszapana";
  const email = "moiseszapana@gmail.com";
  const repositoryUrl = "https://github.com/moiseszapana/BankMidia-MidiaPIX";

  return (
    <footer className="bg-sidebar border-t border-sidebar-border mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Sobre</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Documentação oficial do AdServer BankMidia/MidiaPix, um whitelabel do AdServer ExAds para gerenciamento de campanhas publicitárias online.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-primary hover:underline">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="/introducao" className="text-primary hover:underline">
                  Introdução Geral
                </a>
              </li>
              <li>
                <a href="/anunciantes" className="text-primary hover:underline">
                  Guia para Anunciantes
                </a>
              </li>
              <li>
                <a href="/editores" className="text-primary hover:underline">
                  Guia para Editores
                </a>
              </li>
            </ul>
          </div>

          {/* Repositório */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Repositório</h3>
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Github size={18} />
              Ver no GitHub
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
              <strong>Versão:</strong> {version}
            </p>
            <p>
              <strong>Data de Lançamento:</strong> {releaseDate}
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>Autor:</strong>{' '}
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
              Desenvolvido com ❤️ para <strong>BankMidia/MidiaPix</strong>
            </p>
            <p>
              © 2025 BankMidia. Todos os direitos reservados.
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
              Release Notes v{version}
            </a>
            {' '} | {' '}
            <a
              href={`${repositoryUrl}/blob/main/DOCUMENTACAO_README.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Documentação do Projeto
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
