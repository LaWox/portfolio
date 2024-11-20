"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";
import { SPA_NAV_PATHS } from "@/app/constants";
import { Logo } from "./Logo";
import React from "react";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  return (
    <NavigationMenu className="sticky md:mx-16 py-2 top-0 justify-center md:justify-end bg-[#FCFAFA] border-b-2 border-black">
      <div className="mr-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-0">
              <Logo />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4">
                {SPA_NAV_PATHS.map((path) => {
                  return (
                    <ListItem key={path.name} href={"#" + path.path}>
                      {"#" + path.name}
                    </ListItem>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
      <NavigationMenuList>
        <ul className="flex">
          {SPA_NAV_PATHS.map((path) => {
            return (
              <ListItem key={path.name} href={"#" + path.path}>
                {path.name}
              </ListItem>
            );
          })}
        </ul>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
