type ServiceCardProps = {
  title: string;
  description: string;
  titleClassName?: string; // 👈 opcional para ajustar el h1 en casos especiales
};

export const ServiceCard = ({ title, description, titleClassName }: ServiceCardProps) => {
  return (
    <div
      className="
        w-full
        h-full             /* 🔹 hace que el card ocupe todo el alto disponible */
        bg-navyDeep 
        text-white 
        px-6 py-7
        flex flex-col
        items-center
        text-center
      "
    >
      <h1
        className={`
          font-semibold
          mb-2
          text-base md:text-xl   /* tamaño por defecto */
          ${titleClassName ?? ""} /* override opcional */
        `}
      >
        {title}
      </h1>

      <div className="mt-2 mb-5 h-px w-full bg-skyBlue" />

      <p
        className="
          text-base
          md:text-base
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
};
