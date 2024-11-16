import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/app/components/ui/navigation-menu";
import { NAV_PATHS } from "@/app/constants";
import Link from "next/link";
import { Logo } from "./Logo";
import { Body } from "./ui/typography";

export const NavBar = () => {
  return (
    <NavigationMenu className="sticky px-2 md:px-16 py-4 top-0 justify-center md:justify-end bg-[#FCFAFA] w-full">
      <div className="mr-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"#start"} legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  "transition-all duration-100 bg-[#FCFAFA] items-center px-1"
                }
              >
                <Logo />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
      <NavigationMenuList>
        {NAV_PATHS.map((path) => {
          return (
            <NavigationMenuItem key={path.name} className="p-1">
              <Link href={"#" + path.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    "transition-all duration-100 bg-[#FCFAFA] " +
                    navigationMenuTriggerStyle()
                  }
                >
                  <Body className="text-base">{path.name}</Body>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
