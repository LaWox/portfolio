"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";
import { ANCHOR_PATHS, NAV_PATHS } from "@/app/constants";
import { Logo } from "./Logo";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const env = process.env.NODE_ENV;
  const [baseUrl, setBaseUrl] = useState("http://localhost:3000");

  useEffect(() => {
    if (env == "development") {
      setBaseUrl("http://localhost:3000");
    } else if (env == "production") {
      setBaseUrl("https://platonwoxler.vercel.app/");
    }
  }, []);

  return (
    <NavigationMenu
      delayDuration={100}
      className="sticky py-2 top-0 justify-center bg-[#FCFAFA] border-b-2 border-black"
    >
      <div className="mr-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-0 md:px-2">
              <Logo />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4">
                {ANCHOR_PATHS.map((path) => {
                  return (
                    <ListItem key={path.name} href={baseUrl + path.path}>
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
          {NAV_PATHS.map((path) => {
            return (
              <ListItem key={path.name} href={baseUrl + path.path}>
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
