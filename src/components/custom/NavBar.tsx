import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FaBuysellads } from "react-icons/fa";
import MobileNav from "./mobileNav"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Adz Blog",
    href: "/blog",
    description: "Latest updates and articles from Adz.",
  },
  {
    title: "Google Partnership",
    href: "/google",
    description: "Learn about our partnership with Google.",
  },
  {
    title: "Free Google Ads Report",
    href: "/google-ads-report",
    description: "Get a free report on your Google Ads performance.",
  },
  {
    title: "Microsoft Partnership",
    href: "/microsoft",
    description: "Discover our collaboration with Microsoft.",
  },
  {
    title: "Free Microsoft Ads Report",
    href: "/microsoft-ads-report",
    description: "Receive a complimentary report on your Microsoft Ads.",
  },
  {
    title: "ClickTech Partnership",
    href: "/clicktech",
    description: "Details about our partnership with ClickTech.",
  },
];

const NavBar = () => {
  return (
    <div className="px-5 xl:px-20 flex items-center justify-between p-4 bg-transparent backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <Link
        to="/"
        className="flex-1 font-bold flex items-center text-3xl text-blue-950 cursor-pointer"
      >
        <FaBuysellads size={35} /> dzConnect
      </Link>

      {/*desktop navbar & hire me btn*/}
      <div className="flex-3 justify-between hidden xl:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-3">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium flex items-center"><FaBuysellads size={35} /> dz</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Your AI-powered marketing assistant
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/ppc-opportunities" title="PCC Opportunities">
                    AI-Driven Smart Recommendations
                  </ListItem>
                  <ListItem
                    href="/ppc-performance"
                    title="PPC Performance Report"
                  >
                    Full Account Audit In Minutes
                  </ListItem>
                  <ListItem
                    href="/seo-performance"
                    title="SEO Performance Report"
                  >
                    Elevate Organic Search Results
                  </ListItem>
                  <ListItem
                    href="/web-metrics-report"
                    title="Web Metrics Report"
                  >
                    Enhance Website Experience
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/why-adz">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/pricing">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/*auth buttons */}
        <div className="flex items-center gap-2">
          <Link to="/login" className="cursor-pointer">
            <Button
              variant="outline"
              className="rounded-4xl w-24 cursor-pointer bg-transparent border-[1px] hover:bg-transparent border-blue-950"
            >
              login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="rounded-4xl w-24 cursor-pointer">Sign Up</Button>
          </Link>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </div>
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
