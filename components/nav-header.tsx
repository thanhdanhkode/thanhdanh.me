import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const HeaderNavigation = () => {
  return (
    <div className="px-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/blog">Blog</Link>
          </NavigationMenuLink>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/projects">Projects</Link>
          </NavigationMenuLink>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href="/resume">Resumé</Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default HeaderNavigation;
