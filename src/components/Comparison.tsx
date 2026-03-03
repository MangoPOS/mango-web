import { Zap, CheckCircle2, X } from 'lucide-react';

export const Comparison = () => {
  return (
    <section className="py-24 bg-(--c-card) border-t border-(--c-border)">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-(--c-accent2) font-bold tracking-widest uppercase text-sm mb-4">Por qué elegirnos</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">NexPOS vs Sistemas Tradicionales</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-0 bg-(--c-card) rounded-3xl border border-(--c-border) overflow-hidden shadow-lg">
          {/* Tradicionales */}
          <div className="p-8 md:p-12 bg-(--c-bg) border-b md:border-b-0 md:border-r border-(--c-border) opacity-80">
            <h4 className="text-2xl font-bold text-(--c-text-muted) mb-8 text-center opacity-80">Software Tradicional</h4>
            <ul className="space-y-6">
              {[
                "Instalaciones complejas con técnicos",
                "Se cuelgan y tenés que reiniciar",
                "Interfaz gris parecida a Windows 98",
                "Licencias anuales costosas",
                "Soporte lento o solo días hábiles"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-(--c-text-muted)">
                  <X className="text-[#ff5f56] shrink-0 mt-0.5 opacity-80" size={20} strokeWidth={2.5} />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* NexPOS */}
          <div className="p-8 md:p-12 relative overflow-hidden bg-white/5">
            <div className="absolute inset-0 bg-linear-to-br from-(--c-accent1)/5 to-(--c-accent2)/10 pointer-events-none"></div>
            <h4 className="text-2xl font-bold text-(--c-text-main) mb-8 text-center flex items-center justify-center gap-2">
              Con NexPOS <Zap className="text-(--c-accent1)" size={20} />
            </h4>
            <ul className="space-y-6 relative z-10">
              {[
                "Creás la cuenta y usás en 5 minutos",
                "100% en la nube, protegido siempre",
                "Diseño moderno, fluido y fácil",
                "Planes mensuales sin contrato",
                "Soporte rápido por WhatsApp"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-(--c-text-main) font-medium">
                  <CheckCircle2 className="text-(--c-accent1) shrink-0 mt-0.5" size={20} strokeWidth={2.5} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
