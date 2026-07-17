"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/common/Container";

export default function Education() {
  return (
    <section
       id="education"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />
      <Container>
        <motion.div
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
  }}
  className="text-center"
>
  <div className="mb-5 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300">
    🎓 Education & Journey
  </div>
  <h2 className="text-4xl font-black md:text-5xl">
    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
      My Learning Journey
    </span>
  </h2>
  <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[15px] text-slate-400">
    My path combines legal education with modern software engineering,
    helping me approach problems with analytical thinking,
    structured reasoning, and practical development skills.
  </p>
</motion.div>
<div className="mx-auto mt-20 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative"
>
  {/* Card */}
  <div className="flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:scale-[1.02]  hover:border-indigo-500/40 hover:shadow-[0_20px_60px_rgba(99,102,241,.25)]">
<div className="relative mb-5 h-40 overflow-hidden rounded-2xl">
  <Image
    src="/images/education/jkkniu.jpg"
    alt="JKKNIU"
    fill
    sizes="(max-width: 768px) 100vw, 800px"
   className="object-cover object-[center_20%] transition duration-700 hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
</div>   
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
          2025 — Present
        </p>     
        <h3 className="mt-2 text-xl font-bold text-white">
          Bachelor of Laws (LLB)
        </h3>
        <div className="mt-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-300">
  🎓 Currently Pursuing (2025 – Present)
</div>
        <p className="mt-2 text-slate-400">
          Jatiya Kabi Kazi Nazrul Islam University
        </p>
        <p className="mt-2 text-sm text-slate-500">
  📍 Trishal, Mymensingh, Bangladesh
</p>
      </div>
<span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-sm font-semibold text-indigo-300"> 
Law Student
</span>
    </div>
    <p className="mt-6 leading-7 text-[15px] text-slate-400">
    Pursuing an LLB while building modern full-stack applications. Combining analytical legal thinking with practical software engineering.
    </p>
    <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5">
<p className="mt-3 leading-7 text-slate-400">
Studying law has strengthened my analytical thinking, attention to detail,
and structured decision-making. These skills naturally complement software
engineering, where solving complex problems and building reliable systems
requires logical reasoning and precision.
</p>
</div>
    <div className="mt-6 flex flex-wrap gap-3">
      {[
        "Legal Reasoning",
        "Critical Thinking",
        "Problem Solving",
      ].map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-300"
        >
          {skill}
        </span>
      ))}
    </div>
     </div> 
</motion.div>
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.15 }}
  className="relative"
>
   {/* Card */}
  <div className="flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-3  hover:scale-[1.02] hover:border-cyan-500/40 hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]">
    <div className="relative mb-5 h-40 overflow-hidden rounded-2xl">
  <Image
    src="/images/education/eng.png"
    alt="JKKNIU"
    fill
    sizes="(max-width: 768px) 100vw, 800px"
   className="object-cover object-[center_20%] transition duration-700 hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
<div className="absolute bottom-4 left-4 rounded-full border border-cyan-500/30 bg-slate-950/70 px-3 py-1.5 text-sm font-semibold text-cyan-300 backdrop-blur">
  🚀 Full Stack Engineering Journey
</div>
</div>
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          2025 — Present
        </p>
        <h3 className="mt-2 text-xl font-bold text-white">
          Full Stack Software Engineer
        </h3>
        <p className="mt-2 text-slate-400">
          Self-Learning • Real Projects • Open Source
        </p>
      </div>
      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-300">
        Open To Work
      </span>
    </div>
    <p className="mt-6 leading-7 text-[15px] text-slate-400">
    Developing scalable web applications using Next.js, React, TypeScript, Node.js and MongoDB.
    </p>  
    <div className="mt-6 flex flex-wrap gap-3">
      {[
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
       
      ].map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</motion.div>
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="relative"
>
    <div className="flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-3  hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-[0_20px_60px_rgba(168,85,247,.25)]">
<div className="relative mb-5 h-40 overflow-hidden rounded-2xl">
  <Image
    src="/images/education/bgwc.jpg"
    alt="BGWC"
    fill
    sizes="(max-width: 768px) 100vw, 800px"
    className="object-cover object-[center_20%] transition duration-700 hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
</div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
      Foundation
    </p>
    <h3 className="mt-2 text-xl font-bold text-white">
      Higher Secondary Education (HSC)
    </h3>
    <p className="mt-2 text-slate-400">
      Brahmanbaria Government Women's College
    </p>
    <p className="mt-6 leading-7 text-[15px] text-slate-400">
    Built a strong foundation in discipline, communication and continuous learning.
    </p>
    <div className="mt-6 flex flex-wrap gap-3">
{[
"Discipline",
"Communication",
"Research",
"Leadership",
"Teamwork",
].map((tag)=>(
<span
key={tag}
className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-300"
>
{tag}
</span>
))}
</div>
  </div>
</motion.div>
</div>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mx-auto mt-20 max-w-3xl rounded-3xl border border-white/5 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-cyan-500/10 p-10 text-center backdrop-blur-xl"
>
  <p className="text-xl italic leading-9 text-slate-300">
   Every challenge I solve strengthens both my legal reasoning and engineering mindset, enabling me to build software that is thoughtful, scalable, and user-centered.
  </p>

  <div className="mt-6 text-indigo-300 font-semibold">
    — Sumaiya Sarhand Marjiya
  </div>
</motion.div>
</div>
      </Container>
    </section>
  );
}