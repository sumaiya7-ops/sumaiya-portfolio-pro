'use client';

import Container from '@/components/common/Container';
import { Button } from "@/components/ui/Button";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import GridPattern from "@/components/ui/GridPattern";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";


export default function Hero() {
  const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
    },
  }),
};
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
        <BackgroundGlow />
        <GridPattern />
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
<div className="flex flex-col justify-center">

  {/* Status Badge */}
 <motion.div
  custom={0}
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
>
    <span className="relative flex h-3 w-3">

      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70"></span>

      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>

    </span>

    <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">
      Available For Work
    </span>

 </motion.div>

  {/* Heading */}

 <motion.h1
  custom={0.2}
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl"
>
    Building

    <span className="block text-indigo-400">

      Exceptional Digital

    </span>

    Experiences.

</motion.h1>

  {/* Sub Heading */}

  <motion.p
  custom={0.4}
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
>
    Hi, I'm

    <span className="font-bold text-white" >

      {" "}{portfolio.name}
    </span>

    — a Full Stack Developer passionate about crafting scalable web applications, intuitive user experiences, and high-performance digital products.

  </motion.p>
  {/* CTA Buttons */}
<motion.div
  custom={0.6}
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="mt-10 flex flex-wrap items-center gap-4"
>
  <Button size="lg">
    Book a Call
  </Button>

  <Button variant="outline" size="lg">
    Download Resume
  </Button>
</motion.div>

{/* Trust Indicator */}

<motion.div
  custom={0.6}
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="mt-10 flex flex-wrap items-center gap-4"
>
  <div>
    <h3 className="text-3xl font-black text-white">
      {portfolio.projects}
    </h3>

    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
      Projects
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-black text-white">
     {portfolio.techStacks}
    </h3>

    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
      Tech Stack
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-black text-white">
      100%
    </h3>

    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
      Commitment
    </p>
  </div>



</motion.div>
</div>

     {/* Right Side */}

<div className="relative flex items-center justify-center">

  {/* Glow */}

  <div className="absolute h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-[120px]" />

  {/* Main Card */}

  <motion.div
  initial={{ opacity: 0, scale: 0.9, x: 60 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative w-full max-w-md"
>

    {/* Glass Card */}

    <div className="overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-2xl">

      {/* Image */}

     <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="overflow-hidden rounded-[28px]"
>
  <img
    src="https://i.postimg.cc/GphRtTgt/profile-jpg.png"
    alt="Sumaiya"
    className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
  />
</motion.div>

    </div>
        {/* Floating Tech Pills */}

<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0,
  }}
  className="absolute -top-6 right-8 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 shadow-xl backdrop-blur-xl"
>
  <span className="text-sm font-semibold text-white">
    ⚛ React
  </span>
</motion.div>

<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.5,
  }}
  className="absolute top-1/4 -left-12 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 shadow-xl backdrop-blur-xl"
>
  <span className="text-sm font-semibold text-white">
    ▲ Next.js
  </span>
</motion.div>

<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1,
  }}
  className="absolute bottom-1/3 -right-12 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 shadow-xl backdrop-blur-xl"
>
  <span className="text-sm font-semibold text-white">
    TS TypeScript
  </span>
</motion.div>

<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1.5,
  }}
  className="absolute  bottom-6 left-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 shadow-xl backdrop-blur-xl"
>
  <span className="text-sm font-semibold text-white">
    🍃 MongoDB
  </span>
</motion.div>


    {/* Floating Badge */}

    <div className="absolute -left-10 top-10 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 shadow-xl">

      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
        Experience
      </p>

      <h4 className="mt-1 text-2xl font-black text-white">
         {portfolio.experience} Years
      </h4>

    </div>

    {/* Floating Badge */}

    <div className="absolute -right-10 bottom-10 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 shadow-xl">

     <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
  Available
</p>

<h4 className="mt-1 text-2xl font-black text-emerald-400">
  For Work
</h4> 

    </div>

</motion.div>

</div>    
        </div>

      </Container>
    </section>
  );
}