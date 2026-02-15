import DocsLayout from '@/components/DocsLayout';

export default function Introducao() {
  return (
    <DocsLayout currentPage="/introducao">
      <article className="prose max-w-4xl">
        <h1>Introdução Geral ao BankMidia/MidiaPix</h1>

        <section className="mb-8">
          <p>
            O Painel Administrativo do BankMidia/MidiaPix oferece uma interface unificada para que <strong>Anunciantes</strong> e <strong>Editores</strong> possam monitorar e gerenciar de forma abrangente todas as operações de suas campanhas de publicidade online. Esta documentação foi elaborada para fornecer uma visão geral detalhada de todos os componentes e funcionalidades do Painel Administrativo, atendendo tanto Anunciantes e Editores quanto aqueles que desempenham ambos os papéis.
          </p>
        </section>

        <h2>O que é o BankMidia/MidiaPix?</h2>
        <p>
          O BankMidia/MidiaPix é uma plataforma líder em tecnologia de publicidade programática. Oferece uma solução completa para gerenciamento de campanhas publicitárias online, combinando ferramentas avançadas de segmentação, análise em tempo real e múltiplas opções de monetização.
        </p>

        <h2>Arquitetura da Plataforma</h2>
        <p>
          A plataforma é dividida em dois perfis principais de usuário, cada um com funcionalidades específicas:
        </p>

        <h3>Anunciantes</h3>
        <p>
          Anunciantes são empresas ou profissionais que desejam promover seus produtos e serviços através de campanhas publicitárias. Na plataforma BankMidia/MidiaPix, eles podem:
        </p>
        <ul>
          <li>Criar e gerenciar campanhas publicitárias</li>
          <li>Segmentar audiências com precisão</li>
          <li>Acompanhar o desempenho em tempo real</li>
          <li>Otimizar investimentos com base em dados</li>
          <li>Acessar um marketplace de sites para comprar inventário</li>
        </ul>

        <h3>Editores</h3>
        <p>
          Editores são proprietários de sites ou plataformas digitais que desejam monetizar seu conteúdo através da exibição de anúncios. Na plataforma BankMidia/MidiaPix, eles podem:
        </p>
        <ul>
          <li>Gerenciar sites e zonas de anúncios</li>
          <li>Conectar com anunciantes de alta qualidade</li>
          <li>Maximizar a receita com ferramentas avançadas</li>
          <li>Acompanhar o desempenho de seus anúncios</li>
          <li>Utilizar soluções contra bloqueadores de anúncios</li>
        </ul>

        <h2>Navegadores Suportados</h2>
        <p>
          Para garantir a melhor experiência e o funcionamento adequado de todas as funcionalidades do Painel Administrativo, recomendamos o uso das seguintes versões de navegadores:
        </p>

        <table>
          <thead>
            <tr>
              <th>Navegador</th>
              <th>Versão Mínima</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Chrome</td>
              <td>80+</td>
            </tr>
            <tr>
              <td>Mozilla Firefox</td>
              <td>75+</td>
            </tr>
            <tr>
              <td>Opera</td>
              <td>67+</td>
            </tr>
            <tr>
              <td>Safari</td>
              <td>13+</td>
            </tr>
            <tr>
              <td>Microsoft Edge</td>
              <td>81+</td>
            </tr>
          </tbody>
        </table>

        <h2>Componentes Principais da Plataforma</h2>
        <p>
          A plataforma BankMidia/MidiaPix é composta por vários componentes principais que trabalham juntos para oferecer uma experiência completa:
        </p>

        <h3>Painel Administrativo</h3>
        <p>
          A interface principal onde Anunciantes e Editores acessam todas as funcionalidades. O painel é responsivo, otimizado para desktop e dispositivos móveis.
        </p>

        <h3>Dashboard</h3>
        <p>
          Oferece um resumo executivo em tempo real das métricas mais importantes, permitindo um acompanhamento rápido e eficaz do status das operações.
        </p>

        <h3>Estatísticas</h3>
        <p>
          Fornece dados detalhados para uma análise aprofundada do desempenho, ideal para guiar o planejamento estratégico e diagnosticar possíveis problemas.
        </p>

        <h3>Sistema de Pagamentos</h3>
        <p>
          Centraliza a gestão de todos os aspectos financeiros, incluindo faturas, saldos e métodos de pagamento.
        </p>

        <h2>Recursos de Segurança</h2>
        <p>
          A plataforma implementa múltiplas camadas de segurança para proteger os dados e as operações dos usuários:
        </p>
        <ul>
          <li>Autenticação segura de usuários</li>
          <li>Criptografia de dados em trânsito e em repouso</li>
          <li>Conformidade com regulamentações de privacidade (GDPR, CCPA)</li>
          <li>Auditoria de ações e logs de segurança</li>
          <li>Autenticação de dois fatores (2FA)</li>
        </ul>

        <h2>Próximos Passos</h2>
        <p>
          Agora que você tem uma visão geral da plataforma, escolha seu perfil para acessar o guia completo:
        </p>
        <ul>
          <li><strong>Anunciantes:</strong> Acesse o <a href="/anunciantes">Guia para Anunciantes</a> para aprender como criar e gerenciar suas campanhas.</li>
          <li><strong>Editores:</strong> Acesse o <a href="/editores">Guia para Editores</a> para aprender como gerenciar seus sites e maximizar a receita.</li>
        </ul>
      </article>
    </DocsLayout>
  );
}
