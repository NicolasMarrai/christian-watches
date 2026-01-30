import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingBag, Heart, Share2, Shield, Truck, RotateCcw } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Product360Viewer } from '@/components/products/Product360Viewer';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  // Garante que ao entrar na página, a rolagem vá para o topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((p) => p.id !== id && p.category === product?.category).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Produto não encontrado</h1>
          <Link to="/relogios" className="text-gold hover:underline">
            Voltar para a coleção
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Faça login para continuar',
        description: 'Você precisa estar logado para adicionar itens ao carrinho.',
        variant: 'destructive',
      });
      navigate('/login');
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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/relogios" className="hover:text-gold transition-colors">Relógios</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </motion.div>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 360 Viewer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Product360Viewer images={product.images} productName={product.name} />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badges */}
              <div className="flex items-center gap-2">
                {product.isNew && (
                  <Badge className="bg-gold text-obsidian">Novo</Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}
                <Badge variant="secondary" className="capitalize">
                  {product.category}
                </Badge>
              </div>

              {/* Title */}
              <div>
                <p className="text-muted-foreground mb-1">{product.brand}</p>
                <h1 className="font-serif text-3xl md:text-4xl font-bold">{product.name}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-gold text-gold'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>

              {/* Price */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-bold text-gold">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  ou 12x de {formatPrice(product.price / 12)} sem juros
                </p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Size */}
              <div>
                <p className="font-medium mb-2">Tamanho da caixa</p>
                <div className="inline-block px-4 py-2 border border-gold rounded-lg text-gold font-medium">
                  {product.size}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gold hover:bg-gold-dark text-obsidian font-semibold gap-2"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </Button>
                <Button size="lg" variant="outline" className="px-4">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-4">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Garantia de {product.specs.warranty}</p>
                </div>
                <div className="text-center">
                  <Truck className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Frete Grátis</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">30 dias para troca</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="specs"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-gold bg-transparent px-6 py-4"
                >
                  Especificações
                </TabsTrigger>
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-gold bg-transparent px-6 py-4"
                >
                  Descrição
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:text-gold bg-transparent px-6 py-4"
                >
                  Avaliações
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specs" className="pt-8">
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground capitalize">
                        {key === 'material' ? 'Material' :
                         key === 'movement' ? 'Movimento' :
                         key === 'waterResistance' ? 'Resistência à água' :
                         key === 'caseDiameter' ? 'Diâmetro da caixa' :
                         key === 'warranty' ? 'Garantia' : key}
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="description" className="pt-8">
                <div className="max-w-2xl space-y-4 text-muted-foreground">
                  <p>{product.description}</p>
                  <p>
                    Cada relógio Christian Watches é cuidadosamente inspecionado por nossos especialistas 
                    para garantir a mais alta qualidade. Acompanha certificado de autenticidade, estojo 
                    de luxo e manual completo.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-8">
                <div className="text-center py-12 text-muted-foreground">
                  <Star className="w-12 h-12 mx-auto mb-4 text-gold" />
                  <p className="text-lg font-medium mb-2">
                    {product.reviews} avaliações com média de {product.rating} estrelas
                  </p>
                  <p className="text-sm">
                    Sistema de avaliações será implementado em breve.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                Produtos Relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
