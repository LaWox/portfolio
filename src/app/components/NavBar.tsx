"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/app/components/ui/navigation-menu";
import Link from "next/link";
import { NAV_PATHS } from "@/app/constants";

export default function NavBar() {
  return (
    <NavigationMenu className="sticky inset-0">
      <NavigationMenuList>
        {NAV_PATHS.map((path) => {
          return (
            <NavigationMenuItem key={path.name}>
              <Link href={"#" + path.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {path.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
