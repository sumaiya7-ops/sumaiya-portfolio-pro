"use client";

import Container from "@/components/common/Container";
import { motion } from "framer-motion";
import {
  FiMonitor,
  FiCode,
  FiFigma,
  FiLayout,
  FiLink,
  FiTool,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    title: "Responsive Website Development",
    description:
      "Modern and mobile-friendly websites that work smoothly across all devices, screen sizes, and browsers.",
    icon: FiMonitor,
    number: "01",
    accent: "cyan",
    tags: ["Responsive", "Mobile First", "Modern UI"],
  },
  {
    title: "React / Next.js Development",
    description:
      "Fast, scalable, and maintainable web applications built with React, Next.js, TypeScript, and modern best practices.",
    icon: FiCode,
    number: "02",
    accent: "indigo",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Figma to React",
    description:
      "Transform your Figma designs into pixel-perfect, responsive, and production-ready React interfaces.",
    icon: FiFigma,
    number: "03",
    accent: "violet",
    tags: ["Figma", "Pixel Perfect", "React"],
  },
  {
    title: "Landing Page Development",
    description:
      "High-quality landing pages designed for businesses, products, services, and startups with a strong focus on usability.",
    icon: FiLayout,
    number: "04",
    accent: "cyan",
    tags: ["Landing Page", "UI/UX", "Conversion"],
  },
  {
    title: "API Integration",
    description:
      "Connect your website with APIs, databases, authentication systems, and reliable third-party services.",
    icon: FiLink,
    number: "05",
    accent: "indigo",
    tags: ["REST API", "Integration", "Backend"],
  },
  {
    title: "Bug Fixing & Improvements",
    description:
      "Fix frontend issues, responsive problems, UI bugs, performance bottlenecks, and improve existing websites.",
    icon: FiTool,
    number: "06",
    accent: "violet",
    tags: ["Bug Fixing", "Performance", "Optimization"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glows */}

      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-[350px] w-[350px] rounded-full bg-violet-500/5 blur-[140px]" />

      <Container>
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span>Services</span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            What I Can{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Do For You
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Practical web development solutions designed to help businesses,
            startups, and individuals build better digital experiences.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                className="group relative h-full"
              >
                {/* Hover Glow */}

                <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-r from-indigo-500/0 via-violet-500/0 to-cyan-500/0 opacity-0 blur-xl transition duration-500 group-hover:opacity-100 group-hover:from-indigo-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-500/10" />

                {/* Card */}

                <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 group-hover:border-white/15 sm:p-7">
                  {/* Top Gradient Line */}

                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Number */}

                  <div className="absolute right-6 top-6 text-xs font-black tracking-[0.2em] text-white/10 transition duration-500 group-hover:text-indigo-400/30">
                    {service.number}
                  </div>

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-cyan-500/10 shadow-lg shadow-indigo-500/5"
                  >
                    <Icon className="text-2xl text-indigo-300 transition-colors duration-300 group-hover:text-cyan-300" />
                  </motion.div>

                  {/* Content */}

                  <div className="flex-1">
                    <h3 className="max-w-[90%] text-xl font-bold leading-7 text-white transition duration-300 group-hover:text-indigo-200">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition duration-300 group-hover:border-indigo-500/20 group-hover:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}

                  <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Service
                    </span>

                    <motion.div
                      initial={{ x: 0, y: 0 }}
                      whileHover={{
                        x: 3,
                        y: -3,
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-500 transition duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-300"
                    >
                      <FiArrowUpRight className="text-sm" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[30px] border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-cyan-500/10 p-8 text-center backdrop-blur-2xl sm:p-10"
        >
          {/* CTA Glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">
              Have a project in mind?
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Let&apos;s build something great together.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Whether you need a new website, a powerful web application, or
              improvements to an existing project, I&apos;m ready to help.
            </p>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:shadow-indigo-500/40"
            >
              Let&apos;s Work Together
              <FiArrowUpRight className="text-base" />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}