import { allImages } from "@/types/imgtype";

export const Hero = () => {
  return (
    <section
      className="
        bg-cover h-screen
        flex flex-col justify-center items-center text-center
        bg-no-repeat bg-center bg-contain
      "
      style={{ backgroundImage: `url(${allImages.heroImg})` }}
    >
      <h1 className="text-white text-4xl font-bold mb-4">
        Estrategia y creatividad en el ejercicio del derecho
      </h1>

      <h2 className="text-white text-xl opacity-80">
        Subtítulo descriptivo
      </h2>
    </section>
  );
};
