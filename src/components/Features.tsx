import { BadgeDollarSign, CheckCircle2, Cloud, Zap, Printer, MonitorSmartphone } from 'lucide-react';

export const Features = () => {
  return (
    <section id="caracteristicas" className="py-24 bg-(--c-card) border-b border-(--c-border) overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-(--c-accent2) font-bold tracking-widest uppercase text-lg mb-4">Potenciá tu control</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Todo lo necesario para vender más</h3>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center text-(--c-accent2)">
                <BadgeDollarSign size={28} />
              </div>
              <h4 className="text-3xl font-bold text-(--c-text-main)">Facturación AFIP Automática</h4>
            </div>
            <p className="text-lg text-(--c-text-muted) leading-relaxed font-light">
              Emití comprobantes A, B o C sin salir del sistema. Integración directa con los servidores de AFIP, sin molestas demoras ni caídas. Tu cliente no espera.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Tickets y Facturas en un clic</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Control de caja instantáneo</li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-4/3 bg-linear-to-br from-(--c-bg) to-(--c-card) rounded-3xl border border-(--c-border) relative overflow-hidden flex items-center justify-center shadow-sm group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-(--c-accent2)/10 to-transparent"></div>
              
              {/* Abstract Ticket Mockup */}
              <div className="bg-(--c-card) p-6 rounded-2xl shadow-xl border border-(--c-border) w-2/3 relative z-10">
                 <div className="flex justify-between items-start border-b border-(--c-border) pb-4 mb-4">
                   <div className="space-y-3">
                     <div className="h-3 w-24 bg-(--c-bg) rounded-full"></div>
                     <div className="h-2 w-16 bg-(--c-bg) rounded-full"></div>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-(--c-accent1)/20 flex items-center justify-center">
                     <BadgeDollarSign size={20} className="text-(--c-accent2)" />
                   </div>
                 </div>
                 <div className="space-y-4 mb-6 pt-2">
                   <div className="flex justify-between items-center"><div className="h-2 w-1/3 bg-(--c-bg) rounded-full"></div><div className="h-2 w-12 bg-(--c-accent1)/40 rounded-full"></div></div>
                   <div className="flex justify-between items-center"><div className="h-2 w-1/2 bg-(--c-bg) rounded-full"></div><div className="h-2 w-16 bg-(--c-border) rounded-full"></div></div>
                 </div>
                 <div className="flex items-center justify-between border-t border-(--c-border)/50 pt-4 mt-2">
                   <span className="text-(--c-text-muted) text-sm font-medium">Total AFIP</span>
                   <span className="text-(--c-accent2) font-black text-2xl">$12.500</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center text-(--c-accent1)">
                <Cloud size={28} />
              </div>
              <h4 className="text-3xl font-bold text-(--c-text-main)">Nube en Tiempo Real</h4>
            </div>
            <p className="text-lg text-(--c-text-muted) leading-relaxed font-light">
              Tu stock y ventas actualizados al instante. Accedé desde cualquier dispositivo, donde sea. Toda tu información respaldada 24/7 de forma segura.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Sincronización automática</li>
              <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Reportes accesibles desde tu celular</li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-4/3 bg-linear-to-bl from-(--c-bg) to-(--c-card) rounded-3xl border border-(--c-border) relative overflow-hidden flex items-center justify-center shadow-sm group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-(--c-accent1)/10 to-transparent"></div>
              
              {/* Dashboard Data Cards */}
              <div className="relative w-full h-full flex items-center justify-center p-8 z-10">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-(--c-accent1)/20 rounded-full blur-2xl"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-32 h-32 bg-(--c-accent2)/20 rounded-full blur-xl"></div>
                 
                 <div className="flex flex-col gap-4 w-full max-w-[240px] relative">
                   {/* Info Card 1 */}
                   <div className="bg-(--c-card) p-4 rounded-xl shadow-lg border border-(--c-border) flex items-center gap-4">
                     <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-linear-to-br from-(--c-accent1) to-(--c-accent2) text-white shadow-sm">
                       <Cloud size={20} />
                     </div>
                     <div className="flex-1">
                       <div className="h-2 w-16 bg-(--c-border) rounded-full mb-2"></div>
                       <div className="h-3 w-24 bg-(--c-text-main) rounded-full opacity-80"></div>
                     </div>
                   </div>
                   
                   {/* Info Card 2 */}
                   <div className="bg-(--c-card) p-4 rounded-xl shadow-lg border border-(--c-border) flex items-center gap-4 ml-6 translate-y-2">
                     <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-(--c-bg) border border-(--c-border) text-(--c-accent1)">
                       <Zap size={20} />
                     </div>
                     <div className="flex-1">
                       <div className="h-2 w-20 bg-(--c-border) rounded-full mb-2"></div>
                       <div className="h-3 w-16 bg-(--c-accent1) rounded-full"></div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center text-(--c-accent2)">
                <Printer size={28} />
              </div>
              <h4 className="text-3xl font-bold text-(--c-text-main)">Adaptable al Hardware</h4>
            </div>
            <p className="text-lg text-(--c-text-muted) leading-relaxed font-light">
              Diseñado para el ritmo intenso del mostrador. Cero tiempos de carga para no hacer esperar a tus clientes. Conectá el hardware que ya tenés sin configuraciones complejas.
            </p>
            <ul className="space-y-3 pt-4 flex flex-wrap gap-x-6 gap-y-3">
              <li className="flex items-center gap-2 text-(--c-text-muted) font-medium bg-(--c-bg) px-3 py-1.5 rounded-lg border border-(--c-border)"><Zap size={16} className="text-(--c-accent1)"/> Tickeadoras</li>
              <li className="flex items-center gap-2 text-(--c-text-muted) font-medium bg-(--c-bg) px-3 py-1.5 rounded-lg border border-(--c-border)"><Zap size={16} className="text-(--c-accent1)"/> Lectores USB</li>
              <li className="flex items-center gap-2 text-(--c-text-muted) font-medium bg-(--c-bg) px-3 py-1.5 rounded-lg border border-(--c-border)"><Zap size={16} className="text-(--c-accent1)"/> Gavetas monederas</li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-4/3 bg-linear-to-br from-(--c-bg) to-(--c-card) rounded-3xl border border-(--c-border) relative overflow-hidden flex items-center justify-center shadow-sm group">
              <div className="absolute inset-0 bg-linear-to-tr from-(--c-accent2)/5 via-transparent to-(--c-accent1)/5"></div>
              
              {/* Hardware Flow */}
              <div className="flex flex-col items-center justify-center gap-6 relative z-10 w-full">
                 <div className="flex items-center justify-center gap-4">
                   {/* Device block */}
                   <div className="w-20 h-20 bg-(--c-card) shadow-lg rounded-2xl border border-(--c-border) flex items-center justify-center text-(--c-text-main) relative z-10">
                     <MonitorSmartphone size={32} />
                     <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-(--c-accent1) border-2 border-(--c-card)"></div>
                   </div>
                   
                   {/* Connection animation */}
                   <div className="flex items-center justify-center relative w-16">
                     <div className="h-1 w-full bg-(--c-border) overflow-hidden relative rounded-full">
                        <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-(--c-accent1) to-(--c-accent2) animate-[translateX_2s_infinite]"></div>
                     </div>
                   </div>
                   
                   {/* Hardware block */}
                   <div className="w-20 h-20 bg-(--c-card) shadow-lg rounded-2xl border border-(--c-border) flex items-center justify-center text-(--c-accent2) relative z-10">
                     <Printer size={32} />
                     <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-(--c-accent2) border-2 border-(--c-card)"></div>
                   </div>
                 </div>
                 
                 {/* Bottom block */}
                 <div className="h-12 w-48 bg-(--c-card) rounded-xl border border-(--c-border) flex items-center justify-center gap-3 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-(--c-accent1)"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-(--c-accent2)"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-(--c-border)"></div>
                    <div className="h-1.5 w-12 bg-(--c-bg) rounded-full ml-2"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>   
  );
};
