 export type ProjectCategory = "automation" | "web" | "cli" | "skill" | "other";
 export type ProjectStatus = "maintained" | "completed" | "experimental";

 export interface Project {
   id: string;
   name: string;
   nameZh: string;
   description: string;
   category: ProjectCategory;
   tags: string[];
   techStack: string[];
   githubUrl: string;
   status: ProjectStatus;
 }

 export const categoryLabels: Record<ProjectCategory | "all", string> = {
   all: "全部",
   automation: "自动化",
   web: "Web",
   cli: "CLI",
   skill: "Skill",
   other: "其他",
 };

 export const statusLabels: Record<ProjectStatus, string> = {
   maintained: "维护中",
   completed: "已完成",
   experimental: "实验性",
 };

 export const statusStyles: Record<ProjectStatus, string> = {
   maintained: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
   completed: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
   experimental: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
 };
