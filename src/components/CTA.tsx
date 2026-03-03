import { Zap } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-(--c-card) border-t border-(--c-border)">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-8 text-(--c-accent1) backdrop-blur-sm">
          <Zap size={50} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-(--c-text-main) mb-6 tracking-tight">
          Es hora de simplificar tu negocio
        </h2>
        <p className="text-xl text-(--c-text-muted) mb-10 font-light leading-relaxed">
          Dejá atrás los métodos tradicionales. La migración es sencilla y te acompañamos en cada paso para que empieces a vender hoy mismo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-11/12 sm:w-auto bg-(--c-btn-bg) text-(--c-btn-text) px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg">
            Solicitar Demostración
          </button>
          <button className="w-11/12 sm:w-auto bg-transparent text-(--c-text-main) border border-(--c-border) px-10 py-4 rounded-full font-semibold text-lg hover:bg-(--c-bg) transition-colors flex items-center justify-center gap-2">
            Hablar con Ventas
          </button>
        </div>
      </div>
    </section>
  );
};
