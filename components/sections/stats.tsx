 "use client";

 import { motion } from "framer-motion";
 import { Folder, Bot, Terminal, Globe, Wrench, Sparkles } from "lucide-react";
 import { Project, ProjectCategory, categoryLabels } from "@/types/project";

 interface StatsProps {
   projects: Project[];
 }

 const categoryIcons: Record<ProjectCategory, React.ReactNode> = {
   automation: <Bot className="h-5 w-5" />,
   web: <Globe className="h-5 w-5" />,
   cli: <Terminal className="h-5 w-5" />,
   skill: <Sparkles className="h-5 w-5" />,
   other: <Wrench className="h-5 w-5" />,
 };

 export function Stats({ projects }: StatsProps) {
   const total = projects.length;
   const skillCount = projects.filter((p) => p.category === "skill").length;
   const automationCount = projects.filter((p) => p.category === "automation").length;
   const cliCount = projects.filter((p) => p.category === "cli").length;
   const webCount = projects.filter((p) => p.category === "web").length;
   const techStack = Array.from(
     new Set(projects.flatMap((p) => p.techStack))
   ).slice(0, 5);

   const cards = [
     {
       title: "项目总数",
       value: total,
       icon: <Folder className="h-5 w-5" />,
       className: "sm:col-span-2",
     },
     {
       title: categoryLabels.skill,
       value: skillCount,
       icon: categoryIcons.skill,
     },
     {
       title: categoryLabels.automation,
       value: automationCount,
       icon: categoryIcons.automation,
     },
     {
       title: categoryLabels.cli,
       value: cliCount,
       icon: categoryIcons.cli,
     },
     {
       title: categoryLabels.web,
       value: webCount,
       icon: categoryIcons.web,
     },
     {
       title: "主要技术栈",
       value: techStack.join(" · ") || "-",
       icon: null,
       isText: true,
       className: "sm:col-span-2",
     },
   ];

   return (
     <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
       <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
         {cards.map((card, index) => (
           <motion.div
             key={card.title}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: index * 0.05 }}
             className={`group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:shadow-md ${card.className || ""}`}
           >
             <div className="flex items-center gap-2 text-muted-foreground">
               {card.icon}
               <span className="text-sm font-medium">{card.title}</span>
             </div>
             <div className={`mt-3 ${card.isText ? "text-sm font-medium text-foreground" : "text-3xl font-bold tracking-tight text-foreground"}`}>
               {card.value}
             </div>
           </motion.div>
         ))}
       </div>
     </section>
   );
 }
