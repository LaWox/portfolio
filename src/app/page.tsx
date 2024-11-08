import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Work from "@/app/components/work";

export default async function Home() {
  return (
    <>
      <About />
      <Work />
      <Contact />
    </>
  );
}
