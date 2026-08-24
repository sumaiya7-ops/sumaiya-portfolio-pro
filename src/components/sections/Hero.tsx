"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import GridPattern from "@/components/ui/GridPattern";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";

type GithubUser = {
  public_repos?: number;
};

export default function Hero() {
  const [githubUser, setGithubUser] = useState<GithubUser | null>(null);
  const [githubLoading, setGithubLoading] = useState(true);

  useEffect(() => {
    const fetchGithubUser = async () => {
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

    fetchGithubUser();
  }, []);

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
        ease: "easeOut",
      },
    }),
  };

  const techStackCount = Array.isArray(portfolio.techStacks)
    ? portfolio.techStacks.length
    : portfolio.techStacks;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <BackgroundGlow />
      <GridPattern />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col justify-center">
            {/* Status Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl sm:px-5"
            >
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300 sm:text-xs sm:tracking-[0.25em]">
                Open To Global Remote Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              I Build Modern,{" "}
              <span className="block text-indigo-400">
                Responsive Websites
              </span>
              & Web Applications.
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
            >
              I help businesses and startups build fast, modern, and
              user-friendly web experiences with{" "}
              <span className="font-semibold text-white">React</span>,{" "}
              <span className="font-semibold text-white">Next.js</span>, and{" "}
              <span className="font-semibold text-white">TypeScript</span> —
              designed to look great, perform smoothly, and scale with your
              business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hire Me
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Projects
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              custom={0.8}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6"
            >
              {/* Projects */}
              <div>
                <h3 className="text-3xl font-black text-white">
                  {githubLoading
                    ? "--"
                    : `${githubUser?.public_repos ?? 0}+`}
                </h3>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                  Public Projects
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-3xl font-black text-white">
                  {techStackCount}+
                </h3>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                  Technologies
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-3xl font-black text-white">
                  2025+
                </h3>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                  Experience
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex items-center justify-center px-4 sm:px-8 lg:px-0">
            {/* Glow */}
            <div className="absolute h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[100px] sm:h-[520px] sm:w-[520px] sm:blur-[120px]" />

            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="relative w-full max-w-md"
            >
              {/* Glass Card */}
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/40 p-4 shadow-2xl backdrop-blur-2xl sm:rounded-[36px] sm:p-6">
                {/* Profile Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.8,
                    },
                    scale: {
                      duration: 0.8,
                    },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="overflow-hidden rounded-[24px] sm:rounded-[28px]"
                >
                  <Image
                    src="https://i.postimg.cc/GphRtTgt/profile-jpg.png"
                    alt={portfolio.name}
                    width={800}
                    height={1000}
                    priority
                    className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </motion.div>
              </div>

              {/* ================= FLOATING TECH PILLS ================= */}

              {/* React */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 -top-5 rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:-right-4 sm:-top-6 sm:px-4"
              >
                <span className="text-xs font-semibold text-white sm:text-sm">
                  ⚛ React
                </span>
              </motion.div>

              {/* Next.js */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-2 top-1/4 rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:-left-10 sm:px-4"
              >
                <span className="text-xs font-semibold text-white sm:text-sm">
                  ▲ Next.js
                </span>
              </motion.div>

              {/* TypeScript */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-2 bottom-1/3 rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:-right-10 sm:px-4"
              >
                <span className="text-xs font-semibold text-white sm:text-sm">
                  TS TypeScript
                </span>
              </motion.div>

              {/* MongoDB */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-4 left-1 rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:bottom-6 sm:left-2 sm:px-4"
              >
                <span className="text-xs font-semibold text-white sm:text-sm">
                  🍃 MongoDB
                </span>
              </motion.div>

              {/* ================= EXPERIENCE BADGE ================= */}

              <div className="absolute left-0 top-8 rounded-2xl border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:-left-10 sm:top-10 sm:px-5 sm:py-3">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                  Experience
                </p>

                <h4 className="mt-1 text-base font-black text-white sm:text-2xl">
                  2025 — Present
                </h4>
              </div>

              {/* ================= AVAILABLE BADGE ================= */}

              <div className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:-right-10 sm:bottom-10 sm:px-5 sm:py-3">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                  Available
                </p>

                <h4 className="mt-1 text-base font-black text-emerald-400 sm:text-2xl">
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