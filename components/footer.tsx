 import Link from "next/link";

 export function Footer() {
   const currentYear = new Date().getFullYear();

   return (
     <footer className="border-t border-border/40 bg-background py-8">
       <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
         <p className="text-sm text-muted-foreground">
           © {currentYear} Friday. All rights reserved.
         </p>
         <p className="text-sm text-muted-foreground">
           Built with{" "}
           <Link
             href="https://nextjs.org"
             target="_blank"
             rel="noopener noreferrer"
             className="font-medium text-foreground underline-offset-4 hover:underline"
           >
             Next.js
           </Link>{" "}
           +{" "}
           <Link
             href="https://tailwindcss.com"
             target="_blank"
             rel="noopener noreferrer"
             className="font-medium text-foreground underline-offset-4 hover:underline"
           >
             Tailwind CSS
           </Link>{" "}
           +{" "}
           <Link
             href="https://ui.shadcn.com"
             target="_blank"
             rel="noopener noreferrer"
             className="font-medium text-foreground underline-offset-4 hover:underline"
           >
             shadcn/ui
           </Link>
         </p>
       </div>
     </footer>
   );
 }
