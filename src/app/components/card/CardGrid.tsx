import { PropsWithChildren } from "react";

type EntryGridProps = { orientation: "vertical" | "horizontal" };

export const CardGrid = ({
  children,
  orientation,
}: PropsWithChildren<EntryGridProps>) => {
  return orientation === "horizontal" ? (
    <div className="hidden md:grid grid-row md:grid-cols-5 gap-8">
      {children}
    </div>
  ) : (
    <div className="hidden md:grid grid-col gap-4">{children}</div>
  );
};
