import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Inscrição realizada!',
      description: 'Você receberá nossas novidades em primeira mão.',
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Newsletter
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-4 mb-6">
            Receba Novidades em Primeira Mão
          </h2>
          <p className="text-muted-foreground mb-8">
            Inscreva-se para receber lançamentos exclusivos, ofertas especiais e conteúdos sobre o mundo da alta relojoaria.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-muted border-border focus:border-gold"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-8 bg-gold hover:bg-gold-dark text-obsidian font-semibold gap-2"
            >
              {isLoading ? 'Inscrevendo...' : (
                <>
                  Inscrever
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Ao se inscrever, você concorda com nossa política de privacidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
