import { About } from "@/components/About2";
import { Contact } from "@/components/Contact2";
import { Hero } from "@/components/Hero2";
import { Work } from "@/components/Work2";

export default async function Home() {
  return (
    <>
      <section className="px-16 mx-auto">
        <Hero />
      </section>
      <section className="mx-auto">
        <About />
        <Work />
        <Contact />
      </section>
    </>
  );
}
