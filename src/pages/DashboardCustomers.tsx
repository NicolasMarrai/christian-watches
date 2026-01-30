import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, MoreHorizontal } from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { mockCustomers } from '@/data/dashboard';

const DashboardCustomersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const filteredCustomers = mockCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout
      title="Clientes"
      subtitle="Gerencie sua base de clientes"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardContent className="p-6">
            {/* Search */}
            <div className="relative max-w-md mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar clientes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Table */}
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Cliente</TableHead>
                    <TableHead className="hidden md:table-cell">E-mail</TableHead>
                    <TableHead className="hidden sm:table-cell">Cidade</TableHead>
                    <TableHead>Pedidos</TableHead>
                    <TableHead>Total Gasto</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                            <span className="text-gold font-semibold">
                              {customer.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium">{customer.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground">
                        {customer.email}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">{customer.city}</TableCell>
                      <TableCell>{customer.orders}</TableCell>
                      <TableCell className="font-bold text-gold">
                        {formatPrice(customer.totalSpent)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="w-4 h-4 mr-2" />
                              Enviar E-mail
                            </DropdownMenuItem>
                            <DropdownMenuItem>Ver Pedidos</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredCustomers.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                Nenhum cliente encontrado.
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </DashboardLayout>
  );
};

export default DashboardCustomersPage;
