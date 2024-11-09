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
    <NavigationMenu className="sticky top-0 bg-white border-b  w-full max-w-none">
      <NavigationMenuList>
        {NAV_PATHS.map((path) => {
          return (
            <NavigationMenuItem key={path.name} className="p-1">
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
