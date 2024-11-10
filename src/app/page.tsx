import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Work from "@/app/components/work";

export default async function Home() {
  return (
    <>
      <About />
      <section className="max-w-6xl mx-auto">
        <Work />
        <Contact />
      </section>
    </>
  );
}
