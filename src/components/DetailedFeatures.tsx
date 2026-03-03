import { Wallet, Target, BarChart3, ShieldCheck, FileText, Package, MapPin, Users } from 'lucide-react';

export const DetailedFeatures = () => {
  return (
    <section className="py-24 bg-(--c-card) border-t border-(--c-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-(--c-accent2) font-bold tracking-widest uppercase text-sm mb-4">Todo Incluido</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Funcionalidades para escalar</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Wallet, title: "Arqueo de Caja", desc: "Control de turnos, ingresos, egresos y cierre de jornada sin descuadres." },
            { icon: Target, title: "Incentivos", desc: "Motivá a tu equipo con un sistema de comisiones por porcentaje o metas." },
            { icon: BarChart3, title: "Estadísticas", desc: "Gráficos de ventas, rentabilidad y detección de productos estrella." },
            { icon: ShieldCheck, title: "Auditorías", desc: "Registro inmutable de acciones para trazabilidad total del sistema." },
            { icon: FileText, title: "Facturación AFIP", desc: "Tickets y facturas A/B/C validados con AFIP en menos de 2 segundos." },
            { icon: Package, title: "Control de Stock", desc: "Gestión de inventario, alertas de bajo stock y atributos por producto." },
            { icon: MapPin, title: "Multisucursal", desc: "Administrá diferentes locales y depósitos desde una sola cuenta central." },
            { icon: Users, title: "Roles de Usuario", desc: "Permisos estrictos para cajeros, supervisores y administradores." }
          ].map((feature, i) => (
            <div key={i} className="bg-(--c-bg) p-6 rounded-2xl border border-(--c-border) hover:border-(--c-accent1) transition-colors group">
              <div className="w-12 h-12 bg-(--c-card) rounded-xl border border-(--c-border) flex items-center justify-center text-(--c-text-main) mb-6 group-hover:text-(--c-accent2) transition-colors shadow-sm">
                <feature.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-(--c-text-main) mb-3">{feature.title}</h4>
              <p className="text-(--c-text-muted) font-light leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
