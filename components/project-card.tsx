 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/github";
import { Project, categoryLabels, statusLabels, statusStyles } from "@/types/project";

 interface ProjectCardProps {
   project: Project;
 }

 export function ProjectCard({ project }: ProjectCardProps) {
   return (
     <motion.div
       layout
       initial={{ opacity: 0, scale: 0.95 }}
       animate={{ opacity: 1, scale: 1 }}
       exit={{ opacity: 0, scale: 0.95 }}
       transition={{ duration: 0.3 }}
       whileHover={{ y: -4 }}
       className="group flex flex-col rounded-3xl border border-border/50 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
     >
       <div className="flex items-start justify-between gap-3">
         <div>
           <h3 className="text-lg font-semibold tracking-tight text-foreground">
             {project.name}
           </h3>
           <p className="text-sm text-muted-foreground">{project.nameZh}</p>
         </div>
         <Link
           href={project.githubUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
           aria-label={`查看 ${project.nameZh} 的 GitHub`}
        >
          <GithubIcon className="h-4 w-4" />
        </Link>
       </div>

       <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
         {project.description}
       </p>

       <div className="mt-4 flex flex-wrap items-center gap-2">
         <span className="inline-flex items-center rounded-full border border-border/60 bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
           {categoryLabels[project.category]}
         </span>
         <span
           className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
         >
           {statusLabels[project.status]}
         </span>
       </div>

       <div className="mt-auto flex flex-wrap gap-2 pt-4">
         {project.techStack.map((tech) => (
           <span
             key={tech}
             className="text-xs text-muted-foreground"
           >
             #{tech}
           </span>
         ))}
       </div>
     </motion.div>
   );
 }
