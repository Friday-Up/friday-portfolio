 "use client";

 import { useMemo, useState } from "react";
 import { AnimatePresence, motion } from "framer-motion";
 import { Project, ProjectCategory } from "@/types/project";
 import { ProjectFilter } from "@/components/project-filter";
 import { ProjectCard } from "@/components/project-card";

 interface ProjectsProps {
   projects: Project[];
 }

 export function Projects({ projects }: ProjectsProps) {
   const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");

   const filteredProjects = useMemo(() => {
     if (activeCategory === "all") return projects;
     return projects.filter((p) => p.category === activeCategory);
   }, [activeCategory, projects]);

   return (
     <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="text-center"
       >
         <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
           开源项目
         </h2>
         <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
           按分类浏览我的工具与 Skill
         </p>
       </motion.div>

       <div className="mt-10">
         <ProjectFilter active={activeCategory} onChange={setActiveCategory} />
       </div>

       <motion.div
         layout
         className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
       >
         <AnimatePresence mode="popLayout">
           {filteredProjects.map((project) => (
             <ProjectCard key={project.id} project={project} />
           ))}
         </AnimatePresence>
       </motion.div>
     </section>
   );
 }
