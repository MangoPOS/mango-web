import { MonitorSmartphone, CheckCircle2, Download } from 'lucide-react';

export const DownloadApp = () => {
  return (
    <section className="py-24 bg-(--c-card) border-t border-(--c-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-linear-to-br from-(--c-bg) to-(--c-card) p-8 lg:p-12 rounded-3xl border border-(--c-border) shadow-sm">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--c-accent1)/10 text-(--c-text-main) font-bold tracking-widest uppercase text-xs mb-2">
              <MonitorSmartphone size={14} className="text-(--c-accent1)" /> Desktop App
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-(--c-text-main) tracking-tight">
              Llevá NexPOS a <br/>tu computadora
            </h2>
            <p className="text-lg text-(--c-text-muted) font-light leading-relaxed max-w-xl">
              Descargá nuestra aplicación nativa para Windows y disfrutá de una experiencia aún más fluida y rápida en tu mostrador, con atajos de teclado y funcionamiento optimizado.
            </p>
            
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-(--c-text-main) font-medium"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Atajos de teclado para ventas ágiles</li>
              <li className="flex items-center gap-3 text-(--c-text-main) font-medium"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Menor consumo de recursos</li>
              <li className="flex items-center gap-3 text-(--c-text-main) font-medium"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Integración directa con periféricos</li>
            </ul>
            
            <div className="pt-4">
              <button className="bg-(--c-btn-bg) text-(--c-btn-text) px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-md w-full sm:w-auto">
                <Download size={20} />
                Descargar para Windows
              </button>
              <p className="text-xs text-(--c-text-muted) mt-5 ml-2 font-medium">Versión 1.2.0 • 45 MB</p>
            </div>
          </div>
          
          <div className="flex-1 w-full lg:w-auto flex justify-center">
            {/* Decorative Window Mockup */}
            <div className="w-full max-w-md aspect-4/3 bg-(--c-card) rounded-xl shadow-2xl border border-(--c-border) overflow-hidden flex flex-col transform lg:translate-y-4 hover:-translate-y-1 transition-transform duration-500">
              {/* Window Header */}
              <div className="h-10 bg-(--c-bg) border-b border-(--c-border) flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
              </div>
              {/* Window Content */}
              <div className="flex-1 p-6 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-(--c-accent1)/5 to-(--c-bg)">
                 <div className="w-full h-8 bg-(--c-border) rounded-md mb-4 flex items-center px-2"><div className="w-4 h-4 rounded-full bg-(--c-card)"></div></div>
                 <div className="w-5/6 h-26 bg-(--c-card) shadow-sm border border-(--c-border) rounded-lg mb-4 flex flex-col gap-2 p-3">
                   <div className="h-3 w-1/3 bg-(--c-border) rounded-full"></div>
                   <div className="h-2 w-1/2 bg-(--c-bg) rounded-full"></div>
                   <div className="h-2 w-1/4 bg-(--c-bg) rounded-full"></div>
                 </div>
                 <div className="flex gap-4">
                   <div className="flex-1 h-20 bg-(--c-card) shadow-sm border border-(--c-border) rounded-lg p-3 flex items-end">
                     <div className="h-2 w-2/3 bg-(--c-border) rounded-full"></div>
                   </div>
                   <div className="w-1/3 h-20 bg-linear-to-br from-(--c-accent1) to-(--c-accent2) opacity-90 rounded-lg shadow-sm"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
