# Documentação BankMidia/MidiaPix

## Visão Geral

Este projeto contém a documentação completa de ajuda para o **AdServer BankMidia/MidiaPix**. A documentação foi desenvolvida como um site estático responsivo, otimizado para hospedagem em servidor Apache Linux.

---

## Estrutura do Projeto

```
bankmidia_docs/
├── client/                                    # Frontend (React + Tailwind)
│   ├── src/
│   │   ├── pages/                           # Páginas da documentação
│   │   │   ├── Home.tsx                     # Página inicial
│   │   │   ├── HomeMultilang.tsx            # Página home com suporte a idiomas
│   │   │   ├── Introducao.tsx               # Introdução geral
│   │   │   ├── Anunciantes.tsx              # Guia para Anunciantes
│   │   │   ├── Editores.tsx                 # Guia para Editores
│   │   │   ├── API.tsx                      # Manual da API
│   │   │   ├── APITester.tsx                # Testador interativo da API
│   │   │   ├── Conformidade.tsx             # Conformidade LGPD/GDPR
│   │   │   └── NotFound.tsx                 # Página 404
│   │   ├── components/
│   │   │   ├── DocsLayout.tsx               # Layout principal com navegação
│   │   │   ├── Footer.tsx                   # Footer com links e versionamento
│   │   │   ├── LanguageSwitcher.tsx         # Seletor de idioma (descontinuado)
│   │   │   ├── LanguageSelectorLinks.tsx    # Links de seleção de idioma
│   │   │   └── ErrorBoundary.tsx            # Tratamento de erros
│   │   ├── contexts/
│   │   │   ├── ThemeContext.tsx             # Contexto de tema (claro/escuro)
│   │   │   └── LanguageContext.tsx          # Contexto de idioma (descontinuado)
│   │   ├── hooks/
│   │   │   ├── useLanguage.ts               # Hook para gerenciar idioma (descontinuado)
│   │   │   └── useLanguageFromUrl.ts        # Hook para detectar idioma da URL
│   │   ├── lib/
│   │   │   └── translations.ts              # Sistema de traduções (descontinuado)
│   │   ├── App.tsx                          # Roteamento principal
│   │   ├── index.css                        # Estilos globais e temas
│   │   └── main.tsx                         # Entry point React
│   ├── public/
│   │   ├── logo.png                         # Logo MidiaPix
│   │   └── index.html                       # Template HTML
│   ├── index.html                           # Template HTML principal
│   └── package.json                         # Dependências do projeto
├── server/
│   └── index.ts                             # Servidor Express (placeholder)
├── shared/
│   └── const.ts                             # Constantes compartilhadas
├── dist/                                    # Arquivos compilados (gerados)
│   ├── public/                              # Arquivos prontos para Apache
│   │   ├── index.html
│   │   ├── assets/                          # CSS e JavaScript compilados
│   │   └── .htaccess                        # Configuração Apache
│   └── index.js                             # Servidor compilado
├── package.json                             # Dependências e scripts
├── tsconfig.json                            # Configuração TypeScript
├── vite.config.ts                           # Configuração Vite
├── tailwind.config.ts                       # Configuração Tailwind CSS
├── postcss.config.js                        # Configuração PostCSS
├── .gitignore                               # Arquivos ignorados pelo Git
├── CHANGELOG.md                             # Histórico de versões
├── DOCUMENTACAO_README.md                   # Este arquivo
└── GUIA_INSTALACAO_APACHE.md                # Guia de instalação Apache
```

---

## Conteúdo da Documentação

### 1. **Página Inicial (Home)**
- Visão geral da plataforma
- Links rápidos para Anunciantes e Editores
- Informações sobre navegadores suportados
- Call-to-action para começar

### 2. **Introdução Geral**
- O que é BankMidia/MidiaPix
- Arquitetura da plataforma
- Perfis de usuário (Anunciante e Editor)
- Componentes principais
- Recursos de segurança

### 3. **Guia para Anunciantes**
- Vantagens da plataforma
- Segmentação avançada
- Modelos de precificação
- Painel do Anunciante (Dashboard, Estatísticas, Campanhas)
- Criando primeira campanha (passo a passo)
- Melhores práticas
- Suporte e recursos

### 4. **Guia para Editores**
- Vantagens da plataforma
- Alto potencial de ganhos
- Múltiplos formatos de publicidade
- Painel do Editor (Dashboard, Estatísticas, Sites & Zonas, Neverblock)
- Configurando primeiro site (passo a passo)
- Otimizando receita
- Melhores práticas
- Suporte e recursos

