 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { buttonVariants } from "@/components/ui/button";

 export function Hero() {
   return (
     <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="max-w-3xl"
       >
         <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
           Friday
         </h1>
         <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
           开发者 / 工具创作者 / 开源项目集合
         </p>
         <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground/80">
           这里收集了我平时写的自动化工具、Web 工具、CLI 工具，以及给 Codex 和 AI 助手写的 Skill。
         </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#projects"
            className={`${buttonVariants({ size: "lg" })} gap-2`}
          >
            <ArrowDown className="h-4 w-4" />
            查看项目
          </Link>
          <Link
            href="https://github.com/Friday-Up"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({ variant: "outline", size: "lg" })} gap-2`}
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </Link>
        </div>
       </motion.div>
    </section>
  );
 }
