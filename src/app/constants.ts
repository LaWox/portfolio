type Path = {
  name: SPA_NAV_PATH_NAME;
  path: string;
};

 type SPA_NAV_PATH_NAME = "Home" | "About" | "Work" | "Contact";

export const SPA_NAV_PATHS: Path[] = [
  {name: "Home", path: "home"},
  { name: "About", path: "about" },
  { name: "Work", path: "work" },
  { name: "Contact", path: "contact" },
];
