 import projectsData from "@/data/projects.json";
 import { Navbar } from "@/components/navbar";
 import { Hero } from "@/components/sections/hero";
 import { Stats } from "@/components/sections/stats";
 import { Projects } from "@/components/sections/projects";
 import { About } from "@/components/sections/about";
 import { Footer } from "@/components/footer";
 import { Project } from "@/types/project";

 const projects = projectsData as Project[];

 export default function Home() {
   return (
     <>
       <Navbar />
       <main className="flex-1">
         <Hero />
         <Stats projects={projects} />
         <Projects projects={projects} />
         <About />
       </main>
       <Footer />
     </>
   );
 }
