"use client";

import Container from "@/components/common/Container";
import { techStack } from "@/data/techStack";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

export default function TechStack() {
  return (
    <section
  id="tech"
  className="relative overflow-hidden py-28"
>
  <div className="absolute left-1/2 top-40 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
         <h2 className="text-4xl font-black md:text-5xl">
  <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
    Tech Stack
  </span>
</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Technologies I use to build modern web applications
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {/* Frontend */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]"
          >
            <div className="mb-6 flex items-center gap-3">
  <div className="rounded-xl bg-indigo-500/20 p-3">
    <SiReact className="text-3xl text-cyan-400" />
  </div>

  <div>
    <h3 className="text-xl font-bold text-white">
      Frontend
    </h3>

    <p className="text-sm text-slate-400">
      Building modern interfaces
    </p>
  </div>
</div>

            <div className="flex flex-wrap gap-2">
             {techStack.frontend.map((tech) => (
  <div key={tech.name} className="mb-4">
   <div className="mb-2 flex items-center ">
   <div className="flex items-center gap-3">
  <tech.icon className="text-2xl text-indigo-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-125 group-hover:text-cyan-400" />
  <span className="font-medium text-white">
    {tech.name}
  </span>
</div>


    </div>

    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800/70">
     <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${tech.level}%` }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
/>
    </div>
  </div>
))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]"
          >
            <div className="mb-6 flex items-center gap-3">
  <div className="rounded-xl bg-emerald-500/20 p-3">
    <SiNodedotjs className="text-3xl text-emerald-400" />
  </div>

  <div>
    <h3 className="text-xl font-bold text-white">
      Backend
    </h3>

    <p className="text-sm text-slate-400">
      APIs & Databases
    </p>
  </div>
</div>

            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech) => (
  <div key={tech.name} className="mb-4">
   <div className="mb-2 flex items-center ">
      <div className="flex items-center gap-3">
  <tech.icon className="text-2xl text-indigo-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-125 group-hover:text-cyan-400" />
  <span className="font-medium text-white">
    {tech.name}
  </span>
</div>


    </div>

    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800/70">
     <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${tech.level}%` }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
/>
    </div>
  </div>
))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            whileHover={{ scale: 1.05 }}
           className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]"
          >
           <div className="mb-6 flex items-center gap-3">
  <div className="rounded-xl bg-violet-500/20 p-3">
    <SiGithub className="text-3xl text-violet-400" />
  </div>

  <div>
    <h3 className="text-xl font-bold text-white">
      Tools
    </h3>

    <p className="text-sm text-slate-400">
      Daily workflow
    </p>
  </div>
</div>

            <div className="flex flex-wrap gap-2">
             {techStack.tools.map((tech) => (
  <div key={tech.name} className="mb-4">
   
   <div className="mb-2 flex items-center ">
     <div className="flex items-center gap-3">
  <tech.icon className="text-2xl text-indigo-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-125 group-hover:text-cyan-400" />
  <span className="font-medium text-white">
    {tech.name}
  </span>
</div>


    </div>

    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800/70">
    <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${tech.level}%` }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
/>
    </div>
  </div>
))}
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}