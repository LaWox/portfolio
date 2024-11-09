import { PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren) => {
  return <h1 className="text-4xl font-extrabold">{children}</h1>;
};

export const H2 = ({ children }: PropsWithChildren) => {
  return <h2 className="text-3xl font-semibold">{children}</h2>;
};
