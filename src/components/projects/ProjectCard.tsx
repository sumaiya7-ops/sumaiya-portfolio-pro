"use client";

import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

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
    <motion.article
      onMouseMove={handleMouseMove}
      initial={{
        opacity: 0,
        y: 50,
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
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-2xl"
    >
      {/* Mouse-following glow */}

      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(99,102,241,.18),
              transparent 70%
            )
          `,
        }}
      />

      {/* Ambient glows */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/15 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Main Grid */}

      <div className="relative z-10 lg:grid lg:grid-cols-2">
        {/* ================= IMAGE ================= */}

        <div
          className={`relative overflow-hidden bg-slate-950/70 p-5 sm:p-6 ${
            index % 2 === 1 ? "lg:order-2" : ""
          }`}
        >
          {/* Featured */}

          {project.featured && (
            <div className="absolute left-8 top-8 z-20 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-xl">
              <span>⭐</span>
              Featured
            </div>
          )}

          {/* Browser bar */}

          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />

            <div className="ml-3 min-w-0 flex-1 rounded-full border border-white/5 bg-white/[0.04] px-4 py-1.5">
              <p className="truncate text-[11px] text-slate-500">
                {project.live.replace("https://", "")}
              </p>
            </div>
          </div>

          {/* Image Wrapper */}

          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-slate-900">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              width={1200}
              height={700}
              className="h-72 w-full object-contain transition duration-700 group-hover:scale-[1.04] sm:h-80 lg:h-[500px]"
            />

            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-30" />

            {/* View icon */}

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
                <FiExternalLink className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">
          {/* Project number */}

          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">
              Project {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-10 bg-gradient-to-r from-indigo-500 to-transparent" />
          </div>

          {/* Title */}

          <h3 className="text-3xl font-black tracking-tight text-white transition duration-500 group-hover:text-cyan-300 sm:text-4xl">
            {project.title}
          </h3>

          {/* What I Built */}

          <div className="mt-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-indigo-400">
              What I Built
            </p>

            <p className="text-[15px] leading-7 text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Key Features */}

          <div className="mt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
              Key Features
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: featureIndex * 0.05,
                  }}
                  className="flex items-start gap-2 text-sm leading-6 text-slate-400"
                >
                  <span className="mt-1 text-cyan-400">✦</span>

                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}

          <div className="mt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-violet-400">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-300 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Actions */}

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/button inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
            >
              <FiExternalLink className="transition duration-300 group-hover/button:rotate-6" />
              Live Demo
            </Link>

            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/github inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <FiGithub className="transition duration-300 group-hover/github:scale-110" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}