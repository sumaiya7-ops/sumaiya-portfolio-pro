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
  const categories = [
    {
      key: "frontend",
      title: "Frontend",
      subtitle: "Modern UI & responsive experiences",
      icon: SiReact,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10",
      borderHover: "hover:border-cyan-500/40",
      glow:
        "hover:shadow-[0_20px_70px_rgba(34,211,238,0.16)]",
      pill:
        "border-cyan-500/20 bg-cyan-500/5 text-cyan-300",
      data: techStack.frontend,
    },
    {
      key: "backend",
      title: "Backend",
      subtitle: "APIs, server logic & databases",
      icon: SiNodedotjs,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      borderHover: "hover:border-emerald-500/40",
      glow:
        "hover:shadow-[0_20px_70px_rgba(16,185,129,0.16)]",
      pill:
        "border-emerald-500/20 bg-emerald-500/5 text-emerald-300",
      data: techStack.backend,
    },
    {
      key: "tools",
      title: "Tools",
      subtitle: "Development, deployment & workflow",
      icon: SiGithub,
      iconColor: "text-violet-400",
      iconBg: "bg-violet-500/10",
      borderHover: "hover:border-violet-500/40",
      glow:
        "hover:shadow-[0_20px_70px_rgba(139,92,246,0.16)]",
      pill:
        "border-violet-500/20 bg-violet-500/5 text-violet-300",
      data: techStack.tools,
    },
  ];

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/4 top-[55%] -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[130px]" />

      <Container>

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
            <span>⚡</span>
            <span>Skills & Technologies</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Technologies and tools I use to build modern, scalable,
            responsive, and high-performance web applications.
          </p>
        </motion.div>

        {/* ================= CATEGORY CARDS ================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:mt-16">

          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.key}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 sm:p-7 ${category.borderHover} ${category.glow}`}
              >

                {/* Inner Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Header */}

                <div className="relative flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 ${category.iconBg} shadow-lg`}
                    >
                      <CategoryIcon
                        className={`text-3xl ${category.iconColor} transition duration-500 group-hover:scale-110`}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {category.subtitle}
                      </p>
                    </div>

                  </div>

                  {/* Count */}

                  <div className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 px-2.5 text-xs font-bold text-slate-400">
                    {category.data.length}
                  </div>

                </div>

                {/* Divider */}

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Technologies */}

                <div className="flex flex-wrap gap-2.5">

                  {category.data.map((tech) => {
                    const TechIcon = tech.icon;

                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={{
                          y: -3,
                          scale: 1.03,
                        }}
                        className={`group/tech inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${category.pill}`}
                      >

                        <TechIcon className="text-lg transition duration-300 group-hover/tech:scale-110" />

                        <span>
                          {tech.name}
                        </span>

                      </motion.div>
                    );
                  })}

                </div>

                {/* Bottom */}

                <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">

                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                    Core Technologies
                  </span>

                  <span className="text-xs font-semibold text-slate-500">
                    {category.data.length} Skills
                  </span>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            Always learning, experimenting, and improving my engineering
            toolkit to build better digital products.
          </p>
        </motion.div>

      </Container>
    </section>
  );
}