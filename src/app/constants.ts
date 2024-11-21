type Path = {
  name: ANCHOR_PATH_NAME | NAV_PATH_NAME;
  path: string;
};

type ANCHOR_PATH_NAME = "Home" | "About" | "Work" | "Contact";
type NAV_PATH_NAME = "Projects" | "CV";


export const ANCHOR_PATHS: Path[] = [
  {name: "Home", path: "#home"},
  { name: "About", path: "#about" },
  { name: "Work", path: "#work" },
  { name: "Contact", path: "#contact" },
];

export const NAV_PATHS: Path[] = [
  {name: "Projects", path: "/projects"},
  { name: "CV", path: "/cv" }
];