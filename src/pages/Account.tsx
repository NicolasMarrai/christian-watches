import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Package, MapPin, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const AccountPage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const mockOrders = [
    {
      id: 'CW-2024-001',
      date: '15/01/2024',
      status: 'Entregue',
      total: 12499,
      product: 'Royal Chronograph Elite',
    },
    {
      id: 'CW-2024-002',
      date: '20/01/2024',
      status: 'Em trânsito',
      total: 4999,
      product: 'Midnight Sport Pro',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold">Minha Conta</h1>
            <p className="text-muted-foreground mt-2">
              Olá, {user.firstName}! Gerencie sua conta e pedidos aqui.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <div className="bg-card rounded-xl border border-border p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>

                {user.isVendor && (
                  <Link to="/dashboard">
                    <Button className="w-full bg-gold hover:bg-gold-dark text-obsidian font-semibold gap-2">
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard do Vendedor
                    </Button>
                  </Link>
                )}

                <Button
                  variant="outline"
                  className="w-full gap-2 text-destructive hover:text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4" />
                  Sair
                </Button>
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-6">
                  <TabsTrigger
                    value="profile"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-gold bg-transparent px-6 py-4 gap-2"
                  >
                    <User className="w-4 h-4" />
                    Dados Pessoais
                  </TabsTrigger>
                  <TabsTrigger
                    value="orders"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-gold bg-transparent px-6 py-4 gap-2"
                  >
                    <Package className="w-4 h-4" />
                    Pedidos
                  </TabsTrigger>
                  <TabsTrigger
                    value="address"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-gold bg-transparent px-6 py-4 gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Endereço
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h2 className="font-serif text-xl font-bold mb-6">Dados Pessoais</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Nome</p>
                        <p className="font-medium">{user.firstName} {user.lastName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">E-mail</p>
                        <p className="font-medium">{user.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">CPF</p>
                        <p className="font-medium">{user.cpf}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Telefone</p>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Idade</p>
                        <p className="font-medium">{user.age} anos</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Cidade</p>
                        <p className="font-medium">{user.city}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6 gap-2">
                      <Settings className="w-4 h-4" />
                      Editar Dados
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="orders">
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h2 className="font-serif text-xl font-bold mb-6">Meus Pedidos</h2>
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div
                          key={order.id}
                          className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-muted/50 gap-4"
                        >
                          <div>
                            <p className="font-medium">{order.product}</p>
                            <p className="text-sm text-muted-foreground">
                              Pedido {order.id} • {order.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                order.status === 'Entregue'
                                  ? 'bg-green-500/10 text-green-600'
                                  : 'bg-gold/10 text-gold'
                              }`}
                            >
                              {order.status}
                            </span>
                            <span className="font-bold">{formatPrice(order.total)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="address">
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h2 className="font-serif text-xl font-bold mb-6">Endereço de Entrega</h2>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="font-medium">{user.firstName} {user.lastName}</p>
                      <p className="text-muted-foreground mt-1">
                        Av. Paulista, 1000 - Bela Vista<br />
                        {user.city} - SP<br />
                        CEP: 01310-100
                      </p>
                    </div>
                    <Button variant="outline" className="mt-6 gap-2">
                      <MapPin className="w-4 h-4" />
                      Editar Endereço
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountPage;
