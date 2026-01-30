import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages: Record<string, string> = {
  masculino: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600',
  feminino: 'https://images.unsplash.com/photo-1518131672697-613becd4fab5?w=600',
  esportivo: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600',
  luxo: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600',
};

export const Categories = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Explore
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Nossas Categorias
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/relogios?categoria=${category.id}`}
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={categoryImages[category.id]}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                  <span className="text-4xl mb-3">{category.icon}</span>
                  <h3 className="font-serif text-2xl font-semibold text-secondary mb-2">
                    {category.name}
                  </h3>
                  <span className="text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explorar →
                  </span>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-2xl transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
