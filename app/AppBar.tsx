"use client";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
import Link from "next/link";

const navSections = [
    { id: "products", key: "products" as const },
    { id: "services", key: "services" as const },
    { id: "about", key: "about" as const },
    { id: "contact", key: "contact" as const },
];

const localizedNavItems = {
    en: {
      products: "Products",
      services: "Services",
      about: "About us",
      contact: "Contact",
    },
    es: {
      products: "Productos",
      services: "Servicios",
      about: "Sobre nosotros",
      contact: "Contacto",
    },
  };

type Locale = keyof typeof localizedNavItems;
const currentLocale: Locale = "en";


export default function AppBar() {
  const labels = localizedNavItems[currentLocale];

  return (
    <NavigationMenu>
    <NavigationMenuList>
      {navSections.map(({ id, key }) => (
        <NavigationMenuItem key={id}>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={`#${id}`}>{labels[key]}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
  );
}