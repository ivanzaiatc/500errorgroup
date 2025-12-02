"use client";
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navSections = [
    { path: "/about", key: "about" as const },
    { path: "/services", key: "services" as const },
    { path: "/products", key: "products" as const },
    { path: "/blog", key: "blog" as const },
];

const localizedNavItems = {
    en: {
      products: "Products",
      services: "Services",
      about: "About us",
      blog: "Blog",
      contact: "Contact",
    },
    es: {
      products: "Productos",
      services: "Servicios",
      about: "Sobre nosotros",
      blog: "Blog",
      contact: "Contacto",
    },
  };

type Locale = keyof typeof localizedNavItems;
const currentLocale: Locale = "en";


export default function AppBar() {
  const labels = localizedNavItems[currentLocale];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navSections.map(({ path, key }) => (
            <NavigationMenuItem key={path}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={path}>{labels[key]}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[73px] left-0 right-0 bg-card border-b shadow-lg md:hidden z-50">
          <nav className="flex flex-col p-4 space-y-2 max-w-5xl mx-auto">
            {navSections.map(({ path, key }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsOpen(false)}
                className={navigationMenuTriggerStyle()}
              >
                {labels[key]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}