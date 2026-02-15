import { useLanguageFromUrl } from '@/hooks/useLanguageFromUrl';
import { getTranslation } from '@/lib/translations';
import DocsLayout from '@/components/DocsLayout';

export default function Editores() {
  return (
    <DocsLayout currentPage="/editores">
      <article className="prose max-w-4xl">
        <h1>Guia Completo para Editores</h1>

        <section className="mb-8">
          <p>
            Como <strong>Editor</strong>, o Painel Administrativo do BankMidia/MidiaPix permite que você gerencie as zonas de anúncios em seu(s) site(s) para garantir que gerem receita máxima para seu negócio. Usando a aba <strong>Sites & Zonas</strong>, você pode administrar os sites e zonas que oferece aos Anunciantes e visualizar insights em tempo real sobre seu desempenho nas abas <strong>Dashboard</strong> e <strong>Estatísticas</strong>.
          </p>
        </section>

        <h2>Vantagens para Editores</h2>
        <p>
          A plataforma foi desenhada para oferecer vantagens competitivas aos editores:
        </p>

        <h3>Alto Potencial de Ganhos</h3>
        <p>
          Ao corresponder os Anunciantes com melhor desempenho às suas zonas de anúncios e nossa própria solução de bloqueio de anúncios para manter essas receitas fluindo. Você pode:
        </p>
        <ul>
          <li>Conectar com anunciantes de alta qualidade</li>
          <li>Negociar taxas competitivas</li>
          <li>Acessar múltiplas fontes de receita</li>
          <li>Maximizar o CPM (custo por mil impressões)</li>
        </ul>

        <h3>Múltiplos Formatos de Publicidade</h3>
        <p>
          Permitindo que você integre zonas de anúncios específicas que se encaixem perfeitamente com o tipo de visitantes que você recebe. Os formatos disponíveis incluem:
        </p>
        <ul>
          <li><strong>Display Ads:</strong> Anúncios em imagem (banners, retângulos, etc.)</li>
          <li><strong>Native Ads:</strong> Anúncios que se integram naturalmente ao conteúdo</li>
          <li><strong>Vídeo Ads:</strong> Anúncios em vídeo (pre-roll, mid-roll, post-roll)</li>
          <li><strong>Text Ads:</strong> Anúncios em texto</li>
          <li><strong>Rich Media:</strong> Anúncios interativos e animados</li>
        </ul>

        <h3>Múltiplas Opções de Pagamento</h3>
        <p>
          Permitindo pagamento flexível em muitos formatos diferentes. Você pode escolher receber pagamentos através de:
        </p>
        <ul>
          <li>Transferência bancária</li>
          <li>PayPal</li>
          <li>Cheque</li>
          <li>Criptomoedas</li>
          <li>Outros métodos (conforme disponibilidade)</li>
        </ul>

        <h3>Relatórios em Tempo Real</h3>
        <p>
          Que permitem que você veja suas estatísticas a qualquer momento para uma avaliação atualizada do desempenho de seu site/zona de anúncios. Os relatórios incluem:
        </p>
        <ul>
          <li>Número de impressões e cliques</li>
          <li>Taxa de clique (CTR)</li>
          <li>Receita por impressão (RPM)</li>
          <li>Receita total</li>
          <li>Análise por anunciante, formato, país e mais</li>
        </ul>

        <h2>Painel do Editor</h2>
        <p>
          O Painel Administrativo para Editores é organizado em abas, cada uma com uma função específica para facilitar a gestão de suas atividades:
        </p>

        <h3>Dashboard</h3>
        <p>
          Mostra um resumo executivo em tempo real das principais métricas que você pode usar para garantir que está maximizando sua receita de publicidade. No Dashboard você pode visualizar:
        </p>
        <ul>
          <li>Resumo de receitas</li>
          <li>Principais zonas por desempenho</li>
          <li>Gráficos de tendências</li>
          <li>Alertas e notificações importantes</li>
        </ul>

        <h3>Estatísticas</h3>
        <p>
          Mostra estatísticas mais detalhadas do que o Dashboard, para que você possa realmente analisar seus dados em detalhes para orientar seu planejamento estratégico ou diagnosticar problemas. Você pode:
        </p>
        <ul>
          <li>Filtrar dados por período, site, zona ou anunciante</li>
          <li>Exportar relatórios em diversos formatos</li>
          <li>Comparar desempenho entre períodos</li>
          <li>Analisar dados por múltiplas dimensões</li>
        </ul>

        <h3>Sites & Zonas</h3>
        <p>
          É onde você pode configurar seus domínios, sites e zonas de anúncios para começar a receber receita de publicidade. Nesta aba você pode:
        </p>
        <ul>
          <li>Adicionar novos sites</li>
          <li>Criar zonas de anúncios</li>
          <li>Gerar códigos de incorporação (embed codes)</li>
          <li>Configurar tamanhos e formatos de anúncios</li>
          <li>Gerenciar permissões de anunciantes</li>
          <li>Visualizar estatísticas por site e zona</li>
        </ul>

        <h3>Pagamentos</h3>
        <p>
          É onde você monitora e gerencia os pagamentos para seus sites e zonas de anúncios. Aqui você pode:
        </p>
        <ul>
          <li>Visualizar histórico de pagamentos</li>
          <li>Configurar método de pagamento</li>
          <li>Acompanhar saldo disponível</li>
          <li>Solicitar pagamentos</li>
          <li>Visualizar extratos detalhados</li>
        </ul>

        <h3>Neverblock</h3>
        <p>
          Solução proprietária de circunvenção de bloqueador de anúncios do BankMidia/MidiaPix. Ajuda a maximizar suas receitas instantaneamente. Garante que seus anúncios sejam exibidos, mesmo que um usuário tenha software de bloqueio de anúncios instalado. Com o Neverblock você pode:
        </p>
        <ul>
          <li>Recuperar receita perdida por ad blockers</li>
          <li>Aumentar o número de impressões</li>
          <li>Melhorar o RPM (receita por mil impressões)</li>
          <li>Manter a experiência do usuário</li>
        </ul>

        <h2>Configurando Seu Primeiro Site</h2>
        <p>
          Siga os passos abaixo para configurar seu primeiro site:
        </p>

        <h3>Passo 1: Acesse a Aba Sites & Zonas</h3>
        <p>
          No menu principal, clique em "Sites & Zonas" para acessar a página de gerenciamento de sites e zonas.
        </p>

        <h3>Passo 2: Clique em "Adicionar Site"</h3>
        <p>
          Clique no botão "Adicionar Site" para iniciar o processo de criação.
        </p>

        <h3>Passo 3: Preencha os Detalhes do Site</h3>
        <p>
          Preencha as informações do seu site:
        </p>
        <ul>
          <li><strong>Nome do Site:</strong> Um nome descritivo para seu site</li>
          <li><strong>URL do Site:</strong> A URL completa do seu site</li>
          <li><strong>Categoria:</strong> A categoria principal do seu site</li>
          <li><strong>Descrição:</strong> Uma breve descrição do conteúdo do seu site</li>
          <li><strong>Tráfego Mensal Estimado:</strong> Número aproximado de visitantes por mês</li>
        </ul>

        <h3>Passo 4: Crie Zonas de Anúncios</h3>
        <p>
          Crie as zonas onde os anúncios serão exibidos:
        </p>
        <ul>
          <li>Clique em "Adicionar Zona"</li>
          <li>Escolha o formato (Display, Vídeo, Native, etc.)</li>
          <li>Selecione o tamanho (300x250, 728x90, etc.)</li>
          <li>Dê um nome descritivo à zona</li>
          <li>Configure as opções avançadas (se necessário)</li>
        </ul>

        <h3>Passo 5: Gere o Código de Incorporação</h3>
        <p>
          Para cada zona, gere o código de incorporação (embed code) que você colocará em seu site. Este código é responsável por exibir os anúncios.
        </p>

        <h3>Passo 6: Implemente o Código em Seu Site</h3>
        <p>
          Copie o código de incorporação e cole-o no HTML do seu site, no local onde você deseja que os anúncios apareçam.
        </p>

        <h3>Passo 7: Teste e Valide</h3>
        <p>
          Teste os anúncios em seu site para garantir que estão sendo exibidos corretamente. Verifique se:
        </p>
        <ul>
          <li>Os anúncios aparecem corretamente</li>
          <li>O tamanho está correto</li>
          <li>Não há erros de JavaScript</li>
          <li>Os anúncios carregam rapidamente</li>
        </ul>

        <h2>Otimizando Sua Receita</h2>
        <p>
          Para obter os melhores resultados e maximizar sua receita, siga estas dicas:
        </p>

        <h3>Posicionamento Estratégico</h3>
        <p>
          Coloque os anúncios em locais onde são mais visíveis e têm maior probabilidade de serem clicados. Geralmente, acima da dobra (above the fold) gera melhor desempenho.
        </p>

        <h3>Tamanhos Eficazes</h3>
        <p>
          Use tamanhos de anúncios que funcionam bem com seu conteúdo. Os tamanhos mais eficazes são 300x250, 728x90 e 970x250.
        </p>

        <h3>Múltiplos Formatos</h3>
        <p>
          Teste diferentes formatos de anúncios para encontrar o que funciona melhor com seu público. Não se limite a apenas um formato.
        </p>

        <h3>Qualidade do Conteúdo</h3>
        <p>
          Mantenha o conteúdo de alta qualidade e relevante para seus visitantes. Sites com melhor conteúdo atraem anunciantes de melhor qualidade.
        </p>

        <h3>Tráfego de Qualidade</h3>
        <p>
          Trabalhe para aumentar o tráfego de qualidade do seu site. Visitantes engajados e relevantes geram melhor desempenho de anúncios.
        </p>

        <h3>Use o Neverblock</h3>
        <p>
          Ative a solução Neverblock para recuperar receita perdida por ad blockers. Esta solução pode aumentar significativamente sua receita.
        </p>

        <h2>Melhores Práticas</h2>
        <p>
          Para obter os melhores resultados como editor, siga estas melhores práticas:
        </p>

        <h3>Monitore Regularmente</h3>
        <p>
          Acompanhe regularmente suas estatísticas para identificar tendências e oportunidades de otimização.
        </p>

        <h3>Comunique-se com Anunciantes</h3>
        <p>
          Mantenha uma comunicação aberta com os anunciantes. Isso pode levar a negociações melhores e parcerias de longo prazo.
        </p>

        <h3>Respeite Seus Visitantes</h3>
        <p>
          Não sobrecarregue seu site com anúncios. Mantenha um equilíbrio entre monetização e experiência do usuário.
        </p>

        <h3>Cumpra as Políticas</h3>
        <p>
          Certifique-se de que seu site e conteúdo estão em conformidade com as políticas de publicidade. Conteúdo proibido pode resultar na suspensão da sua conta.
        </p>

        <h3>Atualize Regularmente</h3>
        <p>
          Mantenha seu site atualizado com conteúdo novo e relevante. Isso ajuda a manter os visitantes engajados e a atrair novo tráfego.
        </p>

        <h2>Suporte e Recursos Adicionais</h2>
        <p>
          Se você tiver dúvidas ou precisar de ajuda, entre em contato com nosso time de suporte. Também oferecemos:
        </p>
        <ul>
          <li>Webinars e treinamentos online</li>
          <li>Documentação detalhada</li>
          <li>Comunidade de editores</li>
          <li>Consultoria especializada</li>
        </ul>
      </article>
    </DocsLayout>
  );
}
