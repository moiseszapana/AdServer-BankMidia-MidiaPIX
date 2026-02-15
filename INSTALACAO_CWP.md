# Instalação no CWP (Control Web Panel)

## Visão Geral

Este guia explica como instalar e configurar a documentação BankMidia/MidiaPix em um servidor com **CWP (Control Web Panel)** usando o gerenciador de aplicações Node.js integrado.

---

## Pré-requisitos

- Servidor com CWP instalado
- Acesso ao painel CWP
- Node.js habilitado no CWP (versão 18+ recomendada)
- Domínio ou subdomínio configurado
- Acesso SSH ao servidor (opcional, mas recomendado)

---

## Passo 1: Preparar os Arquivos

### 1.1 Fazer Upload do Projeto

Você tem duas opções:

**Opção A: Via SSH (Recomendado)**
```bash
# Conectar ao servidor via SSH
ssh usuario@seuservidor.com

# Navegar para o diretório do usuário
cd /home/seuusuario/

# Clonar o repositório
git clone https://github.com/moiseszapana/AdServer-BankMidia-MidiaPIX.git bankmidia_docs

# Ou fazer upload via SCP
scp -r /caminho/local/bankmidia_docs usuario@seuservidor.com:/home/seuusuario/
```

**Opção B: Via File Manager do CWP**
1. Acesse: **CWP > File Manager**
2. Navegue até `/home/seuusuario/`
3. Faça upload do arquivo ZIP do projeto
4. Extraia o arquivo ZIP

---

## Passo 2: Instalar Dependências

### 2.1 Via SSH
```bash
cd /home/seuusuario/bankmidia_docs

# Instalar pnpm globalmente (se ainda não estiver instalado)
npm install -g pnpm

# Instalar dependências do projeto
pnpm install

# Compilar o projeto
pnpm build
```

### 2.2 Via Terminal do CWP
1. Acesse: **CWP > Terminal**
2. Execute os mesmos comandos acima

---

## Passo 3: Configurar Aplicação Node.js no CWP

### 3.1 Acessar o Gerenciador Node.js

1. Faça login no painel CWP
2. Navegue até: **WebServers Settings > Node.js Selector**
3. Ou acesse diretamente: `https://seu-servidor:2087/cwp_xxxxx/admin/index.php?module=mod_nodejs`

### 3.2 Criar Nova Aplicação

Clique em **"Create Application"** e preencha:

| Campo | Valor |
|-------|-------|
| **Application Name** | `bankmidia_docs` |
| **Domain** | Selecione seu domínio (ex: `docs.bankmidia.com.br`) |
| **Application Root** | `/home/seuusuario/bankmidia_docs` |
| **Application Startup File** | `dist/index.js` |
| **Node.js Version** | `18.x` ou superior |
| **Application Mode** | `Production` |
| **Environment Variables** | (deixe em branco, o CWP define automaticamente) |

### 3.3 Configurações Avançadas (Opcional)

Se disponível, configure:

- **Auto Restart**: `Enabled` (reinicia automaticamente em caso de falha)
- **Max Memory**: `512 MB` (ajuste conforme necessário)
- **Instances**: `1` (para começar)

---

## Passo 4: Configurar Proxy Reverso

O CWP geralmente configura automaticamente o proxy reverso do Apache para a aplicação Node.js. Verifique se está funcionando:

### 4.1 Verificar Configuração do Apache

```bash
# Ver configuração do VirtualHost
cat /usr/local/apache/conf.d/vhosts/seudominio.conf
```

Deve conter algo similar a:

```apache
<VirtualHost *:80>
    ServerName docs.bankmidia.com.br
    ServerAlias www.docs.bankmidia.com.br
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:PORTA_GERADA/
    ProxyPassReverse / http://localhost:PORTA_GERADA/
    
    ErrorLog /var/log/apache2/bankmidia-docs-error.log
    CustomLog /var/log/apache2/bankmidia-docs-access.log combined
</VirtualHost>
```

**Nota:** O CWP atribui automaticamente uma porta única para cada aplicação Node.js.

---

## Passo 5: Iniciar a Aplicação

### 5.1 Via Painel CWP

1. No **Node.js Selector**, localize sua aplicação `bankmidia_docs`
2. Clique em **"Start"** ou **"Restart"**
3. Aguarde alguns segundos
4. Verifique se o status mudou para **"Running"**

### 5.2 Via SSH (Alternativo)

```bash
cd /home/seuusuario/bankmidia_docs
NODE_ENV=production PORT=PORTA_GERADA node dist/index.js
```

---

## Passo 6: Configurar SSL/HTTPS

### 6.1 Via AutoSSL do CWP

