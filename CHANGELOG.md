# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto segue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2025-03-15

### Changed
- Removido suporte a múltiplos idiomas
- Simplificado sistema de rotas
- Removido LanguageContext e hooks de idioma
- Removido seletor de idioma do header

### Removed
- Rotas /en/ e /es/
- Componente LanguageSelectorLinks
- Hook useLanguageFromUrl
- Sistema de tradução (translations.ts)

---

## [1.3.0] - 2025-03-15

### Changed
- Refatorado sistema de idiomas para rotas estáticas (/pt/, /en/, /es/)
- Removido LanguageContext dinâmico
- Implementado seletor de idioma com links de navegação
- Melhorada compatibilidade com Apache e hospedagem estática

### Added
- Rotas estáticas para cada idioma
- Hook useLanguageFromUrl para detectar idioma da URL
- Componente LanguageSelectorLinks com links de navegação

---

## [1.2.0] - 2025-03-15

### Added
- ✨ Suporte a múltiplos idiomas (Português, Inglês, Espanhol)
- ✨ Seletor de idioma no header
- ✨ Sistema de internacionalização (i18n) completo
- ✨ Detecção automática de idioma do navegador
- ✨ Persistência de preferência de idioma em localStorage
- ✨ Traduções completas para todas as páginas
- ✨ Interface responsiva com suporte a 3 idiomas

### Changed
- 📝 Versionamento atualizado para v1.2.0
- 📝 Data da atualização: 15 de março de 2025
- 📝 Footer agora suporta múltiplos idiomas

---

## [1.1.0] - 2025-03-15

### Added
- ✨ Página Testador da API com formulário interativo
- ✨ Autenticação com token Bearer
- ✨ Consulta de campanhas em tempo real (endpoint /campaigns)
- ✨ Consulta de zonas de anúncios em tempo real (endpoint /zones)
- ✨ Tabelas interativas com dados da API
- ✨ Tratamento de erros e validação de token
- ✨ Indicadores visuais de status (ativo, pausado, deletado)
- ✨ Interface responsiva para mobile e desktop

### Changed
- 📝 Versionamento atualizado para v1.1.0
- 📝 Data da atualização: 15 de março de 2025

---

## [1.0.0] - 2025-03-15

### Added
- ✨ Documentação completa do AdServer BankMidia/MidiaPix
- ✨ Página inicial com navegação para Anunciantes e Editores
- ✨ Guia completo para Anunciantes
- ✨ Guia completo para Editores
- ✨ Manual da API BankMidia/MidiaPix v2.0
- ✨ Documentação de 19 endpoints principais
- ✨ Exemplos de autenticação e requisições
- ✨ Documentação de modelos de precificação (CPC, CPM, CPA, Smart CPM, CPV, Smart CPC, Smart Bid)
- ✨ Documentação de 20 tamanhos de anúncios suportados
- ✨ Guia de tratamento de erros e códigos HTTP
- ✨ Documentação de paginação e filtros
- ✨ Footer com informações de autor e versionamento
- ✨ Design responsivo com sidebar colapsável
- ✨ Arquivo .htaccess para hospedagem Apache
- ✨ Guia completo de instalação no Apache Linux
- ✨ Suporte a HTTPS/SSL
- ✨ Compressão GZIP habilitada
- ✨ Headers de segurança configurados

### Changed
- 📝 Data do projeto atualizada para 15/03/2025
- 🎨 Design profissional com paleta de cores azul corporativo
- 📱 Layout totalmente responsivo para mobile, tablet e desktop

### Technical Details
- React 19 + TypeScript
- Tailwind CSS 4
- Vite build tool
- shadcn/ui components
- Wouter routing
- Lucide React icons

### Author
- **moiseszapana** (moiseszapana@bankmidia.com.br)
- GitHub: https://github.com/moiseszapana

### Repository
- https://github.com/moiseszapana/BankMidia-MidiaPIX

---

## Notas de Lançamento

### v1.0.0 - Lançamento Inicial (15 de março de 2025)

Esta é a primeira versão estável da Documentação BankMidia/MidiaPix. A documentação inclui:

#### Páginas Principais
1. **Página Inicial** - Visão geral e navegação
2. **Introdução Geral** - Arquitetura e componentes da plataforma
3. **Guia para Anunciantes** - Criação e gerenciamento de campanhas
4. **Guia para Editores** - Gerenciamento de sites e zonas
5. **Manual da API** - Documentação técnica completa

#### Recursos de Hospedagem
- Otimizado para Apache Linux
- Arquivo .htaccess com rewrite rules para SPA
- Compressão GZIP
- Cache inteligente
- Headers de segurança
- Suporte a HTTPS/SSL

#### Qualidade
- Design profissional e responsivo
- Navegação intuitiva
- Documentação clara e detalhada
- Exemplos práticos
- Links para documentação interativa

---

## Versões Futuras

### Planejado para v1.2.0
- [ ] Exemplos de código em múltiplas linguagens (cURL, Python, JavaScript, PHP)
- [ ] Documentação de Webhooks
- [ ] Guia de Rate Limiting
- [ ] Seção de FAQ
- [ ] Formulário de feedback

### Planejado para v1.3.0
- [ ] Busca full-text
- [ ] Dark mode
- [ ] Suporte a múltiplos idiomas
- [ ] Integração com Algolia para busca
- [ ] Analytics

---

## Como Contribuir

Se você encontrou um erro ou tem sugestões de melhoria, entre em contato:
- Email: moiseszapana@bankmidia.com.br
- GitHub: https://github.com/moiseszapana

---

## Licença

Esta documentação é propriedade do BankMidia e é fornecida como-é para fins de suporte ao usuário.

---

**Última atualização:** 15 de março de 2025
