# Manual de Instalação - AdServer BankMidia/MidiaPix em Apache Linux

## Sumário
1. [Pré-requisitos](#pré-requisitos)
2. [Instalação do Apache](#instalação-do-apache)
3. [Preparação dos Arquivos](#preparação-dos-arquivos)
4. [Configuração do VirtualHost](#configuração-do-virtualhost)
5. [Habilitação de Módulos](#habilitação-de-módulos)
6. [Configuração HTTPS/SSL](#configuração-httpsssl)
7. [Testes e Validação](#testes-e-validação)
8. [Troubleshooting](#troubleshooting)

---

## Pré-requisitos

Antes de começar, certifique-se de que você possui:

- **Sistema Operacional:** Ubuntu 20.04 LTS ou superior / Debian 10+
- **Acesso root ou sudo:** Necessário para instalação de pacotes
- **Domínio ou IP:** Para acessar a documentação
- **Espaço em disco:** Mínimo 500MB disponível

### Verificar versão do sistema

```bash
lsb_release -a
uname -r
```

---

## Instalação do Apache

### 1. Atualizar repositórios

```bash
sudo apt update
sudo apt upgrade -y
```

### 2. Instalar Apache2

```bash
sudo apt install apache2 -y
```

### 3. Verificar instalação

```bash
apache2 -v
sudo systemctl status apache2
```

### 4. Iniciar o Apache

```bash
sudo systemctl start apache2
sudo systemctl enable apache2
```

---

## Preparação dos Arquivos

### 1. Criar diretório para a documentação

```bash
sudo mkdir -p /var/www/bankmidia-docs
sudo chown -R $USER:$USER /var/www/bankmidia-docs
sudo chmod -R 755 /var/www/bankmidia-docs
```

### 2. Copiar arquivos compilados

Copie os arquivos do diretório `dist/public/` para o DocumentRoot do Apache:

```bash
# Se você está no diretório do projeto
cp -r dist/public/* /var/www/bankmidia-docs/

# Ou, se você tem um arquivo compactado
unzip bankmidia-docs.zip -d /var/www/bankmidia-docs/
```

### 3. Definir permissões corretas

```bash
sudo chown -R www-data:www-data /var/www/bankmidia-docs
sudo chmod -R 755 /var/www/bankmidia-docs
sudo chmod -R 644 /var/www/bankmidia-docs/*
sudo find /var/www/bankmidia-docs -type d -exec chmod 755 {} \;
```

---

## Configuração do VirtualHost

### 1. Criar arquivo de configuração do VirtualHost

```bash
sudo nano /etc/apache2/sites-available/bankmidia-docs.conf
```

### 2. Adicionar conteúdo de configuração

```apache
<VirtualHost *:80>
    ServerName docs.bankmidia.com.br
    ServerAlias www.docs.bankmidia.com.br
    ServerAdmin admin@bankmidia.com.br

    DocumentRoot /var/www/bankmidia-docs

    # Logs
    ErrorLog ${APACHE_LOG_DIR}/bankmidia-docs-error.log
    CustomLog ${APACHE_LOG_DIR}/bankmidia-docs-access.log combined

    # Rewrite rules para SPA (Single Page Application)
    <Directory /var/www/bankmidia-docs>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted

        # Rewrite rules para redirecionar todas as rotas para index.html
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>

    # Compressão GZIP
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>

    # Cache headers
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresDefault "access plus 1 month"
        ExpiresByType text/html "access plus 1 hour"
        ExpiresByType text/css "access plus 1 month"
        ExpiresByType application/javascript "access plus 1 month"
        ExpiresByType image/jpeg "access plus 1 month"
        ExpiresByType image/png "access plus 1 month"
        ExpiresByType image/gif "access plus 1 month"
        ExpiresByType image/svg+xml "access plus 1 month"
    </IfModule>

    # Headers de segurança
    <IfModule mod_headers.c>
        Header set X-Content-Type-Options "nosniff"
        Header set X-Frame-Options "SAMEORIGIN"
        Header set X-XSS-Protection "1; mode=block"
        Header set Referrer-Policy "strict-origin-when-cross-origin"
    </IfModule>
</VirtualHost>
```

### 3. Habilitar o VirtualHost

```bash
sudo a2ensite bankmidia-docs.conf
```

### 4. Desabilitar o site padrão (opcional)

```bash
sudo a2dissite 000-default.conf
```

### 5. Testar configuração do Apache

```bash
sudo apache2ctl configtest
```

Você deve ver: `Syntax OK`

### 6. Recarregar Apache

```bash
sudo systemctl reload apache2
```

---

## Habilitação de Módulos

### 1. Verificar módulos necessários

```bash
sudo a2enmod rewrite
sudo a2enmod deflate
sudo a2enmod expires
sudo a2enmod headers
```

### 2. Recarregar Apache

```bash
sudo systemctl reload apache2
```

---

## Configuração HTTPS/SSL

### 1. Instalar Certbot (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-apache -y
```

### 2. Gerar certificado SSL

```bash
sudo certbot --apache -d docs.bankmidia.com.br -d www.docs.bankmidia.com.br
```

### 3. Renovação automática

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

### 4. Testar renovação

```bash
sudo certbot renew --dry-run
```

---

## Testes e Validação

### 1. Verificar se o Apache está rodando

```bash
sudo systemctl status apache2
```

### 2. Testar conectividade

```bash
curl http://localhost
curl https://docs.bankmidia.com.br
```

### 3. Verificar logs

```bash
# Logs de erro
sudo tail -f /var/log/apache2/bankmidia-docs-error.log

# Logs de acesso
sudo tail -f /var/log/apache2/bankmidia-docs-access.log
```

### 4. Testar arquivo .htaccess

Verifique se o arquivo `.htaccess` está presente em `/var/www/bankmidia-docs/`:

```bash
ls -la /var/www/bankmidia-docs/.htaccess
```

---

## Troubleshooting

### Problema: 403 Forbidden

**Solução:**
```bash
sudo chown -R www-data:www-data /var/www/bankmidia-docs
sudo chmod -R 755 /var/www/bankmidia-docs
```

### Problema: 404 Not Found em rotas

**Solução:** Verifique se o módulo `mod_rewrite` está habilitado:
```bash
sudo a2enmod rewrite
sudo systemctl reload apache2
```

### Problema: Módulo rewrite não funciona

**Solução:** Verifique a configuração do `.htaccess`:
```bash
cat /var/www/bankmidia-docs/.htaccess
```

### Problema: Certificado SSL não funciona

**Solução:** Renovar certificado manualmente:
```bash
sudo certbot renew --force-renewal
```

### Problema: Permissões insuficientes

**Solução:** Ajustar permissões:
```bash
sudo chown -R www-data:www-data /var/www/bankmidia-docs
sudo find /var/www/bankmidia-docs -type f -exec chmod 644 {} \;
sudo find /var/www/bankmidia-docs -type d -exec chmod 755 {} \;
```

### Problema: Apache não inicia

**Solução:** Verificar logs de erro:
```bash
sudo apache2ctl configtest
sudo journalctl -xe
```

---

## Monitoramento e Manutenção

### 1. Monitorar uso de recursos

```bash
# Monitorar Apache em tempo real
sudo apachectl fullstatus

# Ou usar htop
sudo apt install htop
htop
```

### 2. Backup da configuração

```bash
sudo tar -czf /backup/apache-config-backup.tar.gz /etc/apache2/
```

### 3. Atualizar documentação

Para atualizar a documentação:

```bash
# 1. Compilar novo build
npm run build

# 2. Fazer backup da versão anterior
sudo cp -r /var/www/bankmidia-docs /var/www/bankmidia-docs.backup

# 3. Copiar novos arquivos
sudo cp -r dist/public/* /var/www/bankmidia-docs/

# 4. Ajustar permissões
sudo chown -R www-data:www-data /var/www/bankmidia-docs
```

---

## Comandos Úteis

```bash
# Iniciar Apache
sudo systemctl start apache2

# Parar Apache
sudo systemctl stop apache2

# Reiniciar Apache
sudo systemctl restart apache2

# Recarregar configuração (sem desconectar clientes)
sudo systemctl reload apache2

# Verificar status
sudo systemctl status apache2

# Ver versão
apache2 -v

# Listar módulos habilitados
sudo apache2ctl -M

# Testar sintaxe de configuração
sudo apache2ctl configtest

# Ver logs em tempo real
sudo tail -f /var/log/apache2/access.log
sudo tail -f /var/log/apache2/error.log
```

---

## Suporte

Para dúvidas ou problemas, entre em contato:

- **Email:** contato@bankmidia.com.br
- **Repositório:** https://github.com/moiseszapana/AdServer-BankMidia-MidiaPIX
- **Documentação:** https://docs.bankmidia.com.br

---

**Última atualização:** 15 de março de 2025
**Versão:** 1.4.0
