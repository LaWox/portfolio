import { PropsWithChildren } from "react";

export const PageWrapper = (props: PropsWithChildren) => {
  return (
    <div className="px-8 justify-center content-center">{props.children}</div>
  );
};
