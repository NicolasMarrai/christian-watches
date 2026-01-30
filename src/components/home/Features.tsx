import { motion } from 'framer-motion';
import { Shield, Truck, RefreshCcw, Award, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Garantia Estendida',
    description: 'Até 10 anos de garantia internacional em peças selecionadas.',
  },
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Entrega gratuita para todo o Brasil em compras acima de R$ 5.000.',
  },
  {
    icon: RefreshCcw,
    title: 'Troca Facilitada',
    description: '30 dias para troca ou devolução sem complicações.',
  },
  {
    icon: Award,
    title: 'Autenticidade',
    description: 'Certificado de autenticidade em todas as peças.',
  },
  {
    icon: Clock,
    title: 'Manutenção Vitalícia',
    description: 'Serviço de manutenção e revisão por toda a vida útil do relógio.',
  },
  {
    icon: Headphones,
    title: 'Suporte Premium',
    description: 'Atendimento exclusivo 24/7 para nossos clientes.',
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-luxury text-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Por Que Escolher-nos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Excelência em Cada Detalhe
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-charcoal/50 border border-charcoal hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
