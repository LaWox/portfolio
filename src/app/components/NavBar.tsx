"use client";

import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { usePathname } from "next/navigation";
import { GetPath } from "../utils";
import { NAV_PATHS } from "../constants";

export default function NavTabs() {
  const urlPath = usePathname();
  const pathIndex = GetPath(urlPath);
  const [value, setValue] = useState(pathIndex);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      className="p-8 sticky inset-0 bg-blue-500"
      aria-label="tab navigation"
      role="navigation"
      centered
    >
      {NAV_PATHS.map((path) => {
        return (
          <Tab
            key={path.name}
            label={path.name}
            href={"#" + path.path}
            component="a"
          />
        );
      })}
    </Tabs>
  );
}
