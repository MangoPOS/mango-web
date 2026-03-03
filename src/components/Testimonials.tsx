import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-(--c-card) border-t border-(--c-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-(--c-accent2) font-bold tracking-widest uppercase text-sm mb-4">Comunidad</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Comercios que ya simplificaron su día a día</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "Antes tardaba 1 hora al cierre de caja buscando diferencias. Ahora con NexPOS apreto un botón y me voy a casa tranquilo. Una locura.",
              author: "Martín G.",
              role: "Dueño de Kiosco 24hs",
            },
            {
              text: "Lo que más valoro es que nunca se cae. Pude emitir mis tickets A y B directo desde la misma pantalla. La atención al cliente es bárbara.",
              author: "Laura F.",
              role: "Indumentaria 'Las Moras'",
            },
            {
              text: "Mis empleados aprendieron a usarlo en 10 minutos. Lo conectamos con el lector de barras que ya teníamos y salió andando al toque.",
              author: "Diego R.",
              role: "Supermercado de Barrio",
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-(--c-bg) p-8 rounded-3xl border border-(--c-border) shadow-sm relative group hover:border-(--c-accent1) transition-colors">
              <Quote size={40} className="text-(--c-accent1) opacity-20 absolute top-6 right-6" />
              <div className="flex gap-1 text-(--c-accent1) mb-6 mt-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-(--c-text-main) text-lg mb-8 relative z-10 leading-relaxed font-light">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-(--c-card) rounded-full flex items-center justify-center border border-(--c-border) font-bold text-(--c-accent2) text-xl shadow-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-(--c-text-main)">{testimonial.author}</p>
                  <p className="text-sm text-(--c-text-muted)">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
