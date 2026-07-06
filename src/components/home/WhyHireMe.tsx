"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import {
  FiCode,
  FiCpu,
  FiBookOpen,
  FiUsers,
} from "react-icons/fi";

export default function WhyHireMe() {

  const reasons = [
    {
      icon: <FiCode size={28} />,
      title: "Modern Full Stack Development",
      description:
        "I build scalable, responsive and production-ready applications using Next.js, React, TypeScript, Node.js and MongoDB.",
    },
    {
      icon: <FiBookOpen size={28} />,
      title: "Legal & Analytical Mindset",
      description:
        "My LLB education strengthens my logical reasoning, structured thinking and attention to detail.",
    },
    {
      icon: <FiCpu size={28} />,
      title: "Continuous Learner",
      description:
        "I continuously learn new technologies and engineering best practices.",
    },
    {
      icon: <FiUsers size={28} />,
      title: "Team Collaboration",
      description:
        "I enjoy collaborating with designers and developers to build meaningful products.",
    },
  ];

  return (
    <section
  id="why-hire-me"
  className="relative overflow-hidden py-28"
>
  {/* Background Glow */}
  <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

  <Container>
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center"
>
  <div className="mb-5 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
    ⭐ Why Hire Me
  </div>

  <h2 className="text-4xl font-black md:text-5xl">
    <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
      What Makes Me Different
    </span>
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
    I combine legal reasoning, modern software engineering,
    and continuous learning to build reliable digital products.
  </p>

</motion.div>
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="mt-20 grid gap-8 md:grid-cols-2"
>
    {reasons.map((item, index) => (
  <motion.div
    key={index}
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
    transition={{
      duration: 0.3,
    }}
    className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-500/40 hover:shadow-[0_20px_60px_rgba(34,211,238,.2)]"
  >
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white transition duration-300 group-hover:rotate-6">
      {item.icon}
    </div>

    <h3 className="text-2xl font-bold text-white">
      {item.title}
    </h3>

    <p className="mt-5 leading-8 text-slate-400">
      {item.description}
    </p>

  </motion.div>
))}
</motion.div>
  </Container>
</section>

);
}