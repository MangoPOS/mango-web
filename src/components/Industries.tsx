import { ShoppingBag, Store, Box, CheckCircle2 } from 'lucide-react';

export const Industries = () => {
  return (
    <section id="rubros" className="py-32 bg-(--c-bg)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="order-2 lg:order-1 space-y-8">
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-(--c-card) border border-(--c-border) p-3 rounded-2xl shadow-sm">
                  <ShoppingBag size={24} className="text-(--c-text-main)" />
                </div>
                <div>
                  <h4 className="font-bold text-(--c-text-main) text-xl">Indumentaria y Pañaleras</h4>
                  <p className="text-(--c-text-muted) font-light mt-2 leading-relaxed">Gestión de talles, colores y reposición rápida de artículos de alta rotación.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-(--c-card) border border-(--c-border) p-3 rounded-2xl shadow-sm">
                  <Store size={24} className="text-(--c-text-main)" />
                </div>
                <div>
                  <h4 className="font-bold text-(--c-text-main) text-xl">Joyerías y Relojerías</h4>
                  <p className="text-(--c-text-muted) font-light mt-2 leading-relaxed">Control preventivo, códigos de barras precisos y seguimiento de ventas especiales.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 bg-(--c-card) border border-(--c-border) p-3 rounded-2xl shadow-sm">
                  <Box size={24} className="text-(--c-text-main)" />
                </div>
                <div>
                  <h4 className="font-bold text-(--c-text-main) text-xl">Venta por unidad / Kioskos</h4>
                  <p className="text-(--c-text-muted) font-light mt-2 leading-relaxed">Caja ágil y atajos visuales para los productos estrella. ¡No pierdas ni una venta!</p>
                </div>
              </div>
           </div>
           
           <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--c-text-main) mb-6 leading-[1.1]">
                Diseñado para <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-(--c-accent1) to-(--c-accent2)">
                  diferentes mundos.
                </span>
              </h2>
              <p className="text-xl text-(--c-text-muted) mb-8 font-light leading-relaxed">
                Ya sea que vendas productos únicos de alto valor, o tengas un flujo constante de clientes por artículos menores, nuestro sistema se amolda a tu día a día de forma orgánica.
              </p>
              <ul className="space-y-4">
                {['Gestión de variantes y atributos', 'Lectura rápida de códigos de barras', 'Control de caja y reportes diarios'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-(--c-text-main) font-medium">
                    <CheckCircle2 size={20} className="text-(--c-accent2)" />
                    {item}
                  </li>
                ))}
              </ul>
           </div>
         </div>
      </div>
    </section>
  );
};
