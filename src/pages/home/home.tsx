import { Hero } from "@/components/hero/hero";
import { Form } from "@/components"; // se puede importar directamente con components
import { Services } from "@/components/cards/Services";
import {About} from "@/components/about"

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section id="service">
        <Services />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="form">
        <Form />
      </section>
    </main>
  );
}
