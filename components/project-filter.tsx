 "use client";

 import { motion } from "framer-motion";
 import { ProjectCategory, categoryLabels } from "@/types/project";

 interface ProjectFilterProps {
   active: ProjectCategory | "all";
   onChange: (category: ProjectCategory | "all") => void;
 }

 const filters: (ProjectCategory | "all")[] = [
   "all",
   "automation",
   "web",
   "cli",
   "skill",
   "other",
 ];

 export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
   return (
     <div className="flex flex-wrap items-center justify-center gap-2">
       {filters.map((category) => (
         <button
           key={category}
           onClick={() => onChange(category)}
           className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
         >
           {active === category && (
             <motion.div
               layoutId="activeFilter"
               className="absolute inset-0 rounded-full bg-primary"
               transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
             />
           )}
           <span
             className={`relative z-10 ${
               active === category
                 ? "text-primary-foreground"
                 : "text-muted-foreground hover:text-foreground"
             }`}
           >
             {categoryLabels[category]}
           </span>
         </button>
       ))}
     </div>
   );
 }
