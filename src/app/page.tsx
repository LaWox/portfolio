import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";

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
