# Project TODO

## Atualização da Documentação - Novo Endpoint API

- [x] Adicionar endpoint https://s.bankmidia.com.br/v1/api.php na página API.tsx
- [x] Atualizar versão para 1.5.0 na API.tsx
- [x] Atualizar data para 13 de fevereiro de 2026 na API.tsx
- [x] Atualizar DOCUMENTACAO_README.md
- [x] Atualizar INSTALACAO_CWP.md
- [x] Compilar projeto
- [x] Publicar no GitHub

## Adicionar Documentação da Resposta do Endpoint

- [x] Adicionar seção de resposta do endpoint de entrega de anúncios
- [x] Incluir exemplos de resposta JSON (Image Banner, HTML Banner, Video Banner)
- [x] Documentar campos da resposta (zones, data, variation_fields)
- [x] Compilar projeto
- [x] Publicar no GitHub

## Criar Script de Atualização Automática

- [x] Criar script update.sh para atualizar do GitHub
- [x] Adicionar instruções no DOCUMENTACAO_README.md
- [x] Adicionar instruções no INSTALACAO_CWP.md
- [x] Publicar no GitHub

## Corrigir Validação de Token no APITester

- [x] Ler arquivo APITester.tsx
- [x] Identificar problema na validação do token
- [x] Corrigir lógica de validação com logs detalhados
- [x] Adicionar opção de pular validação
- [x] Melhorar tratamento de erros (401, 403, 404, CORS)
- [x] Compilar projeto
- [x] Publicar no GitHub

## Adicionar Formulário de Login no APITester

- [x] Adicionar campos de username, password e api_token
- [x] Implementar chamada POST para /v2/login
- [x] Extrair Bearer token da resposta
- [x] Salvar token automaticamente após login
- [x] Adicionar opção de usar token manual (modo avançado)
- [x] Criar tabs para alternar entre login e token manual
- [x] Compilar projeto
- [x] Publicar no GitHub

## Atualizar Introdução da Documentação

- [x] Atualizar página Home.tsx com introdução acolhedora
- [x] Atualizar página API.tsx explicando requisitos de acesso
- [x] Atualizar página APITester.tsx com aviso sobre credenciais
- [x] Compilar projeto
- [x] Publicar no GitHub

## Adicionar Atualização do Node.js no update.sh

- [x] Adicionar verificação de versão do Node.js
- [x] Adicionar atualização automática via NVM (se disponível)
- [x] Atualizar numeração das etapas (1/6 a 6/6)
- [x] Publicar no GitHub

## Modificar update.sh para Versão Mais Recente do Node.js

- [x] Alterar script para sempre instalar versão mais recente (node) ao invés de v22 fixo
- [x] Atualizar instruções manuais também
- [x] Publicar no GitHub

## Corrigir Consulta de Campanhas no APITester

- [x] Ler APITester.tsx e identificar problema
- [x] Melhorar tratamento de erros com logs detalhados no console
- [x] Adicionar suporte a múltiplas estruturas de resposta da API
- [x] Aplicar mesmas melhorias para fetchZones
- [x] Compilar projeto
- [x] Publicar no GitHub

## Corrigir Conversão de Objeto para Array no APITester

- [x] Modificar fetchCampaigns para converter objeto {id: {...}} em array
- [x] Modificar fetchZones para converter objeto {id: {...}} em array
- [x] Compilar projeto
- [ ] Publicar no GitHub
