 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { buttonVariants } from "@/components/ui/button";

 export function About() {
   return (
     <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="rounded-3xl border border-border/50 bg-card p-8 shadow-sm sm:p-12"
       >
         <div className="mx-auto max-w-2xl text-center">
           <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
             关于
           </h2>
           <p className="mt-4 text-base leading-7 text-muted-foreground">
             我是 Friday，一名热爱用代码解决重复问题的开发者。这里的项目大多源于日常工作中的真实需求，
             涵盖浏览器自动化、CLI 工具、AI Skill 和 Web 工具。希望其中一些也能帮到你。
           </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://github.com/Friday-Up"
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: "outline", size: "lg" })} gap-2`}
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="mailto:hello@example.com"
              className={`${buttonVariants({ variant: "outline", size: "lg" })} gap-2`}
            >
              <Mail className="h-4 w-4" />
              联系我
            </Link>
          </div>
         </div>
       </motion.div>
     </section>
   );
 }
