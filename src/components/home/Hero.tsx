import { motion } from 'framer-motion';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-luxury">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--gold)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Gold Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-[100px]"
      />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6"
            >
              ✨ Nova Coleção 2024
            </motion.span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary leading-tight mb-6">
              Elegância que{' '}
              <span className="text-gradient-gold">Transcende</span>{' '}
              o Tempo
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Descubra nossa coleção exclusiva de relógios de luxo, onde cada peça conta uma história de sofisticação e precisão artesanal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/relogios">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-obsidian font-semibold px-8 gap-2 group">
                  Explorar Coleção
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="border-secondary/30 text-secondary hover:bg-secondary/10 px-8">
                  Nossa História
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
            >
              {[
                { icon: Shield, label: 'Garantia de 5 Anos' },
                { icon: Truck, label: 'Frete Grátis' },
                { icon: Award, label: 'Autenticidade' },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-gold" />
                  <span className="text-sm">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-[80px]" />
              
              {/* Watch Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
                  alt="Relógio de Luxo"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 border border-gold/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
