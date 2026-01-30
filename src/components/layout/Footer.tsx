import { Link } from 'react-router-dom';
import { Watch, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-obsidian text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Watch className="w-8 h-8 text-gold" />
              <span className="font-serif text-xl font-semibold text-secondary">
                Christian <span className="text-gold">Watches</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Elegância atemporal em cada detalhe. Descubra nossa coleção exclusiva de relógios de luxo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-secondary mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { href: '/relogios', label: 'Coleção' },
                { href: '/sobre', label: 'Nossa História' },
                { href: '/contato', label: 'Contato' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-secondary mb-4">Categorias</h3>
            <ul className="space-y-3">
              {[
                { href: '/relogios?categoria=masculino', label: 'Masculino' },
                { href: '/relogios?categoria=feminino', label: 'Feminino' },
                { href: '/relogios?categoria=esportivo', label: 'Esportivo' },
                { href: '/relogios?categoria=luxo', label: 'Luxo' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-secondary mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-gold" />
                contato@christianwatches.com
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-gold" />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>Av. Paulista, 1000<br />São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Christian Watches. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacidade" className="hover:text-gold transition-colors">
              Privacidade
            </Link>
            <Link to="/termos" className="hover:text-gold transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
