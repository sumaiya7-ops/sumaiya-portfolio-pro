"use client";

import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 py-16">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">

          {/* Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-xl font-bold text-white">
                S
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  Sumaiya.
                </h3>

                <p className="text-sm text-slate-400">
                  Frontend Developer
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Passionate about building modern, fast and beautiful web
              experiences using Next.js, React and TypeScript.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/sumaiya7-ops"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:border-indigo-500 hover:text-indigo-400"
              >
                <FiGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/sumaiya-sorhad"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:border-cyan-500 hover:text-cyan-400"
              >
                <FiLinkedin size={20} />
              </a>

              <a
                href="mailto:sumaiyakookie307@gmail.com"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:border-violet-500 hover:text-violet-400"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h4>

            <div className="space-y-3 text-slate-400">
              <Link href="#home" className="block hover:text-white">Home</Link>
              <Link href="#about" className="block hover:text-white">About</Link>
              <Link href="#projects" className="block hover:text-white">Projects</Link>
              <Link href="#github" className="block hover:text-white">GitHub</Link>
              <Link href="#contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">
              Services
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>Frontend Development</p>
              <p>Next.js Development</p>
              <p>Responsive Design</p>
              <p>API Integration</p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xl font-bold text-white">
              Let's Work Together 🚀
            </h4>

            <p className="mt-4 leading-7 text-slate-400">
              Available for internships, freelance projects and exciting
              opportunities.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Resume
              <FiArrowUpRight />
            </a>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sumaiya Sorhad. Built with ❤️ using
          Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}