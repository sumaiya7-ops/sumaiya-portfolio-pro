"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "@/components/common/Container";

type JourneyItem = {
  id: number;
  type: string;
  year: string;
  title: string;
  institution: string;
  location?: string;
  image: string;
  imageAlt: string;
  badge: string;
  badgeStyle: string;
  description: string;
  details: string;
  skills: string[];
  icon: string;
};

const journeyItems: JourneyItem[] = [
  {
    id: 1,
    type: "Education",
    year: "2025 — Present",
    title: "Bachelor of Laws (LLB)",
    institution: "Jatiya Kabi Kazi Nazrul Islam University",
    location: "Trishal, Mymensingh, Bangladesh",
    image: "/images/education/jkkniu.jpg",
    imageAlt: "Jatiya Kabi Kazi Nazrul Islam University",
    badge: "Currently Pursuing",
    badgeStyle:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    description:
      "Pursuing an LLB while building modern full-stack applications and developing a unique combination of legal reasoning and software engineering.",
    details:
      "Studying law has strengthened my analytical thinking, attention to detail, structured decision-making, and ability to understand complex problems from multiple perspectives. These skills directly complement software engineering, where logical reasoning and precision are essential for designing reliable and maintainable systems.",
    skills: [
      "Legal Reasoning",
      "Critical Thinking",
      "Problem Solving",
      "Research",
      "Communication",
    ],
    icon: "🎓",
  },
  {
    id: 2,
    type: "Engineering Journey",
    year: "2025 — Present",
    title: "Full Stack Software Engineer",
    institution: "Self-Learning • Real Projects • Open Source",
    image: "/images/education/eng.png",
    imageAlt: "Full Stack Software Engineering",
    badge: "Open To Work",
    badgeStyle:
      "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    description:
      "Building scalable web applications using modern frontend and backend technologies with a strong focus on performance, usability, and clean architecture.",
    details:
      "My engineering journey is focused on transforming ideas into production-ready digital experiences. I continuously improve my skills through real-world projects, practical problem solving, experimentation, and learning modern development practices.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    icon: "💻",
  },
  {
    id: 3,
    type: "Academic Foundation",
    year: "Completed",
    title: "Higher Secondary Education (HSC)",
    institution: "Brahmanbaria Government Women's College",
    image: "/images/education/bgwc.jpg",
    imageAlt: "Brahmanbaria Government Women's College",
    badge: "Foundation",
    badgeStyle:
      "border-violet-500/30 bg-violet-500/10 text-violet-300",
    description:
      "Built a strong academic foundation focused on discipline, communication, research, teamwork, and continuous learning.",
    details:
      "This stage of my education helped develop the discipline and curiosity that continue to shape my learning journey. It strengthened my communication skills, ability to work with others, and willingness to continuously explore new areas of knowledge.",
    skills: [
      "Discipline",
      "Communication",
      "Research",
      "Leadership",
      "Teamwork",
    ],
    icon: "📚",
  },
];

export default function Education() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[150px] sm:h-[600px] sm:w-[600px]" />

      <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />

      <Container>
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
            <span>🎓</span>
            <span>Education & Journey</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My journey combines legal education with modern software
            engineering, allowing me to approach challenges with analytical
            thinking, structured reasoning, and practical development skills.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20">
          {/* Center Timeline Line */}

          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-14">
            {journeyItems.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
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
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  {/* Timeline Dot */}

                  <div className="absolute left-5 top-12 z-20 -translate-x-1/2 sm:left-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-400/40 bg-slate-950 shadow-[0_0_30px_rgba(99,102,241,0.35)]">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                    </div>
                  </div>

                  {/* Card */}

                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-40px)] ${
                      index % 2 === 0
                        ? "sm:mr-auto sm:pr-2"
                        : "sm:ml-auto sm:pl-2"
                    }`}
                  >
                    <div
                      className={`group overflow-hidden rounded-[30px] border bg-white/[0.04] shadow-2xl backdrop-blur-2xl transition duration-500 ${
                        isOpen
                          ? "border-indigo-500/40 shadow-indigo-500/10"
                          : "border-white/10 hover:-translate-y-1 hover:border-indigo-500/25"
                      }`}
                    >
                      {/* Image */}

                      <div className="relative h-52 overflow-hidden sm:h-56">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />

                        {/* Image Gradient */}

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                        {/* Type */}

                        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl">
                          {item.icon} {item.type}
                        </div>

                        {/* Year */}

                        <div className="absolute bottom-4 left-4">
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">
                            {item.year}
                          </p>
                        </div>
                      </div>

                      {/* Card Content */}

                      <div className="p-6 sm:p-7">
                        <div className="flex flex-col gap-4">
                          <div>
                            <h3 className="text-2xl font-black text-white">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                              {item.institution}
                            </p>

                            {item.location && (
                              <p className="mt-1 text-xs text-slate-500">
                                📍 {item.location}
                              </p>
                            )}
                          </div>

                          <span
                            className={`w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${item.badgeStyle}`}
                          >
                            {item.badge}
                          </span>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-slate-400">
                          {item.description}
                        </p>

                        {/* View Details Button */}

                        <button
                          type="button"
                          onClick={() => toggleDetails(item.id)}
                          aria-expanded={isOpen}
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
                        >
                          {isOpen ? "Hide Details" : "View Details"}

                          <motion.span
                            animate={{
                              rotate: isOpen ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                          >
                            ↓
                          </motion.span>
                        </button>

                        {/* Expandable Details */}

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mt-6 border-t border-white/10 pt-6">
                                <p className="text-sm leading-7 text-slate-300">
                                  {item.details}
                                </p>

                                {/* Skills */}

                                <div className="mt-6">
                                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                    Skills & Focus
                                  </p>

                                  <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                      <span
                                        key={skill}
                                        className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

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
            delay: 0.2,
          }}
          className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-[30px] border border-indigo-500/20 bg-gradient-to-r from-indigo-500/[0.08] via-violet-500/[0.08] to-cyan-500/[0.08] p-8 text-center shadow-xl backdrop-blur-2xl sm:mt-20 sm:p-10"
        >
          <div className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative">
            <span className="text-4xl text-indigo-400">“</span>

            <p className="mt-2 text-lg italic leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Every challenge I solve strengthens both my legal reasoning and
              engineering mindset, enabling me to build software that is
              thoughtful, scalable, and user-centered.
            </p>

            <div className="mt-6 font-semibold text-indigo-300">
              — Sumaiya Sarhand Marjiya
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}