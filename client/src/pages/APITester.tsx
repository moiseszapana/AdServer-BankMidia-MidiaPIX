import { useState } from 'react';
import { AlertCircle, CheckCircle, Loader2, Eye, EyeOff } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function APITester() {
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Campanhas
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [campaignsLoading, setCampaignsLoading] = useState(false);
  const [campaignsError, setCampaignsError] = useState('');

  // Zonas
  const [zones, setZones] = useState<any[]>([]);
  const [zonesLoading, setZonesLoading] = useState(false);
  const [zonesError, setZonesError] = useState('');

  const handleAuthenticate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!token.trim()) {
      setError('Por favor, insira um token válido');
      setLoading(false);
      return;
    }

    try {
      // Teste simples para validar o token fazendo uma requisição
      const response = await fetch('https://api.bankmidia.com.br/v2/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setSuccess('✓ Autenticação realizada com sucesso!');
      } else if (response.status === 401) {
        setError('Token inválido ou expirado. Verifique suas credenciais.');
      } else {
        setError(`Erro na autenticação: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError('Erro ao conectar com a API. Verifique sua conexão e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCampaigns = async () => {
    setCampaignsLoading(true);
    setCampaignsError('');

    try {
      const response = await fetch('https://api.bankmidia.com.br/v2/campaigns?limit=10', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCampaigns(data.result || []);
      } else {
        setCampaignsError(`Erro ao buscar campanhas: ${response.status}`);
      }
    } catch (err) {
      setCampaignsError('Erro ao conectar com a API');
    } finally {
      setCampaignsLoading(false);
    }
  };

  const fetchZones = async () => {
    setZonesLoading(true);
    setZonesError('');

    try {
      const response = await fetch('https://api.bankmidia.com.br/v2/zones?limit=10', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setZones(data.result || []);
      } else {
        setZonesError(`Erro ao buscar zonas: ${response.status}`);
      }
    } catch (err) {
      setZonesError('Erro ao conectar com a API');
    } finally {
      setZonesLoading(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    setIsAuthenticated(false);
    setCampaigns([]);
    setZones([]);
    setError('');
    setSuccess('');
  };

  return (
    <DocsLayout currentPage="/api-tester">
      <article className="prose max-w-4xl">
        <h1>Testador da API BankMidia/MidiaPix</h1>

        <p>
          Bem-vindo ao testador interativo da API BankMidia/MidiaPix! Esta ferramenta permite que você teste os endpoints da API diretamente no navegador. Para começar, você precisa fornecer um token de autenticação válido.
        </p>

        {/* Seção de Autenticação */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">🔐 Autenticação</h2>

          {!isAuthenticated ? (
            <form onSubmit={handleAuthenticate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Token de Autenticação
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type={showToken ? 'text' : 'password'}
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      placeholder="Cole seu token Bearer aqui"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowToken(!showToken)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showToken ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Autenticando...
                      </>
                    ) : (
                      'Autenticar'
                    )}
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                💡 <strong>Como obter seu token:</strong> Faça login na sua conta BankMidia/MidiaPix e acesse as configurações de API para gerar um token de autenticação.
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={24} className="text-green-600" />
                <span className="text-green-700 font-medium">Autenticado com sucesso!</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="text-red-600 border-red-300 hover:bg-red-50"
              >
                Desconectar
              </Button>
            </div>
          )}

          {error && (
            <div className="mt-4 flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {success && (
            <div className="mt-4 flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-green-700">{success}</p>
            </div>
          )}
        </div>

        {isAuthenticated && (
          <>
            {/* Seção para Anunciantes */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-6">
              <h2 className="text-xl font-semibold text-indigo-900 mb-4">📊 Campanhas (Para Anunciantes)</h2>

              <p className="text-gray-700 mb-4">
                Consulte todas as suas campanhas ativas. Este endpoint retorna informações sobre campanhas, incluindo status, orçamento, impressões e modelos de precificação.
              </p>

              <Button
                onClick={fetchCampaigns}
                disabled={campaignsLoading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {campaignsLoading ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Carregando...
                  </>
                ) : (
                  'Buscar Campanhas'
                )}
              </Button>

              {campaignsError && (
                <div className="mt-4 flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700">{campaignsError}</p>
                </div>
              )}

              {campaigns.length > 0 && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-indigo-100 border-b border-indigo-300">
                        <th className="px-4 py-2 text-left font-semibold text-indigo-900">ID</th>
                        <th className="px-4 py-2 text-left font-semibold text-indigo-900">Nome</th>
                        <th className="px-4 py-2 text-left font-semibold text-indigo-900">Status</th>
                        <th className="px-4 py-2 text-left font-semibold text-indigo-900">Modelo</th>
                        <th className="px-4 py-2 text-left font-semibold text-indigo-900">Tamanho</th>
                        <th className="px-4 py-2 text-left font-semibold text-indigo-900">Orçamento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((campaign: any) => (
                        <tr key={campaign.id} className="border-b border-indigo-100 hover:bg-indigo-50">
                          <td className="px-4 py-2">{campaign.id}</td>
                          <td className="px-4 py-2 font-medium">{campaign.name}</td>
                          <td className="px-4 py-2">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              campaign.status === 1 ? 'bg-green-100 text-green-800' :
                              campaign.status === 0 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {campaign.status === 1 ? 'Ativa' : campaign.status === 0 ? 'Pausada' : 'Deletada'}
                            </span>
                          </td>
                          <td className="px-4 py-2">
                            {campaign.pricing_model === 1 ? 'CPC' :
                             campaign.pricing_model === 2 ? 'CPM' :
                             campaign.pricing_model === 3 ? 'CPA' :
                             campaign.pricing_model === 4 ? 'Smart CPM' :
                             campaign.pricing_model === 5 ? 'CPV' :
                             campaign.pricing_model === 7 ? 'Smart CPC' :
                             campaign.pricing_model === 8 ? 'Smart Bid' : 'Outro'}
                          </td>
                          <td className="px-4 py-2">{campaign.size}</td>
                          <td className="px-4 py-2">R$ {campaign.total_budget_limit?.toFixed(2) || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {campaigns.length === 0 && !campaignsLoading && !campaignsError && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-700">Nenhuma campanha encontrada. Clique em "Buscar Campanhas" para carregar.</p>
                </div>
              )}
            </div>

            {/* Seção para Editores */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-6">
              <h2 className="text-xl font-semibold text-purple-900 mb-4">📍 Zonas de Anúncios (Para Editores)</h2>

              <p className="text-gray-700 mb-4">
                Consulte todas as suas zonas de anúncios. Este endpoint retorna informações sobre as zonas onde seus anúncios estão agendados, incluindo tamanho, status e desempenho.
              </p>

              <Button
                onClick={fetchZones}
                disabled={zonesLoading}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                {zonesLoading ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Carregando...
                  </>
                ) : (
                  'Buscar Zonas'
                )}
              </Button>

              {zonesError && (
                <div className="mt-4 flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700">{zonesError}</p>
                </div>
              )}

              {zones.length > 0 && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-purple-100 border-b border-purple-300">
                        <th className="px-4 py-2 text-left font-semibold text-purple-900">ID</th>
                        <th className="px-4 py-2 text-left font-semibold text-purple-900">Nome</th>
                        <th className="px-4 py-2 text-left font-semibold text-purple-900">Site</th>
                        <th className="px-4 py-2 text-left font-semibold text-purple-900">Tamanho</th>
                        <th className="px-4 py-2 text-left font-semibold text-purple-900">Status</th>
                        <th className="px-4 py-2 text-left font-semibold text-purple-900">Impressões</th>
                      </tr>
                    </thead>
                    <tbody>
                      {zones.map((zone: any) => (
                        <tr key={zone.id} className="border-b border-purple-100 hover:bg-purple-50">
                          <td className="px-4 py-2">{zone.id}</td>
                          <td className="px-4 py-2 font-medium">{zone.name}</td>
                          <td className="px-4 py-2">{zone.site_name || 'N/A'}</td>
                          <td className="px-4 py-2">{zone.size || 'Responsiva'}</td>
                          <td className="px-4 py-2">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              zone.status === 1 ? 'bg-green-100 text-green-800' :
                              zone.status === 0 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {zone.status === 1 ? 'Ativa' : zone.status === 0 ? 'Pausada' : 'Inativa'}
                            </span>
                          </td>
                          <td className="px-4 py-2">{zone.impressions || 0}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {zones.length === 0 && !zonesLoading && !zonesError && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-700">Nenhuma zona encontrada. Clique em "Buscar Zonas" para carregar.</p>
                </div>
              )}
            </div>

            {/* Informações Técnicas */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ℹ️ Informações Técnicas</h3>

              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Base URL:</strong> <code className="bg-gray-200 px-2 py-1 rounded">https://api.bankmidia.com.br/v2</code>
                </p>
                <p>
                  <strong>Endpoint de Campanhas:</strong> <code className="bg-gray-200 px-2 py-1 rounded">GET /campaigns</code>
                </p>
                <p>
                  <strong>Endpoint de Zonas:</strong> <code className="bg-gray-200 px-2 py-1 rounded">GET /zones</code>
                </p>
                <p>
                  <strong>Autenticação:</strong> Bearer Token no header <code className="bg-gray-200 px-2 py-1 rounded">Authorization</code>
                </p>
              </div>
            </div>
          </>
        )}

        <hr className="my-8" />

        <p className="text-sm text-gray-600">
          <strong>Versão do Testador:</strong> 1.0<br />
          <strong>Data da Atualização:</strong> 15 de março de 2025<br />
          <strong>API Version:</strong> 2.0
        </p>
      </article>
    </DocsLayout>
  );
}
