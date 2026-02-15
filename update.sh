#!/bin/bash

###############################################################################
# Script de Atualização Automática - BankMidia Docs
# Atualiza o código do GitHub, compila e reinicia o servidor
###############################################################################

set -e  # Parar em caso de erro

echo "=========================================="
echo "  Atualização BankMidia Docs"
echo "=========================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Diretório do projeto (ajuste se necessário)
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

echo -e "${YELLOW}[1/5]${NC} Verificando atualizações no GitHub..."
git fetch origin

# Verificar se há atualizações
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})

if [ $LOCAL = $REMOTE ]; then
    echo -e "${GREEN}✓${NC} Código já está atualizado!"
    echo ""
    read -p "Deseja recompilar mesmo assim? (s/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[SsYy]$ ]]; then
        echo "Atualização cancelada."
        exit 0
    fi
else
    echo -e "${GREEN}✓${NC} Novas atualizações encontradas!"
fi

echo ""
echo -e "${YELLOW}[2/5]${NC} Baixando código atualizado..."
git pull origin main
echo -e "${GREEN}✓${NC} Código atualizado com sucesso!"

echo ""
echo -e "${YELLOW}[3/5]${NC} Instalando dependências..."
pnpm install --prod=false
echo -e "${GREEN}✓${NC} Dependências instaladas!"

echo ""
echo -e "${YELLOW}[4/5]${NC} Compilando projeto..."
pnpm build
echo -e "${GREEN}✓${NC} Projeto compilado!"

echo ""
echo -e "${YELLOW}[5/5]${NC} Reiniciando servidor..."

# Detectar ambiente e reiniciar apropriadamente
if command -v pm2 &> /dev/null; then
    # Se PM2 está instalado
    pm2 restart bankmidia-docs || pm2 start dist/index.js --name bankmidia-docs
    echo -e "${GREEN}✓${NC} Servidor reiniciado via PM2!"
elif [ -f "$PROJECT_DIR/server.pid" ]; then
    # Se existe arquivo PID
    PID=$(cat "$PROJECT_DIR/server.pid")
    if ps -p $PID > /dev/null 2>&1; then
        kill $PID
        sleep 2
    fi
    nohup node dist/index.js > logs/server.log 2>&1 &
    echo $! > "$PROJECT_DIR/server.pid"
    echo -e "${GREEN}✓${NC} Servidor reiniciado!"
else
    echo -e "${YELLOW}⚠${NC}  Reinicie manualmente o servidor no painel CWP:"
    echo "   1. Acesse: Node.js Selector"
    echo "   2. Clique em 'Restart' na aplicação"
fi

echo ""
echo "=========================================="
echo -e "${GREEN}✓ Atualização concluída com sucesso!${NC}"
echo "=========================================="
echo ""
echo "Versão atual: $(git describe --tags --always)"
echo "Último commit: $(git log -1 --pretty=format:'%h - %s (%cr)')"
echo ""
