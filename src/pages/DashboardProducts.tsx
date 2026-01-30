import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Edit, Trash2, MoreHorizontal, Image } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const DashboardProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [productStatus, setProductStatus] = useState<Record<string, boolean>>(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.inStock }), {})
  );
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleStatus = (productId: string) => {
    setProductStatus((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
    toast({
      title: 'Status atualizado',
      description: 'O status do produto foi alterado com sucesso.',
    });
  };

  const handleAddProduct = () => {
    toast({
      title: 'Em desenvolvimento',
      description: 'O formulário de cadastro será implementado em breve.',
    });
  };

  return (
    <DashboardLayout
      title="Produtos"
      subtitle="Gerencie o catálogo de produtos"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                onClick={handleAddProduct}
                className="bg-gold hover:bg-gold-dark text-obsidian font-semibold gap-2"
              >
                <Plus className="w-4 h-4" />
                Novo Produto
              </Button>
            </div>

            {/* Table */}
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-16">Imagem</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead className="hidden md:table-cell">Categoria</TableHead>
                    <TableHead className="hidden sm:table-cell">Tamanho</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead className="hidden lg:table-cell">Vendidos</TableHead>
                    <TableHead>Ativo</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium line-clamp-1">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.brand}</p>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="secondary" className="capitalize">
                          {product.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">{product.size}</TableCell>
                      <TableCell className="font-bold text-gold">
                        {formatPrice(product.price)}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">{product.soldCount}</TableCell>
                      <TableCell>
                        <Switch
                          checked={productStatus[product.id]}
                          onCheckedChange={() => handleToggleStatus(product.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Image className="w-4 h-4 mr-2" />
                              Imagens 360°
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                Nenhum produto encontrado.
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </DashboardLayout>
  );
};

export default DashboardProductsPage;
