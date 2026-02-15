# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto segue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2025-03-15

### Added
- ✨ Página de Conformidade LGPD/GDPR completa
- ✨ Testador interativo da API com autenticação
- ✨ Manual completo da API com 19 endpoints
- ✨ Logo MidiaPix integrado no header
- ✨ Footer com links do repositório GitHub e versionamento

### Changed
- 🔄 Removido suporte a múltiplos idiomas (mantém apenas português)
- 🔄 Simplificado sistema de rotas
- 🔄 Atualizado email de contato para contato@bankmidia.com.br
- 🔄 Atualizado nome do repositório para AdServer-BankMidia-MidiaPIX
- 🔄 Refatorado sistema de páginas com 7 páginas principais

### Removed
- ❌ Rotas /en/ e /es/
- ❌ Componente LanguageSelectorLinks
- ❌ Hook useLanguageFromUrl
- ❌ Sistema de tradução (translations.ts)
- ❌ LanguageContext dinâmico
- ❌ Seções de Pagamentos (Anunciantes e Editores)
- ❌ Seção de Marketplace (Anunciantes)

### Fixed
- 🐛 Corrigido seletor de idiomas que não funcionava
- 🐛 Restaurado conteúdo removido acidentalmente
- 🐛 Corrigido typo no header (BamkMidia → BankMidia)

### Pages
1. **Home** - Página inicial com visão geral
2. **Introdução Geral** - Arquitetura e componentes
3. **Guia para Anunciantes** - Recursos e painel
4. **Guia para Editores** - Recursos e painel
5. **Manual da API** - Documentação completa de endpoints
6. **Testador da API** - Ferramenta interativa de testes
7. **Conformidade LGPD/GDPR** - Políticas de proteção de dados

### Components
- DocsLayout - Layout principal com navegação
- Footer - Footer com informações e links
- ErrorBoundary - Tratamento de erros
- LanguageSwitcher - Seletor de idioma (descontinuado)

### Technologies
- React 19 + TypeScript
- Tailwind CSS 4
- Vite + Wouter
- shadcn/ui components
- Lucide React icons

### Author
- **moiseszapana** (contato@bankmidia.com.br)
- GitHub: https://github.com/moiseszapana

### Repository
- https://github.com/moiseszapana/AdServer-BankMidia-MidiaPIX

---

## Notas de Lançamento

### Versão 1.4.0 - Documentação Completa do AdServer BankMidia/MidiaPix

Esta versão marca o lançamento completo da documentação do AdServer BankMidia/MidiaPix com:

- **7 páginas principais** cobrindo todos os aspectos da plataforma
- **Design responsivo** otimizado para Apache Linux
- **Conformidade legal** com LGPD (Brasil) e GDPR (UE)
- **Testador interativo** para a API com autenticação
- **Documentação técnica** completa com 19 endpoints

A documentação está pronta para hospedagem em servidor Apache com suporte a HTTPS, compressão GZIP e otimizações de performance.

---

**Versão:** 1.4.0  
**Data:** 15 de março de 2025  
**Status:** Estável  
**Compatibilidade:** Apache 2.4+, Linux  
**Navegadores:** Chrome 80+, Firefox 75+, Safari 13+, Edge 81+
