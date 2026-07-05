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

        {/* Cards */}
       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
  className="mt-16 grid gap-6 md:grid-cols-2"
>

          {/* Experience / Role Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">Experience</h3>

            <p className="mt-3 text-slate-300">
              {portfolio.experience} Years as Full Stack Developer
            </p>

            <p className="mt-2 text-slate-400">
              Building modern, scalable web applications.
            </p>
          </div>

          {/* Education Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">Education</h3>

            <p className="mt-3 text-slate-300">
              {education.degree}
            </p>

            <p className="text-slate-400">
              {education.university}
            </p>

            <p className="text-slate-400">
              {education.year}
            </p>
          </div>

      </motion.div>

        {/* Bottom Stats */}
       <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="mt-16 flex flex-wrap justify-center gap-10 text-center"
>
          <div>
            <h4 className="text-3xl font-black text-white">
              {portfolio.projects}
            </h4>
            <p className="text-slate-400">Projects</p>
          </div>

          <div>
            <h4 className="text-3xl font-black text-white">
              {portfolio.techStacks}
            </h4>
            <p className="text-slate-400">Tech Stack</p>
          </div>

          <div>
            <h4 className="text-3xl font-black text-white">
              {portfolio.location}
            </h4>
            <p className="text-slate-400">Location</p>
          </div>

       </motion.div>

      </Container>
    </section>
  );
}