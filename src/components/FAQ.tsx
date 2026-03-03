import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-(--c-bg) border-t border-(--c-border)">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-(--c-accent1) font-bold tracking-widest uppercase text-sm mb-4">Dudas Comunes</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Preguntas Frecuentes</h3>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "¿Necesito estar conectado a internet para vender?",
              a: "NexPOS requiere una conexión periódica para sincronizar tus ventas con la nube, pero te permite seguir facturando en modo offline si se cae internet transitoriamente. Los tickets se encolan y se autorizan al volver la conexión."
            },
            {
              q: "¿Qué pasa con mis datos y mi configuración anterior?",
              a: "Podés importar todo fácilmente usando nuestra plantilla inteligente de Excel. En menos de 5 minutos tenés tus artículos, precios y stock inicial cargados en el sistema sin arrancar de cero."
            },
            {
              q: "¿Sirve la tickeadora o lector que ya tengo?",
              a: "¡Sí! NexPOS es compatible con el 99% del hardware USB y Bluetooth del mercado, como tickeadoras térmicas y lectores de barras estándar. Conectás, configurás el puerto y salís funcionando."
            },
            {
              q: "¿Tienen algún límite de permanencia o contrato?",
              a: "Ninguno. El servicio se abona mes a mes y podés cancelarlo cuando desees sin ninguna penalidad, letra chica ni trabas para exportar tu información de regreso."
            }
          ].map((faq, idx) => (
            <details key={idx} className="group bg-(--c-card) border border-(--c-border) rounded-2xl open:bg-(--c-bg) open:border-(--c-accent1) transition-colors shadow-sm open:shadow-md">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none [&::-webkit-details-marker]:hidden text-(--c-text-main) text-lg p-6 lg:px-8">
                {faq.q}
                <span className="transition duration-300 group-open:rotate-180 bg-(--c-bg) p-1 rounded-full border border-(--c-border) group-open:bg-(--c-accent1)/10 group-open:border-(--c-accent1) text-(--c-text-main) group-open:text-(--c-accent1)">
                  <ChevronDown size={20} />
                </span>
              </summary>
              <div className="text-(--c-text-muted) px-6 pb-6 lg:px-8 lg:pb-8 font-light leading-relaxed">
                <div className="border-t border-(--c-border)/50 pt-4 mt-2">
                  {faq.a}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
