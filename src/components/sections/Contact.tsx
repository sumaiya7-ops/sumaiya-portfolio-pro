"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "@/components/common/Container";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.from_name || !form.from_email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("✅ Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      <Container>
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          {/* Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-300 sm:text-sm">
            <FiMail />
            Let&apos;s Connect
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a Project in Mind?
            <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Work Together.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m available for freelance projects and web development
            opportunities. Feel free to contact me and let&apos;s discuss your
            project.
          </p>
        </motion.div>

        {/* ================= CONTACT WRAPPER ================= */}

        <motion.div
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-2xl"
        >
          {/* Card Glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* ================= LEFT SIDE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">
                Get In Touch
              </p>

              <h3 className="mt-4 text-3xl font-black text-white">
                Let&apos;s build something great.
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                Whether you need a modern website, a full-stack web
                application, or improvements to an existing project, I&apos;m
                happy to discuss your ideas and find the right solution.
              </p>

              {/* Availability */}

              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FiCheckCircle size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Currently Available
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Open to freelance & remote opportunities
                  </p>
                </div>
              </div>

              {/* Contact Info */}

              <div className="mt-8 space-y-4">
                {/* Email */}

                <a
                  href="mailto:sumaiyakookie307@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition duration-300 group-hover:scale-110">
                    <FiMail size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-white">
                      sumaiyakookie307@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <FiMapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}

              <div className="mt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Find Me Online
                </p>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/sumaiya7-ops"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
                  >
                    <FiGithub size={21} />
                  </a>

                  <a
                    href="https://linkedin.com/in/sumaiya-sorhad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-600/80 text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-600"
                  >
                    <FiLinkedin size={21} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT SIDE / FORM ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="p-7 sm:p-10 lg:p-12"
            >
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Start a Conversation
                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  Tell me about your project
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Share a few details and I&apos;ll get back to you as soon as
                  possible.
                </p>
              </div>

              <form onSubmit={sendEmail} className="space-y-6">
                {/* Name + Email */}

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}

                  <div>
                    <label
                      htmlFor="from_name"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Full Name
                    </label>

                    <input
                      id="from_name"
                      type="text"
                      name="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none transition duration-300 focus:border-indigo-500/60 focus:bg-slate-950/80 focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* Email */}

                  <div>
                    <label
                      htmlFor="from_email"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="from_email"
                      type="email"
                      name="from_email"
                      value={form.from_email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none transition duration-300 focus:border-indigo-500/60 focus:bg-slate-950/80 focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, required features, timeline..."
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-sm leading-7 text-white placeholder:text-slate-600 outline-none transition duration-300 focus:border-indigo-500/60 focus:bg-slate-950/80 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 px-6 py-4 font-bold text-white shadow-xl shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Let&apos;s Work Together
                      <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-600">
                  I&apos;ll review your message and get back to you soon.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= BOTTOM CTA ================= */}

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
            duration: 0.6,
            delay: 0.25,
          }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-slate-500 sm:text-base">
            Have an idea? Let&apos;s turn it into a fast, modern, and
            user-friendly digital experience.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}