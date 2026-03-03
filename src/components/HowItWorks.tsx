export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-(--c-bg) border-b border-(--c-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-(--c-accent1) font-bold tracking-widest uppercase text-sm mb-4">Migración Sin Estrés</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Empezá a vender en 3 pasos</h3>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-(--c-border) -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-(--c-card) p-8 rounded-3xl border border-(--c-border) shadow-sm flex flex-col items-center text-center group hover:border-(--c-accent1) hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-(--c-bg) rounded-2xl flex items-center justify-center text-(--c-text-main) border border-(--c-border) mb-6 shadow-inner font-black text-2xl group-hover:scale-110 transition-transform">
                1
              </div>
              <h4 className="text-xl font-bold text-(--c-text-main) mb-3">Creá tu cuenta</h4>
              <p className="text-(--c-text-muted) font-light leading-relaxed text-sm">Registrate en segundos y accedé al panel de control desde cualquier computadora o celular.</p>
            </div>

            <div className="bg-(--c-card) p-8 rounded-3xl border-2 border-(--c-accent2) shadow-lg flex flex-col items-center text-center transform md:-translate-y-4">
              <div className="w-16 h-16 bg-linear-to-br from-(--c-accent1) to-(--c-accent2) rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 font-black text-2xl scale-110">
                2
              </div>
              <h4 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-linear-to-r from-(--c-accent1) to-(--c-accent2)">Importá tu Excel</h4>
              <p className="text-(--c-text-muted) font-light leading-relaxed text-sm">Subí tu lista de precios o stock. Nuestro sistema inteligente acomoda todos tus artículos automáticamente.</p>
            </div>

            <div className="bg-(--c-card) p-8 rounded-3xl border border-(--c-border) shadow-sm flex flex-col items-center text-center group hover:border-(--c-accent1) hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-(--c-bg) rounded-2xl flex items-center justify-center text-(--c-text-main) border border-(--c-border) mb-6 shadow-inner font-black text-2xl group-hover:scale-110 transition-transform">
                3
              </div>
              <h4 className="text-xl font-bold text-(--c-text-main) mb-3">Vendido</h4>
              <p className="text-(--c-text-muted) font-light leading-relaxed text-sm">Conectá tu lector o tickeadora actual, y empezá a atender. Tus ventas irán a AFIP de forma invisible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
