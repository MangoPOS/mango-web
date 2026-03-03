import { ShoppingBasket } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-(--c-bg) pt-16 pb-8 border-t border-(--c-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-linear-to-br from-(--c-accent1) to-(--c-accent2) rounded-lg flex items-center justify-center text-white">
                <ShoppingBasket size={18} strokeWidth={2.5} />
              </div>
              <span className="font-titulo text-xl font-bold text-(--c-text-main)">
                NexPOS
              </span>
            </div>
            <p className="text-(--c-text-muted) max-w-sm font-light leading-relaxed">
              Empoderando comercios minoristas con tecnología rápida, confiable y fácil de usar en el mostrador.
            </p>
          </div>
          
          <div>
            <h4 className="text-(--c-text-main) font-bold mb-6">Producto</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Características</a></li>
              <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Integraciones</a></li>
              <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-(--c-text-main) font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Soporte Técnico</a></li>
              <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-(--c-text-muted) text-sm gap-4 pt-8 border-t border-(--c-border)">
          <p>© {new Date().getFullYear()} NexPOS Software. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-(--c-text-main) transition-colors">Términos</a>
            <a href="#" className="hover:text-(--c-text-main) transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
