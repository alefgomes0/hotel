import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  return (
    <NavigationMenu className="z-[15]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-gray-700 opacity-90 text-xs">
            GALLERY
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[200px] lg:w-[300px] lg:grid-cols-[.75fr_1fr] justify-items-center bg-gray-600 text-gray-100 text-sm">
              <li className="underline underline-offset-4 decoration-transparent hover:decoration-gray-100 transition-colors duration-200 cursor-pointer">
                Link 1
              </li>
              <li className="underline underline-offset-4 decoration-transparent hover:decoration-gray-100 transition-colors duration-200 cursor-pointer">
                Link 2
              </li>
              <li className="underline underline-offset-4 decoration-transparent hover:decoration-gray-100 transition-colors duration-200 cursor-pointer">
                Link 3
              </li>
              <li className="underline underline-offset-4 decoration-transparent hover:decoration-gray-100 transition-colors duration-200 cursor-pointer">
                Link 4
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-gray-700 opacity-90 text-xs">
            OFFERS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex items-center justify-center gap-6 p-4 w-[200px] lg:w-[300px] text-sm text-gray-50 bg-gray-600">
              <li className="underline underline-offset-4 decoration-transparent hover:decoration-gray-100 transition-colors duration-200 cursor-pointer">
                Link 5
              </li>
              <li className="underline underline-offset-4 decoration-transparent hover:decoration-gray-100 transition-colors duration-200 cursor-pointer">
                Link 6
              </li>
              <li className="underline underline-offset-4 decoration-transparent hover:decoration-gray-100 transition-colors duration-200 cursor-pointer">
                Link 7
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="flex items-center text-xs font-medium bg-gray-700 opacity-90 underline underline-offset-4 decoration-transparent hover:decoration-gray-100 transition-colors duration-200 cursor-pointer">
            CONTACT US
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
