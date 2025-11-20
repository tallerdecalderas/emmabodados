import { Hero } from "@/components/hero/hero";
import { Form } from "@/components"; // se puede importar directamente con components
import { Services } from "@/components/cards/Services";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <article>
        <Services />
      </article>
      <section>
        <h2>Sobre nosotros</h2>
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
}
