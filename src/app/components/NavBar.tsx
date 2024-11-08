"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/app/components/ui/navigation-menu";
import { NAV_PATHS } from "@/app/constants";
import Link from "next/link";

export default function NavBar() {
  return (
    <NavigationMenu className="sticky top-0 mx-auto w-full bg-white px-40">
      <NavigationMenuList>
        {NAV_PATHS.map((path) => {
          return (
            <NavigationMenuItem key={path.name}>
              <Link href={"#" + path.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    "text-base font-medium transition-all duration-100 " +
                    navigationMenuTriggerStyle()
                  }
                >
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
