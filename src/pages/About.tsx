import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-luxury text-secondary py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Nossa <span className="text-gradient-gold">História</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Uma jornada de paixão, precisão e excelência na arte da relojoaria.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800"
                  alt="Craftsmanship"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-gold text-sm font-medium uppercase tracking-widest">
                  Desde 2010
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">
                  Tradição e Inovação
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A Christian Watches nasceu da paixão de seu fundador, Christian Mendes, 
                    por peças que transcendem a simples função de marcar o tempo. Cada relógio 
                    que selecionamos conta uma história de dedicação artesanal e precisão impecável.
                  </p>
                  <p>
                    Nossa missão é conectar pessoas a relógios que se tornam extensões de suas 
                    personalidades, símbolos de conquistas e companheiros para toda a vida.
                  </p>
                  <p>
                    Trabalhamos com as melhores marcas e manufaturas do mundo, garantindo 
                    autenticidade e qualidade em cada peça que oferecemos.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Nossos Valores
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Autenticidade',
                  description: 'Cada relógio é certificado e garantido como original.',
                },
                {
                  title: 'Excelência',
                  description: 'Buscamos a perfeição em cada detalhe do atendimento.',
                },
                {
                  title: 'Confiança',
                  description: 'Construímos relacionamentos duradouros com nossos clientes.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-card rounded-2xl border border-border"
                >
                  <h3 className="font-serif text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
