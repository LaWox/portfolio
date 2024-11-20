import Link from "next/link";
import { Separator } from "./ui/separator";
import { Body, H2 } from "./ui/typography";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="py-8 justify-items-center scroll-m-10 max-w-6xl mx-auto"
      >
        <Separator className="h-1" />
        <H2 className="py-8">Contact</H2>
        <Body>
          <strong>Get in Touch</strong> Thank you for visiting my portfolio! If
          you have any questions, project inquiries, or are interested in
          collaborating on a game development project, I&apos;d love to hear
          from you. Whether you&apos;re looking to discuss potential
          opportunities or just want to connect, feel free to reach out using
          the listed contact details. I&apos;m always excited to connect with
          fellow developers, designers, and industry professionals to bring
          innovative ideas to life.
        </Body>
        <div className="grid gap-4 w-full py-8 justify-between">
          <Link
            href={"https://www.linkedin.com/in/platon-woxler/"}
            className="flex items-center"
          >
            <Body className="font-bold">LinkeIn</Body>
            <LinkedInLogoIcon className="pl-1" width={20} height={20} />
          </Link>
          <Link href={"https://github.com/LaWox"} className="flex items-center">
            <Body className="font-bold">Github</Body>
            <GitHubLogoIcon className="pl-1" width={20} height={20} />
          </Link>
          <Link href={"mailto:woxler.platon@gmai.com"} className="flex">
            <Body className="font-bold">Mail:</Body>
            <Body className="pl-2">woxler.platon@gmail.com</Body>
          </Link>
        </div>
      </div>
    </>
  );
};
