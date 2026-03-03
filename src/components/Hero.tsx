import { ArrowRight, Info } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 md:opacity-60" 
        style={{
          backgroundImage: 'linear-gradient(to right, var(--c-border) 1px, transparent 1px), linear-gradient(to bottom, var(--c-border) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-(--c-text-main) mb-8 leading-[1.05]">
          Tu mostrador, <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-(--c-accent1) to-(--c-accent2)">
            más rápido y simple.
          </span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-(--c-text-muted) max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Gestión de inventario y facturación AFIP para comercios modernos. Diseñado con calidez, construido para la velocidad.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-11/12 sm:w-auto bg-(--c-btn-bg) text-(--c-btn-text) px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md">
            Comenzar prueba gratis
            <ArrowRight size={20} />
          </button>
          <button className="w-11/12 sm:w-auto bg-(--c-card) text-(--c-text-main) border border-(--c-border) px-8 py-4 rounded-full font-medium text-lg hover:bg-(--c-bg) transition-colors flex items-center justify-center gap-2">
            Como funciona
            <Info size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
