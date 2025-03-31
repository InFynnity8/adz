import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { FaBuysellads } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

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


const mobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[30px] text-blue-950" />
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto w-full h-full bg-muted pb-10">
        {/* logo */}
        <div className="mt-10 mb-5 text-2xl text-center">
          <Link
            to="/"
            className="w-full justify-center flex-1 font-bold flex items-center text-3xl text-blue-950 cursor-pointer"
          >
            <FaBuysellads size={35} /> dzConnect
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-5 ">
        <NavigationMenu className="flex flex-col items-center justify-center gap-5  w-full">
          <NavigationMenuList className="flex flex-col items-center justify-center">
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="w-full">Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-3">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">adz</div>
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
                  Why adz?
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
              <NavigationMenuTrigger className="bg-transparent w-full">
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
        </nav>
        <div className="flex items-center gap-2 justify-center w-full">
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
      </SheetContent>
    </Sheet>
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

export default mobileNav;
