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
              <td>15 de março de 2025</td>
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
          <li><strong>Email:</strong> moiseszapana@gmail.com</li>
          <li><strong>Documentação Interativa:</strong> <a href="https://api.bankmidia.com.br/v2/docs/">https://api.bankmidia.com.br/v2/docs/</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/moiseszapana">https://github.com/moiseszapana</a></li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          <strong>Versão da Documentação:</strong> 1.1.0<br />
          <strong>API Version:</strong> 2.0
        </p>
      </article>
    </DocsLayout>
  );
}
