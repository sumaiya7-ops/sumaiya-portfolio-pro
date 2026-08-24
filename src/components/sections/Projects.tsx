"use client";

import Container from "@/components/common/Container";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,.08),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,.08),transparent_25%)]" />
     <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />
      <div className="absolute left-1/2 top-32 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />

<div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

<div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
      <Container>
      
     <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mb-16 text-center"
>
  <div className="mb-5 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300">
  🚀 My Best Work
</div>
          <h2 className="text-4xl font-black md:text-5xl">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

         <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
  From modern dashboards to full-stack platforms, these projects
  demonstrate my passion for building beautiful, scalable and
  high-performance web applications.
</p>
       </motion.div>

        {/* Project List */}

        <div className="space-y-20">
  {projects.map((project, index) => (
  <ProjectCard
    key={project.id}
    project={project}
    index={index}
  />
))}
        </div>
        <div className="mt-20 text-center">
  <a
    href="https://github.com/sumaiya7-ops"
    target="_blank"
    className="inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
  >
    View All Projects →
  </a>
</div>
      </Container>
    </section>
  );
}