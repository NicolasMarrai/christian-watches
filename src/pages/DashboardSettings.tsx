import { motion } from 'framer-motion';
import { Store, CreditCard, Truck, Users, Bell, Shield } from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const DashboardSettingsPage = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: 'Configurações salvas',
      description: 'Suas alterações foram salvas com sucesso.',
    });
  };

  return (
    <DashboardLayout
      title="Configurações"
      subtitle="Gerencie as configurações da sua loja"
    >
      <div className="max-w-3xl space-y-8">
        {/* Store Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif">
                <Store className="w-5 h-5 text-gold" />
                Dados da Loja
              </CardTitle>
              <CardDescription>Informações básicas da sua loja</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Nome da Loja</Label>
                  <Input id="storeName" defaultValue="Christian Watches" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeEmail">E-mail</Label>
                  <Input id="storeEmail" type="email" defaultValue="contato@christianwatches.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="storePhone">Telefone</Label>
                <Input id="storePhone" defaultValue="(11) 99999-9999" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif">
                <CreditCard className="w-5 h-5 text-gold" />
                Métodos de Pagamento
              </CardTitle>
              <CardDescription>Configure as formas de pagamento aceitas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cartão de Crédito</p>
                  <p className="text-sm text-muted-foreground">Visa, Mastercard, Elo, Amex</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">PIX</p>
                  <p className="text-sm text-muted-foreground">Pagamento instantâneo</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Boleto Bancário</p>
                  <p className="text-sm text-muted-foreground">Vencimento em 3 dias</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Shipping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif">
                <Truck className="w-5 h-5 text-gold" />
                Configurações de Frete
              </CardTitle>
              <CardDescription>Defina as regras de envio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Frete Grátis</p>
                  <p className="text-sm text-muted-foreground">Para compras acima de R$ 5.000</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="minFreeShipping">Valor mínimo frete grátis</Label>
                  <Input id="minFreeShipping" defaultValue="5000" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="defaultShipping">Frete padrão</Label>
                  <Input id="defaultShipping" defaultValue="49.90" type="number" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif">
                <Users className="w-5 h-5 text-gold" />
                Usuários e Permissões
              </CardTitle>
              <CardDescription>Gerencie os usuários da dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-semibold">J</span>
                  </div>
                  <div>
                    <p className="font-medium">João Silva</p>
                    <p className="text-sm text-muted-foreground">Administrador</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Editar</Button>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <Users className="w-4 h-4" />
                Adicionar Usuário
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif">
                <Bell className="w-5 h-5 text-gold" />
                Notificações
              </CardTitle>
              <CardDescription>Configure suas preferências de notificação</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Novos Pedidos</p>
                  <p className="text-sm text-muted-foreground">Receber alerta por e-mail</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Estoque Baixo</p>
                  <p className="text-sm text-muted-foreground">Alertar quando menor que 5 unidades</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Relatórios Semanais</p>
                  <p className="text-sm text-muted-foreground">Resumo de vendas toda segunda</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-end"
        >
          <Button
            onClick={handleSave}
            className="bg-gold hover:bg-gold-dark text-obsidian font-semibold px-8"
          >
            Salvar Alterações
          </Button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettingsPage;
