"use client";

import Container from "@/components/common/Container";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

type GithubData = {
  public_repos?: number;
};

export default function About() {
  const [githubUser, setGithubUser] = useState<GithubData | null>(null);
  const [githubLoading, setGithubLoading] = useState(true);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const res = await fetch("/api/github");

        if (!res.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const data = await res.json();
        setGithubUser(data);
      } catch (error) {
        console.error("GitHub API error:", error);
        setGithubUser(null);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchGithub();
  }, []);

  const techStackCount = Array.isArray(portfolio.techStacks)
    ? portfolio.techStacks.length
    : portfolio.techStacks;

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <Container>
        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            About Me
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turning Ideas Into{" "}
            <span className="text-indigo-400">Digital Experiences.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I’m a passionate Web Developer focused on building modern,
            responsive, and user-friendly websites and web applications. I
            enjoy turning ideas and designs into clean, functional digital
            experiences that are fast, accessible, and built to deliver real
            value.
          </p>
        </motion.div>

        {/* ================= MAIN ABOUT GRID ================= */}

        <div className="mt-16 grid items-stretch gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          {/* ================= LEFT CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Decorative Glow */}
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-indigo-500/10 blur-3xl" />

            <div className="h-full rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
              {/* Profile Header */}

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 text-3xl shadow-lg shadow-indigo-500/20">
                  👩🏻‍💻
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
                    Who I Am
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    {portfolio.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 sm:text-base">
                    {portfolio.role}{" "}
                    <span className="text-slate-600">•</span> LLB Student
                  </p>
                </div>
              </div>

              {/* Main Description */}

              <div className="mt-8 space-y-5">
                <p className="text-base leading-8 text-slate-300">
                  I combine legal reasoning with software engineering to build
                  clean, scalable, and user-focused web applications.
                </p>

                <p className="text-base leading-8 text-slate-400">
                  Studying Law has strengthened my analytical thinking,
                  attention to detail, communication, and problem-solving
                  abilities. At the same time, full-stack development allows me
                  to transform ideas into real digital products that are
                  practical, intuitive, and reliable.
                </p>
              </div>

              {/* Skills */}

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Analytical Thinking",
                  "Problem Solving",
                  "Clean Code",
                  "Responsive Design",
                  "Teamwork",
                  "Communication",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium text-indigo-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Current Focus */}

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 shadow-xl backdrop-blur-2xl sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-lg">
                  🚀
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
                  Current Focus
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">
                Full Stack Development
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Building scalable full-stack applications with Next.js, React,
                TypeScript, Node.js, Express.js, and MongoDB while focusing on
                clean architecture, maintainable code, performance, and
                intuitive user experiences.
              </p>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5">
              {/* GitHub */}

              <div className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center shadow-xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-xl">
                  💻
                </div>

                <h4 className="mt-4 text-4xl font-black text-indigo-400">
                  {githubLoading
                    ? "--"
                    : `${githubUser?.public_repos ?? 0}+`}
                </h4>

                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Public Repositories
                </p>
              </div>

              {/* Technologies */}

              <div className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center shadow-xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                  ⚡
                </div>

                <h4 className="mt-4 text-4xl font-black text-cyan-400">
                  {techStackCount}+
                </h4>

                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Technologies
                </p>
              </div>
            </div>

            {/* Availability */}

            <div className="relative overflow-hidden rounded-[30px] border border-emerald-500/20 bg-emerald-500/[0.08] p-7 shadow-xl sm:p-8">
              {/* Glow */}

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>

                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    Availability
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">
                  Open to Global Remote Opportunities
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  Available for Full Stack Software Engineering, Frontend
                  Engineering, freelance projects, and global remote
                  opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-10 overflow-hidden rounded-[30px] border border-indigo-500/20 bg-gradient-to-r from-indigo-500/[0.08] via-violet-500/[0.08] to-cyan-500/[0.08] p-7 text-center shadow-xl backdrop-blur-2xl sm:p-10"
        >
          {/* Background Glow */}

          <div className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative">
            <span className="text-3xl text-indigo-400">“</span>

            <h3 className="mx-auto mt-2 max-w-3xl text-xl font-bold leading-relaxed text-white sm:text-2xl">
              Building software is about solving real-world problems with
              thoughtful and elegant solutions.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
              I believe continuous learning, analytical thinking, and
              real-world problem solving are the foundations of becoming an
              exceptional software engineer.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}