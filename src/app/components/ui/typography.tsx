import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const H1 = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-7xl text-center font-rubik-mono-one font-semibild ">
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <h2 className={cn("text-3xl  font-roboto font-semibold", className)}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <h3 className={cn("text-2xl font-roboto font-semibold", className)}>
      {children}
    </h3>
  );
};

export const Body = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={cn("font-roboto", className)}>{children}</p>;
};
