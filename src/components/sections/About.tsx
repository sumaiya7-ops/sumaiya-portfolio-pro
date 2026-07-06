"use client";

import Container from "@/components/common/Container";
import { portfolio } from "@/data/portfolio";
import { education } from "@/data/education";
import { motion } from "framer-motion";
import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-28">
      <Container>

        {/* Heading */}
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center"
>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            {about.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
           {about.description}
          </p>
       </motion.div>
       {/* About Grid */}
<div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

        {/* Cards */}
      {/* Left Side */}
<motion.div
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.7}}
className="relative"
>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

<div className="flex items-center gap-5">

<div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-3xl">
👩🏻‍💻
</div>

<div>

<p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
About Me
</p>

<h3 className="mt-2 text-3xl font-black text-white">
Sumaiya Sarhand Marjiya
</h3>

<p className="mt-2 text-slate-400">
LLB Student • Full Stack Developer
</p>

</div>

</div>

<p className="mt-8 leading-8 text-slate-300">
I combine legal reasoning with software engineering to build
clean, scalable and user-focused web applications.
Studying Law has strengthened my analytical thinking,
while full-stack development allows me to transform ideas
into real digital products.
</p>

<div className="mt-8 flex flex-wrap gap-3">

{[
"Analytical Thinking",
"Legal Reasoning",
"Problem Solving",
"Teamwork",
"Communication",
"Clean Code",
].map((item)=>(

<span
key={item}
className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
>
{item}
</span>

))}

</div>

</div>

</motion.div>

 
       {/* Right Side */}

<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="space-y-6"
>

  {/* Card 1 */}

  <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

    <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
      Current Focus
    </p>

    <h3 className="mt-3 text-2xl font-bold text-white">
      Full Stack Development
    </h3>

    <p className="mt-4 leading-8 text-slate-400">
      Building modern web applications using Next.js,
      React, TypeScript, Node.js and MongoDB while
      continuously improving architecture and clean coding skills.
    </p>

  </div>

  {/* Card 2 */}

  <div className="grid grid-cols-2 gap-5">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

      <h4 className="text-4xl font-black text-indigo-400">
        {portfolio.projects}
      </h4>

      <p className="mt-2 text-slate-400">
        Projects Built
      </p>

    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

      <h4 className="text-4xl font-black text-cyan-400">
        {portfolio.techStacks}

      </h4>

      <p className="mt-2 text-slate-400">
        Technologies
      </p>

    </div>

  </div>

  {/* Card 3 */}

  <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-7">

    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
      Availability
    </p>

    <h3 className="mt-3 text-2xl font-bold text-white">
      Open to Opportunities
    </h3>

    <p className="mt-4 leading-8 text-slate-300">
      Currently looking for internships,
      junior frontend roles and remote
      full-stack opportunities.
    </p>

  </div>

</motion.div>
</div>
<div className="mt-16 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-cyan-500/10 p-8 text-center backdrop-blur-xl">

  <h3 className="text-2xl font-bold text-white">
    "Learning Never Stops."
  </h3>

  <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
    I believe continuous learning, analytical thinking,
    and real-world problem solving are the foundations of becoming
    an exceptional software engineer.
  </p>

</div>

      </Container>
    </section>
  );
}