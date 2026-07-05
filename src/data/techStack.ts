import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiVisualstudiocode,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const techStack = {
  frontend: [
    { name: "React", level: 90, icon: SiReact },
    { name: "Next.js", level: 85, icon: SiNextdotjs },
    { name: "TypeScript", level: 85, icon: SiTypescript },
    { name: "Tailwind CSS", level: 95, icon: SiTailwindcss },
  ],

  backend: [
    { name: "Node.js", level: 85, icon: SiNodedotjs },
    { name: "Express.js", level: 80, icon: SiExpress },
    { name: "MongoDB", level: 90, icon: SiMongodb },
  ],

  tools: [
  { name: "Git", level: 90, icon: SiGit },
  { name: "GitHub", level: 90, icon: SiGithub },
  { name: "Figma", level: 75, icon: SiFigma },
  { name: "VS Code", level: 95, icon: VscVscode },
],
   
};