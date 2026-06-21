"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
   { href: "#projects", label: "项目" },
   { href: "#about", label: "关于" },
 ];

 export function Navbar() {
   return (
     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
       <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
         <Link
           href="/"
           className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
         >
           Friday
         </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
       </div>
     </header>
   );
 }
