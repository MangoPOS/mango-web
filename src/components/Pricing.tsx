import { CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="precios" className="relative py-24 bg-(--c-bg) overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-(--c-accent1) font-bold tracking-widest uppercase text-sm mb-4">Planes Claros</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Elegí el plan ideal para vos</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plan Hobby */}
          <div className="flex flex-col p-8 bg-(--c-card) rounded-3xl border border-(--c-border) relative shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-2xl font-bold text-(--c-text-main) mb-2">Hobby</h4>
            <p className="text-(--c-text-muted) font-light mb-6">Ideal para emprendimientos que recién arrancan.</p>
            <div className="mb-8">
              <span className="text-4xl font-black text-(--c-text-main)">Gratis</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Hasta 50 productos</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Ventas mensuales limitadas</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Soporte por email</li>
            </ul>
            <button className="w-full bg-(--c-bg) text-(--c-text-main) border border-(--c-border) px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity">Empezar Gratis</button>
          </div>

          {/* Plan Premium */}
          <div className="flex flex-col p-8 bg-(--c-card) rounded-3xl border-2 border-(--c-accent2) relative shadow-xl transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-(--c-accent1) to-(--c-accent2) text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">
              Más Elegido
            </div>
            <h4 className="text-2xl font-bold text-(--c-text-main) mb-2">Premium</h4>
            <p className="text-(--c-text-muted) font-light mb-6">Para negocios en crecimiento que necesitan control total.</p>
            <div className="mb-8">
              <span className="text-4xl font-black text-(--c-text-main)">$18.500</span>
              <span className="text-(--c-text-muted) font-medium">/mes</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Productos ilimitados</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Facturación AFIP integrada</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Reportes y caja</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Soporte VIP WhatsApp</li>
            </ul>
            <button className="w-full bg-(--c-btn-bg) text-(--c-btn-text) px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition-opacity">Probar 14 días</button>
          </div>

          {/* Plan Personalizado */}
          <div className="flex flex-col p-8 bg-(--c-card) rounded-3xl border border-(--c-border) relative shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-2xl font-bold text-(--c-text-main) mb-2">Empresa</h4>
            <p className="text-(--c-text-muted) font-light mb-6">Franquicias y múltiples sucursales a gran escala.</p>
            <div className="mb-8">
              <span className="text-3xl font-black text-(--c-text-main) mt-2 block">A medida</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 mt-1">
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Todo el plan Premium</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Múltiples sucursales</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Integraciones API y custom</li>
            </ul>
            <button className="w-full bg-(--c-bg) text-(--c-text-main) border border-(--c-border) px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity">Contactar Ventas</button>
          </div>
        </div>
      </div>
    </section>
  );
};
