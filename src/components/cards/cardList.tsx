type CardListProps = {
  title: string;
  items: string[];
};

export const CardList = ({ title, items }: CardListProps) => {
  return (
    <div
      className="
        w-full
        bg-navyDeep 
        text-white 
        px-4 py-6 pb-15
        flex flex-col
        items-center
        text-center
      "
    >
      <h1 className="text-xl md:text-xl font-semibold">
        {title}
      </h1>

      {/* Línea divisora celeste */}
      <div className="mt-3 mb-3 h-px w-full bg-skyBlue" />

      {/* 🔹 Wrapper con margen horizontal */}
      <div
        className="
          w-full
          mx-4  
          md:mx-80     
        "
      >
        <ul
          className="
            w-full
            text-left
            text-sm md:text-base
            leading-relaxed
            list-disc
            pl-5
            space-y-1
            columns-1 md:columns-2 
            md:gap-x-10             
          "
        >
          {items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