1. Acesse: **CWP > AutoSSL**
2. Selecione o domínio `docs.bankmidia.com.br`
3. Clique em **"Install SSL"**
4. O CWP instalará automaticamente o certificado Let's Encrypt

### 6.2 Via Certbot (Manual)

```bash
# Instalar Certbot (se não estiver instalado)
yum install certbot python3-certbot-apache -y

# Obter certificado
certbot --apache -d docs.bankmidia.com.br -d www.docs.bankmidia.com.br

# Renovação automática já está configurada
```

---

## Passo 7: Testar a Aplicação

### 7.1 Verificar Acesso

Abra o navegador e acesse:
- **HTTP:** `http://docs.bankmidia.com.br`
- **HTTPS:** `https://docs.bankmidia.com.br`

### 7.2 Verificar Logs

**Via CWP:**
1. **Node.js Selector** > Clique na aplicação > **"View Logs"**

**Via SSH:**
```bash
# Logs da aplicação Node.js
pm2 logs bankmidia_docs

# Logs do Apache
tail -f /var/log/apache2/bankmidia-docs-error.log
tail -f /var/log/apache2/bankmidia-docs-access.log
```

---

## Manutenção

### Atualizar a Aplicação

```bash
cd /home/seuusuario/bankmidia_docs

# Fazer backup (opcional)
cp -r dist dist.backup

# Atualizar código (se usar Git)
git pull origin main

# Reinstalar dependências e recompilar
pnpm install
pnpm build

# Reiniciar aplicação via CWP
# Ou via SSH:
pm2 restart bankmidia_docs
```

### Monitorar Performance

**Via CWP:**
- **Node.js Selector** > Visualizar métricas de CPU e memória

**Via SSH:**
```bash
# Status da aplicação
pm2 status

# Monitorar em tempo real
pm2 monit
```

---

## Troubleshooting

### Aplicação não inicia

1. **Verificar logs:**
   ```bash
   pm2 logs bankmidia_docs --lines 50
   ```

2. **Verificar permissões:**
   ```bash
   chown -R seuusuario:seuusuario /home/seuusuario/bankmidia_docs
   chmod -R 755 /home/seuusuario/bankmidia_docs
   ```

3. **Verificar porta:**
   ```bash
   netstat -tulpn | grep PORTA_GERADA
   ```

### Erro 502 Bad Gateway

- Aplicação Node.js não está rodando
- Porta incorreta no proxy reverso
- Firewall bloqueando a porta

**Solução:**
```bash
# Reiniciar aplicação
pm2 restart bankmidia_docs

# Verificar status do Apache
systemctl status httpd

# Reiniciar Apache
systemctl restart httpd
```

### Erro 404 em rotas

- Configuração do proxy reverso incorreta
- Arquivo `dist/index.js` não encontrado

**Solução:**
- Verificar se `pnpm build` foi executado
- Verificar caminho no CWP Node.js Selector

### Alta utilização de memória

```bash
# Aumentar limite de memória no CWP
# Ou via PM2:
pm2 restart bankmidia_docs --max-memory-restart 512M
```

---

## Comandos Úteis

```bash
# Status da aplicação
pm2 status

# Logs em tempo real
pm2 logs bankmidia_docs

# Reiniciar aplicação
pm2 restart bankmidia_docs

# Parar aplicação
pm2 stop bankmidia_docs

# Ver informações detalhadas
pm2 show bankmidia_docs

# Monitorar CPU e memória
pm2 monit
```

---

## Configurações Recomendadas

### Para Produção

```bash
# Configurar PM2 para iniciar automaticamente
pm2 startup
pm2 save

# Configurar logs rotativos
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### Otimização de Performance

1. **Habilitar compressão GZIP** (já configurado no `.htaccess`)
2. **Configurar cache** no Apache
3. **Usar CDN** para assets estáticos (opcional)

---

## Segurança

### Recomendações

1. **Firewall:**
   ```bash
   # Permitir apenas portas necessárias
   firewall-cmd --permanent --add-service=http
   firewall-cmd --permanent --add-service=https
   firewall-cmd --reload
   ```

2. **Atualizar regularmente:**
   ```bash
   yum update -y
   ```

3. **Monitorar logs:**
   ```bash
   tail -f /var/log/apache2/bankmidia-docs-access.log
   ```

---

## Suporte

Para dúvidas ou problemas:

- **Email:** contato@bankmidia.com.br
- **GitHub:** https://github.com/moiseszapana/AdServer-BankMidia-MidiaPIX
- **Documentação CWP:** http://wiki.centos-webpanel.com/

---

**Versão:** 1.5.0  
**Data:** 13 de fevereiro de 2026  
**Autor:** moiseszapana (contato@bankmidia.com.br)  
**Desenvolvido para BankMidia/MidiaPix**
