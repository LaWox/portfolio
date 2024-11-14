import Contact from "@/app/components/contact";
import Work from "@/app/components/work";
import Hero from "@/app/components/hero";
import About from "./components/about";

export default async function Home() {
  return (
    <>
      <section className="px-16 mx-auto">
        <Hero />
      </section>
      <section className="max-w-6xl mx-auto">
        <About />
        <Work />
        <Contact />
      </section>
    </>
  );
}
