import { ServiceCard } from "@/components/cards/serviceCard";
import { CardList } from "@/components/cards/cardList";

export const Services = () => {
  return (
    <section id="servicios" className="w-full bg-cloudGray py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título general de la sección */}
        <h2
          className="
            text-2xl md:text-3xl font-semibold text-inkBlue mb-8
            text-center
          "
        >
          Áreas de práctica
        </h2>

        {/* Grid general: ServiceCard arriba, CardList ocupando toda la fila abajo */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <ServiceCard
            title="Compliance"
            description="Asesoramos a clientes en todas las verticales del ecosistema Fintech, incluyendo: (I) billeteras virtuales y proveedores de servicios de pago en general, (II) proveedores no financieros de crédito (lending), (III) PSAV o exchanges, (IV) remesas, (V) startups."
          />
          <ServiceCard
            title="Derecho Penal Empresarial"
            description="En EMM Abogados brindamos asesoramiento estratégico en Derecho Penal Económico, con especial foco en régimen penal cambiario, delitos aduaneros, delitos fiscales y lavado de activos"
          />
          <ServiceCard
            title="Derecho Penal"
            description="Asesoramiento y representación en causas seguidas por delitos comunes en el fuero federal y ordinario, en todas las instancias."
          />
          <ServiceCard
            title="Sumarios y Procedimientos Administrativos"
            description="Ejercemos la defensa y representación en sumarios y procedimientos sancionatorios a cargo de organismos reguladores (BCRA, UIF, ARCA, DGA, CNV, Loterías, etc.), actuando en todas las instancias del proceso: elaboración de descargos, recursos y gestiones ante los reguladores."
          />

          {/* CardList: ocupa toda la fila en desktop */}
          <div className="mt-4 md:mt-6 md:col-span-4">
            <CardList
              title="Servicios destacados"
              items={[
                "Asesoramiento en cumplimiento normativo",
                "Diseño e implementación de políticas internas",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
                "Capacitación a equipos de trabajo",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