### 5. **Manual da API**
- Autenticação com Token Bearer
- 19 Endpoints documentados
- Modelos de Precificação (CPC, CPM, CPA, Smart CPM, CPV, Smart CPC, Smart Bid)
- 20 Tamanhos de Anúncios suportados
- Tratamento de Erros com códigos HTTP
- Paginação e Exemplos de requisições

### 6. **Testador da API**
- Formulário de autenticação interativo
- Consulta de campanhas para Anunciantes
- Consulta de zonas para Editores
- Exibição de dados em tempo real
- Indicadores visuais de status

### 7. **Conformidade LGPD/GDPR**
- Lei Geral de Proteção de Dados (LGPD) - Brasil
- Regulamento Geral sobre Proteção de Dados (GDPR) - UE
- Princípios de proteção de dados
- Direitos dos titulares de dados
- Bases legais para tratamento
- Segurança de dados
- Instruções para exercer direitos

---

## Tecnologias Utilizadas

- **React 19:** Framework JavaScript para UI
- **TypeScript:** Tipagem estática
- **Tailwind CSS 4:** Framework CSS utilitário
- **Wouter:** Roteamento leve para SPA
- **shadcn/ui:** Componentes UI reutilizáveis
- **Vite:** Build tool moderno
- **Lucide React:** Ícones SVG
- **Framer Motion:** Animações
- **Streamdown:** Renderização de Markdown

---

## Design e Estilo

### Paleta de Cores
- **Primária:** #1e40af (Azul)
- **Secundária:** #e2e8f0 (Cinza claro)
- **Acento:** #0ea5e9 (Azul claro)
- **Fundo:** #ffffff (Branco)
- **Texto:** #1a202c (Cinza escuro)

### Tipografia
- **Títulos:** Lora (serif) - elegante e profissional
- **Corpo:** Poppins (sans-serif) - moderno e legível

### Layout
- **Responsivo:** Mobile-first, otimizado para todos os tamanhos
- **Sidebar:** Navegação fixa em desktop, colapsável em mobile
- **Conteúdo:** Máximo de 4 colunas para legibilidade

---

## Compilação e Build

### Desenvolvimento Local
```bash
cd /home/ubuntu/bankmidia_docs
pnpm install
pnpm dev
```

Acesse `http://localhost:3000` no navegador.

### Build de Produção
```bash
cd /home/ubuntu/bankmidia_docs
pnpm build
```

Os arquivos compilados estarão em `dist/public/` e estão prontos para serem copiados diretamente para o Apache.

**Importante:** Este é um site estático puro (SPA - Single Page Application). Não é necessário Node.js em produção, apenas Apache rodando nas portas 80/443.

---

## Hospedagem no Apache (AlmaLinux)

### Arquivos para Hospedagem

Os arquivos prontos para hospedagem estão em:
```
/home/ubuntu/bankmidia_docs/dist/public/
```

### Instalação no AlmaLinux

#### 1. Instalar Apache
```bash
sudo dnf update -y
sudo dnf install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
```

