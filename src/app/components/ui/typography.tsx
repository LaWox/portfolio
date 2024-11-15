import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const H1 = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-8xl text-center font-bungee font-extrabold ">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: PropsWithChildren) => {
  return <h2 className="text-3xl  font-roboto font-semibold">{children}</h2>;
};

export const H3 = ({ children }: PropsWithChildren) => {
  return <h3 className="text-2xl  font-roboto font-semibold">{children}</h3>;
};

export const Body = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn("font-roboto", className)}>{children}</p>;
};
