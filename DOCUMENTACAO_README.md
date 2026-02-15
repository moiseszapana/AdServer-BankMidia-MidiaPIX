# Documentação BankMidia/MidiaPix

## Visão Geral

Este projeto contém a documentação completa de ajuda para o **AdServer BankMidia/MidiaPix**, um whitelabel do AdServer ExAds. A documentação foi desenvolvida como um site estático responsivo, otimizado para hospedagem em servidor Apache Linux.

---

## Estrutura do Projeto

```
bankmidia_docs/
├── client/                          # Frontend (React + Tailwind)
│   ├── src/
│   │   ├── pages/                  # Páginas da documentação
│   │   │   ├── Home.tsx            # Página inicial
│   │   │   ├── Introducao.tsx      # Introdução geral
│   │   │   ├── Anunciantes.tsx     # Guia para Anunciantes
│   │   │   ├── Editores.tsx        # Guia para Editores
│   │   │   └── NotFound.tsx        # Página 404
│   │   ├── components/
│   │   │   └── DocsLayout.tsx      # Layout principal
│   │   ├── App.tsx                 # Roteamento
│   │   ├── index.css               # Estilos globais
│   │   └── main.tsx                # Entry point
│   ├── public/                     # Assets estáticos
│   └── index.html                  # Template HTML
├── dist/                           # Arquivos compilados (gerados)
│   └── public/                     # Arquivos prontos para Apache
│       ├── index.html
│       ├── assets/                 # CSS e JavaScript compilados
│       └── .htaccess               # Configuração Apache
├── package.json                    # Dependências do projeto
└── DOCUMENTACAO_README.md          # Este arquivo
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
- Painel do Anunciante (Dashboard, Estatísticas, Campanhas, Pagamentos, Marketplace)
- Criando primeira campanha (passo a passo)
- Melhores práticas
- Suporte e recursos

### 4. **Guia para Editores**
- Vantagens da plataforma
- Alto potencial de ganhos
- Múltiplos formatos de publicidade
- Painel do Editor (Dashboard, Estatísticas, Sites & Zonas, Pagamentos, Neverblock)
- Configurando primeiro site (passo a passo)
- Otimizando receita
- Melhores práticas
- Suporte e recursos

---

## Tecnologias Utilizadas

- **React 19:** Framework JavaScript para UI
- **TypeScript:** Tipagem estática
- **Tailwind CSS 4:** Framework CSS utilitário
- **Wouter:** Roteamento leve para SPA
- **shadcn/ui:** Componentes UI reutilizáveis
- **Vite:** Build tool moderno
- **Lucide React:** Ícones SVG

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

### Desenvolvimento
```bash
cd /home/ubuntu/bankmidia_docs
pnpm install
pnpm dev
```

Acesse `http://localhost:3000` no navegador.

### Produção
```bash
cd /home/ubuntu/bankmidia_docs
pnpm build
```

Os arquivos compilados estarão em `dist/public/`.

---

## Hospedagem no Apache

### Arquivos para Hospedagem

Os arquivos prontos para hospedagem estão em:
```
/home/ubuntu/bankmidia_docs/dist/public/
```

### Configuração Mínima

1. Copie os arquivos para o DocumentRoot do Apache
2. Certifique-se de que o módulo `mod_rewrite` está habilitado
3. O arquivo `.htaccess` já está configurado para SPA routing

### Instruções Detalhadas

Consulte o arquivo `GUIA_INSTALACAO_APACHE.md` para instruções completas de instalação e configuração.

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
- 4 páginas principais
- Conteúdo adaptado para BankMidia/MidiaPix
- Baseado na documentação ExAds
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
- **Email:** moiseszapana@bankmidia.com.br
- **GitHub:** https://github.com/moiseszapana
- **Repositório:** https://github.com/moiseszapana/BankMidia-MidiaPIX
- **Documentação ExAds:** https://docs-advanced.exads.com/

---

## Histórico de Versões

### v1.0 (15 de março de 2025)
- Versão inicial
- 4 páginas principais
- Design responsivo
- Otimizado para Apache
- Guia de instalação completo
- Footer com informações de autor e versionamento

---

## Licença

Esta documentação é propriedade do BankMidia e é fornecida como-é para fins de suporte ao usuário.

---

**Versão:** 1.1.0  
**Data:** 15 de março de 2025  
**Autor:** moiseszapana (moiseszapana@bankmidia.com.br)  
**Repositório:** https://github.com/moiseszapana/BankMidia-MidiaPIX  
**Desenvolvido com ❤️ para BankMidia/MidiaPix**
