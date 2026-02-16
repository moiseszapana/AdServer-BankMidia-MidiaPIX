import { useState } from 'react';
import { AlertCircle, CheckCircle, Loader2, Eye, EyeOff } from 'lucide-react';
import DocsLayout from '@/components/DocsLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function APITester() {
  // Login states
  const [loginMode, setLoginMode] = useState<'credentials' | 'token'>('credentials');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiToken, setApiToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showApiToken, setShowApiToken] = useState(false);
  
  // Token states
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!username.trim() || !password.trim() || !apiToken.trim()) {
      setError('Por favor, preencha todos os campos (username, password e api_token)');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.bankmidia.com.br/v2/login', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
          api_token: apiToken.trim(),
        }),
      });

      console.log('Login - Status da resposta:', response.status);
      console.log('Login - Headers da resposta:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const data = await response.json();
        console.log('Login - Dados da resposta:', data);
        
        // Extrair Bearer token da resposta
        const bearerToken = data.token || data.access_token || data.bearer_token;
        
        if (bearerToken) {
          setToken(bearerToken);
          setIsAuthenticated(true);
          setSuccess(`✓ Login realizado com sucesso! Bearer token gerado.`);
        } else {
          setError('Login bem-sucedido, mas nenhum token foi retornado. Resposta: ' + JSON.stringify(data));
        }
      } else {
        let errorDetails = '';
        try {
          const errorData = await response.json();
          console.log('Login - Erro detalhado:', errorData);
          errorDetails = errorData.message || errorData.error || JSON.stringify(errorData);
        } catch {
          errorDetails = await response.text();
        }

        if (response.status === 401) {
          setError(`Credenciais inválidas. Verifique username, password e api_token. Detalhes: ${errorDetails}`);
        } else {
          setError(`Erro no login: ${response.status} ${response.statusText}. Detalhes: ${errorDetails}`);
        }
      }
    } catch (err: any) {
      console.error('Login - Erro na requisição:', err);
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        setError('Erro de CORS ou conexão bloqueada. A API pode não permitir requisições do navegador.');
      } else {
        setError(`Erro ao conectar com a API: ${err.message || 'Verifique sua conexão e tente novamente.'}`);
      }
    } finally {
      setLoading(false);
    }
  };

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

      // Log detalhado para debug
      console.log('Status da resposta:', response.status);
      console.log('Headers da resposta:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const data = await response.json();
        console.log('Dados do usuário:', data);
        setIsAuthenticated(true);
        setSuccess('✓ Autenticação realizada com sucesso!');
      } else {
        // Tentar ler corpo da resposta para mais detalhes
        let errorDetails = '';
        try {
          const errorData = await response.json();
          console.log('Erro detalhado:', errorData);
          errorDetails = errorData.message || errorData.error || JSON.stringify(errorData);
        } catch {
          errorDetails = await response.text();
        }

        if (response.status === 401) {
          setError(`Token inválido ou expirado. Detalhes: ${errorDetails || 'Verifique suas credenciais.'}`);
        } else if (response.status === 403) {
          setError(`Acesso negado. Seu token não tem permissões para acessar este recurso. Detalhes: ${errorDetails}`);
        } else if (response.status === 404) {
          setError(`Endpoint não encontrado. Verifique se a URL da API está correta. Status: ${response.status}`);
        } else {
          setError(`Erro na autenticação: ${response.status} ${response.statusText}. Detalhes: ${errorDetails}`);
        }
      }
    } catch (err: any) {
      console.error('Erro na requisição:', err);
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        setError('Erro de CORS ou conexão bloqueada. A API pode não permitir requisições do navegador. Tente usar o token diretamente nos endpoints abaixo.');
      } else {
        setError(`Erro ao conectar com a API: ${err.message || 'Verifique sua conexão e tente novamente.'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchCampaigns = async () => {
    setCampaignsLoading(true);
    setCampaignsError('');
    setCampaigns([]);

    try {
      console.log('Buscando campanhas com token:', token);
      const response = await fetch('https://api.bankmidia.com.br/v2/campaigns?limit=10', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      console.log('Campanhas - Status:', response.status);
      console.log('Campanhas - Headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const data = await response.json();
        console.log('Campanhas - Dados recebidos:', data);
        
        // Tentar diferentes estruturas de resposta
        const campaignsData = data.result || data.data || data.campaigns || data;
        
        if (Array.isArray(campaignsData)) {
          setCampaigns(campaignsData);
          if (campaignsData.length === 0) {
            setCampaignsError('Nenhuma campanha encontrada na sua conta.');
          }
        } else if (typeof campaignsData === 'object' && campaignsData !== null) {
          // Se a resposta é um objeto com array dentro
          const possibleArrays = Object.values(campaignsData).find(v => Array.isArray(v));
          if (possibleArrays) {
            setCampaigns(possibleArrays as any[]);
          } else {
            setCampaignsError('Estrutura de resposta inesperada: ' + JSON.stringify(data).substring(0, 200));
          }
        } else {
          setCampaignsError('Formato de resposta inválido. Esperado array, recebido: ' + typeof campaignsData);
        }
      } else {
        let errorMsg = `Erro ${response.status}: ${response.statusText}`;
        try {
          const errorData = await response.json();
          console.log('Campanhas - Erro detalhado:', errorData);
          errorMsg += '. ' + (errorData.message || errorData.error || JSON.stringify(errorData));
        } catch {
          const errorText = await response.text();
          if (errorText) errorMsg += '. ' + errorText;
        }
        setCampaignsError(errorMsg);
      }
    } catch (err: any) {
      console.error('Campanhas - Erro na requisição:', err);
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        setCampaignsError('Erro de CORS ou conexão bloqueada. Verifique se a API permite requisições do navegador.');
      } else {
        setCampaignsError(`Erro ao conectar: ${err.message || 'Desconhecido'}`);
      }
    } finally {
      setCampaignsLoading(false);
    }
  };

  const fetchZones = async () => {
    setZonesLoading(true);
    setZonesError('');
    setZones([]);

    try {
      console.log('Buscando zonas com token:', token);
      const response = await fetch('https://api.bankmidia.com.br/v2/zones?limit=10', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      console.log('Zonas - Status:', response.status);
      console.log('Zonas - Headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const data = await response.json();
        console.log('Zonas - Dados recebidos:', data);
        
        // Tentar diferentes estruturas de resposta
        const zonesData = data.result || data.data || data.zones || data;
        
        if (Array.isArray(zonesData)) {
          setZones(zonesData);
          if (zonesData.length === 0) {
            setZonesError('Nenhuma zona encontrada na sua conta.');
          }
        } else if (typeof zonesData === 'object' && zonesData !== null) {
          // Se a resposta é um objeto com array dentro
          const possibleArrays = Object.values(zonesData).find(v => Array.isArray(v));
          if (possibleArrays) {
            setZones(possibleArrays as any[]);
          } else {
            setZonesError('Estrutura de resposta inesperada: ' + JSON.stringify(data).substring(0, 200));
          }
        } else {
          setZonesError('Formato de resposta inválido. Esperado array, recebido: ' + typeof zonesData);
        }
      } else {
        let errorMsg = `Erro ${response.status}: ${response.statusText}`;
        try {
          const errorData = await response.json();
          console.log('Zonas - Erro detalhado:', errorData);
          errorMsg += '. ' + (errorData.message || errorData.error || JSON.stringify(errorData));
        } catch {
          const errorText = await response.text();
          if (errorText) errorMsg += '. ' + errorText;
        }
        setZonesError(errorMsg);
      }
    } catch (err: any) {
      console.error('Zonas - Erro na requisição:', err);
      if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
        setZonesError('Erro de CORS ou conexão bloqueada. Verifique se a API permite requisições do navegador.');
      } else {
        setZonesError(`Erro ao conectar: ${err.message || 'Desconhecido'}`);
      }
    } finally {
      setZonesLoading(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    setUsername('');
    setPassword('');
    setApiToken('');
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

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
          <p className="text-lg text-gray-800 mb-4">
            Bem-vindo ao <strong>Testador Interativo da API BankMidia/MidiaPix</strong>! Esta ferramenta permite que você teste os endpoints da API diretamente no navegador de forma rápida e segura.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-300">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              🔑 Credenciais Necessárias:
            </p>
            <p className="text-sm text-blue-800 mb-3">
              Para utilizar este testador, você precisa das seguintes credenciais fornecidas pela plataforma BankMidia/MidiaPix:
            </p>
            <ul className="text-sm text-blue-800 space-y-1 ml-4">
              <li>• <strong>Username</strong>: Seu nome de usuário</li>
              <li>• <strong>Password</strong>: Sua senha de acesso</li>
              <li>• <strong>Token de Acesso à API</strong>: Token fornecido pela plataforma</li>
            </ul>
            <p className="text-sm text-blue-700 mt-3 italic">
              Essas credenciais são exclusivas para usuários cadastrados (Anunciantes e Editores).
            </p>
          </div>
        </div>

        {/* Seção de Autenticação */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">🔐 Autenticação</h2>

          {!isAuthenticated ? (
            <>
              {/* Tabs para escolher modo de autenticação */}
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setLoginMode('credentials')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    loginMode === 'credentials'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  🔑 Login com Credenciais
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMode('token')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    loginMode === 'token'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  🎫 Token Manual
                </button>
              </div>

              {/* Formulário de Login com Credenciais */}
              {loginMode === 'credentials' && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Seu username"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Sua senha"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      API Token
                    </label>
                    <div className="relative">
                      <input
                        type={showApiToken ? 'text' : 'password'}
                        value={apiToken}
                        onChange={(e) => setApiToken(e.target.value)}
                        placeholder="Seu API token"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowApiToken(!showApiToken)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showApiToken ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Fazendo login...
                      </>
                    ) : (
                      'Fazer Login'
                    )}
                  </Button>

                  <p className="text-sm text-gray-600">
                    💡 <strong>Como funciona:</strong> Insira suas credenciais (username, password e api_token). O sistema fará login automaticamente e gerará o Bearer token para você.
                  </p>
                </form>
              )}

              {/* Formulário de Token Manual */}
              {loginMode === 'token' && (
                <form onSubmit={handleAuthenticate} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bearer Token
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <input
                          type={showToken ? 'text' : 'password'}
                          value={token}
                          onChange={(e) => setToken(e.target.value)}
                          placeholder="Cole seu Bearer token aqui"
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
                            Validando...
                          </>
                        ) : (
                          'Validar'
                        )}
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    💡 <strong>Modo avançado:</strong> Se você já possui um Bearer token, cole-o aqui diretamente.
                  </p>

                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <button
                      type="button"
                      onClick={() => {
                        if (token.trim()) {
                          setIsAuthenticated(true);
                          setSuccess('✓ Token salvo! Você pode testar os endpoints abaixo.');
                        } else {
                          setError('Por favor, insira um token antes de pular a validação.');
                        }
                      }}
                      className="text-sm text-blue-600 hover:text-blue-800 underline"
                    >
                      ⚠️ Pular validação e usar token diretamente
                    </button>
                    <p className="text-xs text-gray-500 mt-1">
                      Use esta opção se a validação automática falhar por problemas de CORS.
                    </p>
                  </div>
                </form>
              )}
            </>
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
          <strong>Versão do Testador:</strong> 1.1.0<br />
          <strong>API Version:</strong> 2.0
        </p>
      </article>
    </DocsLayout>
  );
}
