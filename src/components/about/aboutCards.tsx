interface AboutCardsProps {
  title: string
  subtitle: string
  chip: string[]
  src: string
  description: string
  children?: React.ReactNode
}

export const AboutCards = ({
  title,
  subtitle,
  chip,
  src,
  description,
  children,
}: AboutCardsProps) => {
  return (
    <section className="relative bg-[#F3F4F5] w-[422] h-[754] border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div id="team">
        <img src={src} alt={title} />
      </div>

      <div className="pt-2 p-2 text-shadow-blue-950 flex flex-col">
        <div className="pb-3 sm:pb-4">
          <div className="flex gap-2 sm:gap-4 pb-2 sm:pb-3">
            <h3 className="font-bold leading-tight">
              {title}
            </h3>

            <div className="flex flex-wrap gap-1 sm:gap-2 justify-start sm:justify-end">
              {chip.map((chipText, index) => (
                <span
                  key={index}
                  className="inline-block text-shadow-blue-950 px-2 py-1 border rounded-full text-xs sm:text-sm whitespace-nowrap mb-1"
                >
                  {chipText}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div>
          <p className="text-sm  text-gray-700 leading-relaxed pr-2">
            {description}
          </p>
        </div>

        {children && <div className="card-content mt-2">{children}</div>}
      </div>
    </section>
  )
}
