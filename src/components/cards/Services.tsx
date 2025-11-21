import { ServiceCard } from "@/components/cards/ServiceCard";
import { CardList } from "@/components/cards/CardList";

export const Services = () => {
  return (
    <section id="servicios" className="w-full bg-cloudGray py-16 md:pt-35 pb-16">
      <div className="w-full px-4 md:px-8">
        <h2
          className="
            text-2xl md:text-3xl font-semibold text-inkBlue mb-8
            text-center
          "
        >
          Áreas de práctica
        </h2>

        <div
          className="
            grid w-full mb-8
            grid-cols-1
            gap-y-4 gap-x-4
            md:grid-cols-4 md:grid-rows-2 md:gap-y-4 md:gap-x-6 md:items-stretch
          "
        >
          {/* Primera fila */}
          <div className="md:col-span-1 md:row-span-1 h-full">
            <ServiceCard
              title="Compliance"
              description="Asesoramos a clientes en todas las verticales del ecosistema Fintech, incluyendo: (I) billeteras virtuales y proveedores de servicios de pago en general, (II) proveedores no financieros de crédito (lending), (III) PSAV o exchanges, (IV) remesas, (V) startups."
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 h-full">
            <ServiceCard
              title="Derecho Penal Empresarial"
              description="En EMM Abogados brindamos asesoramiento estratégico en Derecho Penal Económico, con especial foco en régimen penal cambiario, delitos aduaneros, delitos fiscales y lavado de activos"
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 h-full">
            <ServiceCard
              title="Derecho Penal"
              description="Asesoramiento y representación en causas seguidas por delitos comunes en el fuero federal y ordinario, en todas las instancias."
            />
          </div>

          <div className="md:col-span-1 md:row-span-1 h-full">
            <ServiceCard
              title="Sumarios y Procedimientos Administrativos"
              description="Ejercemos la defensa y representación en sumarios y procedimientos sancionatorios a cargo de organismos reguladores (BCRA, UIF, ARCA, DGA, CNV, Loterías, etc.), actuando en todas las instancias del proceso: elaboración de descargos, recursos y gestiones ante los reguladores."
            />
          </div>

          {/* Segunda fila */}
          <div className="md:col-span-4 md:row-start-2">
            <CardList
              title="Nuestros servicios incluyen:"
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
