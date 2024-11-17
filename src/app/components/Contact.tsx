import { Separator } from "./ui/separator";
import { H2 } from "./ui/typography";

export const Contact = () => {
  return (
    <>
      <Separator className="h-1" />
      <div
        id="contact"
        className="pt-8 items-center justify-items-center min-h-screen scroll-m-24"
      >
        <H2>Contact</H2>
        <p>Lite text om mig</p>
      </div>
    </>
  );
};
