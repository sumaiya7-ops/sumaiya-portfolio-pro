"use client";

import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

type Project = {
  id: number;
  featured: boolean;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

function handleMouseMove({
  currentTarget,
  clientX,
  clientY,
}: React.MouseEvent<HTMLDivElement>) {
  const { left, top } = currentTarget.getBoundingClientRect();

  mouseX.set(clientX - left);
  mouseY.set(clientY - top);
}


  return (
    <motion.div
onMouseMove={handleMouseMove}
     whileHover={{
  y: -8,
  scale: 1.01,
}}
      transition={{ duration: 0.4 }}
      initial={{
  opacity: 0,
  y: 40,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

viewport={{
  once: true,
}}
     className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl lg:grid lg:grid-cols-2"
    >
      <motion.div
  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
  style={{
    background: useMotionTemplate`
      radial-gradient(
        400px circle at ${mouseX}px ${mouseY}px,
        rgba(99,102,241,.20),
        transparent 70%
      )
    `,
  }}
/>
      <div className=" pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-violet-500/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />
     <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-violet-500/20 opacity-0 transition duration-500 group-hover:opacity-100" /> 
   <div className="absolute -right-24 -z-10 -top-24 h-48 w-48 rounded-full bg-indigo-500/20 blur-[120px]" />

<div className="absolute -left-24 -z-10 bottom-0 h-48 w-48 rounded-full bg-cyan-500/20 blur-[120px]" />
     {/* Image */}
<div
  className={`relative overflow-hidden bg-slate-900 p-5 ${
    index % 2 === 1 ? "lg:order-2" : ""
  }`}
>
        {project.featured && (
  <div className="absolute left-6 top-6 z-20 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-300 backdrop-blur-xl">
    ⭐ Featured
  </div>
)}
     
     <div className="mb-4 flex items-center gap-2">
  <span className="h-3 w-3 rounded-full bg-red-500" />
  <span className="h-3 w-3 rounded-full bg-yellow-500" />
  <span className="h-3 w-3 rounded-full bg-green-500" />

  <div className="ml-4 rounded-full bg-white/5 px-4 py-1 text-xs text-slate-400">
    {project.live.replace("https://", "")}
  </div>
</div>
      <Image
  src={project.image}
  alt={project.title}
  width={1200}
  height={700}
 className="h-80 w-full rounded-2xl object-contain bg-slate-950 transition duration-700 group-hover:scale-105 lg:h-full"
/>
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-40 transition duration-500 group-hover:opacity-20" />
     <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
  <div className="rounded-full bg-white/10 p-5 backdrop-blur-xl">
    <FiExternalLink className="text-3xl text-white" />
  </div>
</div>
      </div>

      <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12">
        <h3 className="text-3xl font-black tracking-tight text-white transition-all duration-500 group-hover:text-cyan-300">
          {project.title}
        </h3>

       <p className="mt-4 leading-8 text-slate-300">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
             className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20"
           >
              {item}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-2">
          {project.features.map((feature) => (
          <motion.li
  initial={{ opacity: 0, x: -15 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
              key={feature}
              className="text-sm text-slate-300"
            >
              <span className="mr-2 text-cyan-400">✦</span> {feature}
           </motion.li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            href={project.live}
            target="_blank"
           className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2 text-white transition duration-300  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40"
          >
          <div className="flex items-center gap-2">
  <FiExternalLink />
  Live Demo
</div>
          </Link>

          <Link
            href={project.github}
            target="_blank"
           className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-white transition duration-300  hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
          >
         <div className="flex items-center gap-2">
  <FiGithub />
  GitHub
</div>
          </Link>
        </div>
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </motion.div>
  );
}