import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories, sizes, priceRanges } from '@/data/products';

interface ProductFiltersProps {
  selectedCategories: string[];
  selectedSizes: string[];
  selectedPriceRange: string | null;
  sortBy: string;
  onCategoryChange: (categories: string[]) => void;
  onSizeChange: (sizes: string[]) => void;
  onPriceRangeChange: (range: string | null) => void;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

export const ProductFilters = ({
  selectedCategories,
  selectedSizes,
  selectedPriceRange,
  sortBy,
  onCategoryChange,
  onSizeChange,
  onPriceRangeChange,
  onSortChange,
  onClearFilters,
}: ProductFiltersProps) => {
  const hasFilters =
    selectedCategories.length > 0 ||
    selectedSizes.length > 0 ||
    selectedPriceRange !== null;

  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter((c) => c !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  const handleSizeToggle = (size: string) => {
    if (selectedSizes.includes(size)) {
      onSizeChange(selectedSizes.filter((s) => s !== size));
    } else {
      onSizeChange([...selectedSizes, size]);
    }
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-serif font-semibold mb-4">Categorias</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-3">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => handleCategoryToggle(category.id)}
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-serif font-semibold mb-4">Tamanho</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                selectedSizes.includes(size)
                  ? 'bg-gold text-obsidian border-gold'
                  : 'border-border hover:border-gold hover:text-gold'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-serif font-semibold mb-4">Faixa de Preço</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-3">
              <Checkbox
                id={`price-${range.id}`}
                checked={selectedPriceRange === range.id}
                onCheckedChange={() =>
                  onPriceRangeChange(
                    selectedPriceRange === range.id ? null : range.id
                  )
                }
              />
              <Label
                htmlFor={`price-${range.id}`}
                className="cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasFilters && (
        <Button
          variant="outline"
          className="w-full border-gold text-gold hover:bg-gold hover:text-obsidian"
          onClick={onClearFilters}
        >
          <X className="w-4 h-4 mr-2" />
          Limpar Filtros
        </Button>
      )}
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      {/* Mobile Filter Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
            {hasFilters && (
              <span className="w-5 h-5 rounded-full bg-gold text-obsidian text-xs flex items-center justify-center">
                {selectedCategories.length + selectedSizes.length + (selectedPriceRange ? 1 : 0)}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle className="font-serif">Filtros</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Filters - Shown inline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:block w-64 shrink-0"
      >
        <FilterContent />
      </motion.div>

      {/* Sort Dropdown */}
      <div className="flex-1 flex justify-end">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Em Destaque</SelectItem>
            <SelectItem value="price-low">Menor Preço</SelectItem>
            <SelectItem value="price-high">Maior Preço</SelectItem>
            <SelectItem value="best-selling">Mais Vendidos</SelectItem>
            <SelectItem value="newest">Novidades</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
