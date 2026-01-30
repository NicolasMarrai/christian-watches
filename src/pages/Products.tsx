import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductFilters } from '@/components/products/ProductFilters';
import { products, priceRanges } from '@/data/products';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria');

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by size
    if (selectedSizes.length > 0) {
      result = result.filter((p) => selectedSizes.includes(p.size));
    }

    // Filter by price range
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        result = result.filter(
          (p) => p.price >= range.min && p.price <= range.max
        );
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'best-selling':
        result.sort((a, b) => b.soldCount - a.soldCount);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategories, selectedSizes, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedPriceRange(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-luxury text-secondary py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Nossa <span className="text-gradient-gold">Coleção</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore nossa seleção exclusiva de relógios de luxo, cada um cuidadosamente selecionado para refletir excelência e sofisticação.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters (Desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <ProductFilters
                    selectedCategories={selectedCategories}
                    selectedSizes={selectedSizes}
                    selectedPriceRange={selectedPriceRange}
                    sortBy={sortBy}
                    onCategoryChange={setSelectedCategories}
                    onSizeChange={setSelectedSizes}
                    onPriceRangeChange={setSelectedPriceRange}
                    onSortChange={setSortBy}
                    onClearFilters={clearFilters}
                  />
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Mobile Filters & Sort */}
                <div className="lg:hidden mb-6">
                  <ProductFilters
                    selectedCategories={selectedCategories}
                    selectedSizes={selectedSizes}
                    selectedPriceRange={selectedPriceRange}
                    sortBy={sortBy}
                    onCategoryChange={setSelectedCategories}
                    onSizeChange={setSelectedSizes}
                    onPriceRangeChange={setSelectedPriceRange}
                    onSortChange={setSortBy}
                    onClearFilters={clearFilters}
                  />
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Products */}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <p className="text-muted-foreground text-lg mb-4">
                      Nenhum produto encontrado com os filtros selecionados.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="text-gold hover:underline"
                    >
                      Limpar filtros
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
