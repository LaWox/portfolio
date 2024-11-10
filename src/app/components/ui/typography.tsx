import { PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren) => {
  return <h1 className="text-4xl font-extrabold underline">{children}</h1>;
};

export const H2 = ({ children }: PropsWithChildren) => {
  return <h2 className="text-3xl font-semibold">{children}</h2>;
};

export const H3 = ({ children }: PropsWithChildren) => {
  return <h3 className="text-2xl font-semibold">{children}</h3>;
};
