import DocsLayout from '@/components/DocsLayout';

export default function API() {
  return (
    <DocsLayout currentPage="/api">
      <article className="prose max-w-4xl">
        <h1>Manual da API BankMidia/MidiaPix</h1>

        <section className="mb-8">
          <p>
            Este documento apresenta uma visão geral completa de como interagir e utilizar a <strong>API BankMidia/MidiaPix versão 2.0</strong>. A API fornece acesso programático a todas as funcionalidades da plataforma, permitindo que você integre o BankMidia/MidiaPix em suas aplicações.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
              ⚠️ Documentação Técnica para Usuários
            </h3>
            <p className="text-amber-800 mb-3">
              Esta é uma <strong>documentação técnica</strong> destinada exclusivamente a <strong>Anunciantes e Editores</strong> que já utilizam a plataforma BankMidia/MidiaPix.
            </p>
            <div className="bg-white rounded-lg p-4 border border-amber-300">
              <p className="text-sm font-semibold text-amber-900 mb-2">
                🔑 Requisitos para Utilizar a API:
              </p>
              <ul className="text-sm text-amber-800 space-y-1 ml-4">
                <li>• <strong>Username</strong>: Seu nome de usuário na plataforma</li>
                <li>• <strong>Password</strong>: Sua senha de acesso</li>
                <li>• <strong>Token de Acesso à API</strong>: Token fornecido pela plataforma</li>
              </ul>
              <p className="text-sm text-amber-800 mt-3">
                Essas credenciais são fornecidas exclusivamente para usuários cadastrados. Se você ainda não possui acesso, entre em contato com nossa equipe de suporte.
              </p>
            </div>
          </div>
        </section>

        <h2>Visão Geral da API</h2>
        <p>
          A API BankMidia/MidiaPix é uma API RESTful que permite que desenvolvedores integrem funcionalidades de publicidade programática em suas aplicações. A API fornece endpoints para gerenciar campanhas, sites, zonas, estatísticas, pagamentos e muito mais.
        </p>

        <h3>Informações Básicas</h3>
        <table>
          <thead>
            <tr>
              <th>Propriedade</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Base URL</strong></td>
              <td><code>https://api.bankmidia.com.br/v2</code></td>
            </tr>
            <tr>
              <td><strong>Versão da API</strong></td>
              <td>2.0</td>
            </tr>
            <tr>
              <td><strong>Formato de Dados</strong></td>
              <td>JSON</td>
            </tr>
            <tr>
              <td><strong>Autenticação</strong></td>
              <td>Token Bearer</td>
            </tr>
            <tr>
              <td><strong>Documentação Interativa</strong></td>
              <td><a href="https://api.bankmidia.com.br/v2/docs/" target="_blank">https://api.bankmidia.com.br/v2/docs/</a></td>
            </tr>
            <tr>
              <td><strong>Data da Atualização</strong></td>
              <td>13 de fevereiro de 2026</td>
            </tr>
          </tbody>
        </table>

        <h2>Endpoints Disponíveis</h2>
        <p>
          A API BankMidia/MidiaPix oferece os seguintes endpoints principais para gerenciar diferentes aspectos da plataforma:
        </p>

        <h3>Gerenciamento de Campanhas</h3>
        <p>
          Endpoints para criar, atualizar, listar e gerenciar campanhas publicitárias.
        </p>
        <ul>
          <li><strong>GET /campaigns</strong> - Listar todas as campanhas</li>
          <li><strong>POST /campaigns</strong> - Criar nova campanha</li>
          <li><strong>GET /campaigns/{'{id}'}</strong> - Obter detalhes de uma campanha</li>
          <li><strong>PUT /campaigns/{'{id}'}</strong> - Atualizar uma campanha</li>
          <li><strong>DELETE /campaigns/{'{id}'}</strong> - Deletar uma campanha</li>
        </ul>

        <h3>Gerenciamento de Sites</h3>
        <p>
          Endpoints para gerenciar sites e propriedades digitais.
        </p>
        <ul>
          <li><strong>GET /sites</strong> - Listar todos os sites</li>
          <li><strong>POST /sites</strong> - Criar novo site</li>
          <li><strong>GET /sites/{'{id}'}</strong> - Obter detalhes de um site</li>
          <li><strong>PUT /sites/{'{id}'}</strong> - Atualizar um site</li>
          <li><strong>DELETE /sites/{'{id}'}</strong> - Deletar um site</li>
        </ul>

        <h3>Gerenciamento de Zonas</h3>
        <p>
          Endpoints para gerenciar zonas de anúncios dentro de sites.
        </p>
        <ul>
          <li><strong>GET /zones</strong> - Listar todas as zonas</li>
          <li><strong>POST /zones</strong> - Criar nova zona</li>
          <li><strong>GET /zones/{'{id}'}</strong> - Obter detalhes de uma zona</li>
          <li><strong>PUT /zones/{'{id}'}</strong> - Atualizar uma zona</li>
          <li><strong>DELETE /zones/{'{id}'}</strong> - Deletar uma zona</li>
        </ul>

        <h3>Estatísticas e Relatórios</h3>
        <p>
          Endpoints para acessar dados de desempenho e estatísticas.
        </p>
        <ul>
          <li><strong>GET /statistics</strong> - Obter estatísticas gerais</li>
          <li><strong>GET /statistics/campaigns</strong> - Estatísticas por campanha</li>
          <li><strong>GET /statistics/sites</strong> - Estatísticas por site</li>
          <li><strong>GET /statistics/zones</strong> - Estatísticas por zona</li>
        </ul>

        <h3>Gerenciamento de Pagamentos</h3>
        <p>
          Endpoints para gerenciar pagamentos e faturas.
        </p>
        <ul>
          <li><strong>GET /payments</strong> - Listar pagamentos</li>
          <li><strong>GET /payments/{'{id}'}</strong> - Obter detalhes de um pagamento</li>
          <li><strong>POST /payments</strong> - Criar novo pagamento</li>
        </ul>

        <h3>Gerenciamento de Usuário</h3>
        <p>
          Endpoints para gerenciar informações do usuário e conta.
        </p>
        <ul>
          <li><strong>GET /user</strong> - Obter informações do usuário</li>
          <li><strong>PUT /user</strong> - Atualizar informações do usuário</li>
          <li><strong>POST /login</strong> - Autenticar e obter token</li>
        </ul>

        <h3>Marketplace</h3>
        <p>
          Endpoints para acessar o marketplace de sites e inventário.
        </p>
        <ul>
          <li><strong>GET /marketplace</strong> - Listar sites disponíveis no marketplace</li>
          <li><strong>GET /marketplace/{'{id}'}</strong> - Obter detalhes de um site</li>
        </ul>

        <h3>Entrega de Anúncios (Ad Delivery)</h3>
        <p>
          Endpoint para solicitar anúncios em tempo real baseado em zonas e targeting.
        </p>
        <ul>
          <li><strong>POST https://s.bankmidia.com.br/v1/api.php</strong> - Solicitar anúncios para zonas específicas</li>
        </ul>

        <h4>Exemplo de Requisição - Entrega de Anúncios</h4>
        <p>
          Este endpoint permite solicitar anúncios para uma ou mais zonas, com suporte a targeting customizado e palavras-chave.
        </p>

        <pre><code>{`POST https://s.bankmidia.com.br/v1/api.php
Content-Type: application/json

{
  "user": {
    "id": "your_nickname",
    "ip": "xxx.xxx.xxx.xxx",
    "language": "pt-BR",
    "referer": "https://your-website.com.br/",
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
  },
  "zones": [
    {
      "id": 15,
      "keywords": "finances, pagamentos",
      "custom_targeting": {
        "ex_car-brand": "TOYOTA",
        "ex_credit-score": "300"
      }
    }
  ]
}`}</code></pre>

        <h4>Parâmetros do Usuário</h4>
        <table>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>id</code></td>
              <td>string</td>
              <td>Identificador único do usuário ou sessão</td>
            </tr>
            <tr>
              <td><code>ip</code></td>
              <td>string</td>
              <td>Endereço IP do usuário</td>
            </tr>
            <tr>
              <td><code>language</code></td>
              <td>string</td>
              <td>Idioma preferido do usuário (ex: pt-BR, en-US)</td>
            </tr>
            <tr>
              <td><code>referer</code></td>
              <td>string</td>
              <td>URL da página onde o anúncio será exibido</td>
            </tr>
            <tr>
              <td><code>ua</code></td>
              <td>string</td>
              <td>User Agent do navegador do usuário</td>
            </tr>
          </tbody>
        </table>

        <h4>Parâmetros das Zonas</h4>
        <table>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>id</code></td>
              <td>number</td>
              <td>ID da zona onde o anúncio será exibido</td>
            </tr>
            <tr>
              <td><code>keywords</code></td>
              <td>string</td>
              <td>Palavras-chave separadas por vírgula para targeting contextual</td>
            </tr>
            <tr>
              <td><code>custom_targeting</code></td>
              <td>object</td>
              <td>Objeto com pares chave-valor para targeting customizado</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Nota:</strong> Este endpoint é otimizado para baixa latência e deve ser usado para solicitações de anúncios em tempo real.
        </p>

        <h4>Estrutura da Resposta</h4>
        <p>
          A resposta é retornada em formato JSON e contém informações sobre os anúncios disponíveis para as zonas solicitadas.
        </p>

        <h5>Campos da Resposta - Zones</h5>
        <table>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>idzone</code></td>
              <td>number</td>
              <td>ID da zona de anúncio</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>string</td>
              <td>Formato do anúncio: banner, sticky_banner, popunder, instant_message, mobile_instant_message, native_ad, outstream_video</td>
            </tr>
            <tr>
              <td><code>data</code></td>
              <td>object</td>
              <td>Objeto contendo os dados do anúncio</td>
            </tr>
          </tbody>
        </table>

        <h5>Campos da Resposta - Data (Banner)</h5>
        <table>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>url</code></td>
              <td>string</td>
              <td>URL de destino do anúncio (click-through)</td>
            </tr>
            <tr>
              <td><code>impression</code></td>
              <td>string</td>
              <td>URL do rastreador de impressão (deve ser chamada quando o anúncio for exibido)</td>
            </tr>
            <tr>
              <td><code>image</code></td>
              <td>string</td>
              <td>URL da imagem original do anúncio</td>
            </tr>
            <tr>
              <td><code>width</code></td>
              <td>number</td>
              <td>Largura do anúncio em pixels</td>
            </tr>
            <tr>
              <td><code>height</code></td>
              <td>number</td>
              <td>Altura do anúncio em pixels</td>
            </tr>
            <tr>
              <td><code>media</code></td>
              <td>string</td>
              <td>Tipo de mídia: img_banner, html_banner, ou video_banner</td>
            </tr>
            <tr>
              <td><code>html</code></td>
              <td>string</td>
              <td>(Opcional) Código HTML do anúncio (quando media = html_banner)</td>
            </tr>
            <tr>
              <td><code>video</code></td>
              <td>string</td>
              <td>(Opcional) URL do vídeo (quando media = video_banner)</td>
            </tr>
            <tr>
              <td><code>optimum_image</code></td>
              <td>string</td>
              <td>(Opcional) Versão MP4 otimizada para GIFs animados</td>
            </tr>
            <tr>
              <td><code>variation_fields</code></td>
              <td>array</td>
              <td>Array de campos customizáveis (tag + value)</td>
            </tr>
          </tbody>
        </table>

        <h5>Campos de Variation Fields</h5>
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>title</code></td>
              <td>Título do anúncio</td>
            </tr>
            <tr>
              <td><code>description</code></td>
              <td>Descrição do anúncio</td>
            </tr>
            <tr>
              <td><code>brand</code></td>
              <td>Nome da marca</td>
            </tr>
            <tr>
              <td><code>cta</code></td>
              <td>Call-to-action (ex: "Clique aqui!")</td>
            </tr>
          </tbody>
        </table>

        <h4>Exemplo de Resposta - Image Banner</h4>
        <pre><code>{`{
  "zones": [
    {
      "idzone": 15,
      "type": "banner",
      "data": {
        "url": "http://main.bankmidia.com.br/click.php?data=...",
        "impression": "http://syndication.bankmidia.com.br/cimp.php?t=api&data=...",
        "image": "http://static.bankmidia.com.br/library/674471/66c5e562a8a324a649c05a52bb03b65be3f0882a.png",
        "width": 300,
        "height": 250,
        "media": "img_banner",
        "variation_fields": [
          {
            "tag": "title",
            "value": "Financiamento Toyota"
          },
          {
            "tag": "description",
            "value": "Condições especiais para score acima de 300"
          },
          {
            "tag": "brand",
            "value": "Toyota"
          },
          {
            "tag": "cta",
            "value": "Simule agora!"
          }
        ]
      }
    }
  ]
}`}</code></pre>

        <h4>Exemplo de Resposta - HTML Banner</h4>
        <pre><code>{`{
  "zones": [
    {
      "idzone": 15,
      "type": "banner",
      "data": {
        "html": "<div id='ad_container'>Anúncio HTML Interativo</div>",
        "impression": "http://syndication.bankmidia.com.br/cimp.php?t=api&data=...",
        "width": 300,
        "height": 250,
        "media": "html_banner",
        "variation_fields": [...]
      }
    }
  ]
}`}</code></pre>

        <h4>Exemplo de Resposta - Video Banner</h4>
        <pre><code>{`{
  "zones": [
    {
      "idzone": 15,
      "type": "banner",
      "data": {
        "url": "http://main.bankmidia.com.br/click.php?data=...",
        "impression": "http://syndication.bankmidia.com.br/cimp.php?t=api&data=...",
        "video": "http://static.bankmidia.com.br/library/256238/906f02361f3cd12043514304c777ed489599f637.mp4",
        "width": 300,
        "height": 250,
        "media": "video_banner",
        "variation_fields": [...]
      }
    }
  ]
}`}</code></pre>

        <h4>Como Registrar Impressões</h4>
        <p>
          Para registrar uma impressão, você deve fazer uma requisição GET para a URL fornecida no campo <code>impression</code>. A melhor forma de fazer isso é:
        </p>
        <pre><code>{`<!-- Adicione esta tag onde o anúncio for exibido -->
<img src="URL_DO_IMPRESSION_TRACKER" width="0" height="0" style="display:none;" />`}</code></pre>

        <h3>Outros Endpoints</h3>
        <ul>
          <li><strong>GET /collections</strong> - Listar coleções e tipos de anúncios</li>
          <li><strong>GET /goals</strong> - Gerenciar objetivos de campanha</li>
          <li><strong>GET /offers</strong> - Listar ofertas disponíveis</li>
          <li><strong>GET /variations</strong> - Gerenciar variações de anúncios</li>
          <li><strong>GET /referrals</strong> - Gerenciar programa de referência</li>
          <li><strong>GET /notifications</strong> - Gerenciar notificações</li>
          <li><strong>GET /library</strong> - Acessar biblioteca de recursos</li>
          <li><strong>GET /bidders</strong> - Gerenciar bidders</li>
          <li><strong>GET /network</strong> - Informações de rede</li>
          <li><strong>GET /logger</strong> - Acessar logs</li>
        </ul>

        <h2>Autenticação</h2>
        <p>
          A API BankMidia/MidiaPix utiliza autenticação baseada em token Bearer. Para acessar a API, você precisa:
        </p>

        <h3>Obter Token de Autenticação</h3>
        <p>
          Faça uma requisição POST para o endpoint de login com suas credenciais:
        </p>

        <pre><code>{`POST /login
Content-Type: application/json

{
  "email": "seu_email@exemplo.com",
  "password": "sua_senha"
}`}</code></pre>

        <p>
          A resposta conterá um token que você deve usar em todas as requisições subsequentes:
        </p>

        <pre><code>{`{
  "token": "seu_token_aqui",
  "user": {
    "id": 123,
    "email": "seu_email@exemplo.com",
    "name": "Seu Nome"
  }
}`}</code></pre>

        <h3>Usar o Token em Requisições</h3>
        <p>
          Adicione o token no header <code>Authorization</code> de todas as requisições:
        </p>

        <pre><code>{`GET /campaigns
Authorization: Bearer seu_token_aqui
Content-Type: application/json`}</code></pre>

        <h2>Modelos de Precificação</h2>
        <p>
          A API suporta os seguintes modelos de precificação para campanhas:
        </p>

        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Modelo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>CPC</strong></td>
              <td>Custo Por Clique - Pague apenas quando alguém clica no seu anúncio</td>
            </tr>
            <tr>
              <td>2</td>
              <td><strong>CPM</strong></td>
              <td>Custo Por Mil Impressões - Pague por cada 1.000 exibições do seu anúncio</td>
            </tr>
            <tr>
              <td>3</td>
              <td><strong>CPA</strong></td>
              <td>Custo Por Ação - Pague apenas quando uma ação específica é concluída</td>
            </tr>
            <tr>
              <td>4</td>
              <td><strong>Smart CPM</strong></td>
              <td>CPM Inteligente - Otimização automática de CPM baseada em desempenho</td>
            </tr>
            <tr>
              <td>5</td>
              <td><strong>CPV</strong></td>
              <td>Custo Por Visualização - Para campanhas de vídeo</td>
            </tr>
            <tr>
              <td>7</td>
              <td><strong>Smart CPC</strong></td>
              <td>CPC Inteligente - Otimização automática de CPC baseada em desempenho</td>
            </tr>
            <tr>
              <td>8</td>
              <td><strong>Smart Bid</strong></td>
              <td>Licitação Inteligente - Sistema de licitação automática avançado</td>
            </tr>
          </tbody>
        </table>

        <h2>Tamanhos de Anúncios Suportados</h2>
        <p>
          A API suporta os seguintes tamanhos de anúncios:
        </p>

        <ul>
          <li>468x60 - Banner horizontal</li>
          <li>728x90 - Leaderboard</li>
          <li>260x340 - Half Page</li>
          <li>120x600 - Skyscraper</li>
          <li>300x250 - Medium Rectangle (mais popular)</li>
          <li>250x250 - Square</li>
          <li>160x600 - Wide Skyscraper</li>
          <li>660x250 - Billboard</li>
          <li>600x90 - Big Leaderboard</li>
          <li>160x1600 - Wide Skyscraper Grande</li>
          <li>338x235 - Custom</li>
          <li>300x100 - Custom</li>
          <li>300x50 - Custom</li>
          <li>1x50 - Custom</li>
          <li>250x150 - Custom</li>
          <li>945x100 - Custom</li>
          <li>300x600 - Half Page</li>
          <li>315x300 - Custom</li>
          <li>300x300 - Square Grande</li>
          <li>300x275 - Custom</li>
        </ul>

        <h2>Tratamento de Erros</h2>
        <p>
          A API retorna códigos de status HTTP padrão para indicar o resultado de uma requisição:
        </p>

        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Significado</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>200</td>
              <td>OK</td>
              <td>Requisição bem-sucedida</td>
            </tr>
            <tr>
              <td>201</td>
              <td>Created</td>
              <td>Recurso criado com sucesso</td>
            </tr>
            <tr>
              <td>400</td>
              <td>Bad Request</td>
              <td>Requisição inválida ou parâmetros incorretos</td>
            </tr>
            <tr>
              <td>401</td>
              <td>Unauthorized</td>
              <td>Autenticação falhou ou token inválido</td>
            </tr>
            <tr>
              <td>403</td>
              <td>Forbidden</td>
              <td>Acesso negado ao recurso</td>
            </tr>
            <tr>
              <td>404</td>
              <td>Not Found</td>
              <td>Recurso não encontrado</td>
            </tr>
            <tr>
              <td>500</td>
              <td>Internal Server Error</td>
              <td>Erro interno do servidor</td>
            </tr>
          </tbody>
        </table>

        <h2>Paginação</h2>
        <p>
          Endpoints que retornam listas de recursos suportam paginação através dos parâmetros:
        </p>

        <ul>
          <li><strong>limit</strong> - Número máximo de registros a retornar (padrão: 50)</li>
          <li><strong>offset</strong> - Número de registros a pular (padrão: 0)</li>
          <li><strong>count</strong> - Se true, retorna o número total de registros (padrão: false)</li>
        </ul>

        <p>
          Exemplo:
        </p>

        <pre><code>{`GET /campaigns?limit=10&offset=20&count=true`}</code></pre>

        <h2>Exemplo de Requisição Completa</h2>
        <p>
          Aqui está um exemplo de como fazer uma requisição completa à API para listar campanhas:
        </p>

        <pre><code>{`curl -X GET "https://api.bankmidia.com.br/v2/campaigns?limit=10&offset=0" \\
  -H "Authorization: Bearer seu_token_aqui" \\
  -H "Content-Type: application/json"`}</code></pre>

        <p>
          Resposta esperada:
        </p>

        <pre><code>{`{
  "result": [
    {
      "id": 123,
      "name": "Minha Campanha",
      "status": 1,
      "pricing_model": 2,
      "size": "300x250",
      "start_date": "2025-03-15",
      "end_date": "2025-04-15",
      "total_budget_limit": 1000,
      "total_budget_spent": 250
    }
  ],
  "request_metadata": {
    "limit": 10,
    "offset": 0,
    "count": 1
  }
}`}</code></pre>

        <h2>Documentação Interativa</h2>
        <p>
          Para explorar todos os endpoints e testar requisições interativamente, acesse a documentação interativa da API:
        </p>

        <p>
          <a href="https://api.bankmidia.com.br/v2/docs/" target="_blank" className="text-primary font-semibold">
            https://api.bankmidia.com.br/v2/docs/
          </a>
        </p>

        <p>
          A documentação interativa permite que você:
        </p>

        <ul>
          <li>Explore todos os endpoints disponíveis</li>
          <li>Veja os parâmetros e respostas esperadas</li>
          <li>Teste requisições diretamente no navegador</li>
          <li>Veja exemplos de código em diferentes linguagens</li>
        </ul>

        <h2>Boas Práticas</h2>

        <h3>Segurança</h3>
        <ul>
          <li>Sempre use HTTPS para todas as requisições</li>
          <li>Guarde seu token de autenticação em segurança</li>
          <li>Nunca compartilhe seu token ou credenciais</li>
          <li>Regenere tokens periodicamente</li>
        </ul>

        <h3>Performance</h3>
        <ul>
          <li>Use paginação para listar grandes quantidades de dados</li>
          <li>Implemente cache local quando apropriado</li>
          <li>Evite fazer requisições desnecessárias</li>
          <li>Use filtros para reduzir a quantidade de dados retornados</li>
        </ul>

        <h3>Tratamento de Erros</h3>
        <ul>
          <li>Sempre verifique o código de status HTTP da resposta</li>
          <li>Implemente retry logic para erros temporários</li>
          <li>Registre erros para debugging</li>
          <li>Forneça feedback útil ao usuário</li>
        </ul>

        <h2>Suporte</h2>
        <p>
          Para dúvidas, sugestões ou problemas com a API, entre em contato conosco:
        </p>

        <ul>
          <li><strong>Email:</strong> moiseszapana@bankmidia.com.br</li>
          <li><strong>Documentação Interativa:</strong> <a href="https://api.bankmidia.com.br/v2/docs/">https://api.bankmidia.com.br/v2/docs/</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/moiseszapana">https://github.com/moiseszapana</a></li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          <strong>Versão da Documentação:</strong> 1.5.0<br />
          <strong>API Version:</strong> 2.0<br />
          <strong>Data da Atualização:</strong> 13 de fevereiro de 2026
        </p>
      </article>
    </DocsLayout>
  );
}
