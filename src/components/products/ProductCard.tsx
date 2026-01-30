import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      toast({
        title: 'Faça login para continuar',
        description: 'Você precisa estar logado para adicionar itens ao carrinho.',
        variant: 'destructive',
      });
      navigate('/login');
      return;
    }

    if (!product.inStock) {
      toast({
        title: 'Produto indisponível',
        description: 'Este produto está temporariamente fora de estoque.',
        variant: 'destructive',
      });
      return;
    }

    addToCart(product);
    toast({
      title: 'Adicionado ao carrinho!',
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
          {/* Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-gold text-obsidian font-semibold">
                Novo
              </Badge>
            )}
            {product.originalPrice && (
              <Badge variant="destructive" className="font-semibold">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="bg-charcoal text-secondary">
                Esgotado
              </Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Button
              size="sm"
              className="flex-1 bg-gold hover:bg-gold-dark text-obsidian font-semibold gap-2"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingBag className="w-4 h-4" />
              Adicionar
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="bg-secondary/90 hover:bg-secondary"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold text-gold'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviews})
            </span>
          </div>

          <h3 className="font-serif font-semibold text-lg group-hover:text-gold transition-colors line-clamp-1">
            {product.name}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="text-sm text-muted-foreground">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)} • {product.size}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};