#### 2. Configurar Firewall
```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

#### 3. Preparar Diretório
```bash
sudo mkdir -p /var/www/html/bankmidia-docs
sudo chown -R apache:apache /var/www/html/bankmidia-docs
sudo chmod -R 755 /var/www/html/bankmidia-docs
```

#### 4. Copiar Arquivos
```bash
# Copiar todos os arquivos compilados (incluindo .htaccess)
sudo cp -r /home/ubuntu/bankmidia_docs/dist/public/* /var/www/html/bankmidia-docs/
sudo cp /home/ubuntu/bankmidia_docs/dist/public/.htaccess /var/www/html/bankmidia-docs/
sudo chown -R apache:apache /var/www/html/bankmidia-docs
```

**Nota:** O arquivo `.htaccess` é essencial para o funcionamento correto do roteamento SPA.

#### 5. Configurar VirtualHost
Crie o arquivo `/etc/httpd/conf.d/bankmidia-docs.conf`:
```apache
<VirtualHost *:80>
    ServerName docs.bankmidia.com.br
    ServerAlias www.docs.bankmidia.com.br
    DocumentRoot /var/www/html/bankmidia-docs

    <Directory /var/www/html/bankmidia-docs>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /var/log/httpd/bankmidia-docs-error.log
    CustomLog /var/log/httpd/bankmidia-docs-access.log combined
</VirtualHost>
```

#### 6. Habilitar mod_rewrite e módulos necessários
```bash
# Verificar se mod_rewrite está habilitado
sudo httpd -M | grep rewrite

# Se não estiver, habilitar
sudo dnf install mod_ssl -y

# Reiniciar Apache
sudo systemctl restart httpd
```

#### 7. Configurar SELinux (se habilitado)
```bash
sudo setsebool -P httpd_can_network_connect 1
sudo chcon -R -t httpd_sys_content_t /var/www/html/bankmidia-docs
```

#### 8. Testar Configuração
```bash
sudo httpd -t
sudo systemctl restart httpd
```

### Configuração HTTPS/SSL com Let's Encrypt

```bash
# Instalar Certbot
sudo dnf install certbot python3-certbot-apache -y

# Obter certificado SSL
sudo certbot --apache -d docs.bankmidia.com.br -d www.docs.bankmidia.com.br

# Renovação automática
sudo systemctl enable certbot-renew.timer
sudo systemctl start certbot-renew.timer
```

### Instruções Detalhadas

Consulte o arquivo `INSTALACAO_APACHE_LINUX.md` para instruções completas de instalação e configuração.

---

## Recursos Inclusos

### 1. **Arquivo .htaccess**
- Rewrite rules para SPA routing
- Configuração de cache
- Compressão GZIP
- Headers de segurança

### 2. **Guia de Instalação Apache**
- Pré-requisitos
- Instalação do Apache
- Configuração de VirtualHost
- HTTPS/SSL
- Troubleshooting
- Segurança

### 3. **Documentação Completa**
- 7 páginas principais
- Conteúdo adaptado para BankMidia/MidiaPix
- Otimizado para leitura

---

## Navegadores Suportados

- Google Chrome 80+
- Mozilla Firefox 75+
- Opera 67+
- Safari 13+
- Microsoft Edge 81+

---

## Performance

### Otimizações Implementadas

1. **Code Splitting:** Divisão automática de código pelo Vite
2. **Minificação:** CSS e JavaScript minificados
3. **Compressão:** GZIP habilitado no Apache
4. **Cache:** Headers de cache configurados
5. **Lazy Loading:** Componentes carregados sob demanda

### Métricas

- HTML: ~368 KB (105 KB com GZIP)
- CSS: ~116 KB (18 KB com GZIP)
- JavaScript: ~633 KB (173 KB com GZIP)

---

## Segurança

### Implementações de Segurança

1. **Headers de Segurança:**
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: SAMEORIGIN
   - X-XSS-Protection: 1; mode=block
   - Referrer-Policy: strict-origin-when-cross-origin

2. **HTTPS/SSL:** Suportado via Certbot

3. **Rewrite Rules:** Proteção contra acesso direto a arquivos

---

## Manutenção

### Atualizar Documentação

1. Edite os arquivos em `client/src/pages/`
2. Execute `pnpm build`
3. Copie os arquivos de `dist/public/` para o servidor Apache

### Monitorar Performance

```bash
# Ver logs de erro
sudo tail -f /var/log/apache2/bankmidia-docs-error.log

# Ver logs de acesso
sudo tail -f /var/log/apache2/bankmidia-docs-access.log
```

---

## Troubleshooting

### Página em branco
- Verifique se `mod_rewrite` está habilitado
- Verifique permissões dos arquivos

### Estilos não carregam
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se os arquivos CSS estão em `dist/public/assets/`

### Roteamento não funciona
- Verifique se `.htaccess` está no diretório correto
- Verifique se `AllowOverride All` está configurado

---

## Contato e Suporte

Para dúvidas ou sugestões sobre a documentação, entre em contato com:
- **Autor:** moiseszapana
- **Email:** contato@bankmidia.com.br
- **GitHub:** https://github.com/moiseszapana
- **Repositório:** https://github.com/moiseszapana/AdServer-BankMidia-MidiaPIX

---

## Histórico de Versões

### v1.4.0 (15 de março de 2025)
- Removido suporte a múltiplos idiomas
- Simplificado sistema de rotas
- Removido LanguageContext e hooks de idioma
- Removido seletor de idioma do header
- Adicionada página de Conformidade LGPD/GDPR
- Atualizado email de contato para contato@bankmidia.com.br
- Atualizado nome do repositório GitHub

---

## Licença

Esta documentação é propriedade do BankMidia e é fornecida como-é para fins de suporte ao usuário.

---

**Versão:** 1.4.0  
**Data:** 15 de março de 2025  
**Autor:** moiseszapana (contato@bankmidia.com.br)  
**Repositório:** https://github.com/moiseszapana/AdServer-BankMidia-MidiaPIX  
**Desenvolvido para BankMidia/MidiaPix**
