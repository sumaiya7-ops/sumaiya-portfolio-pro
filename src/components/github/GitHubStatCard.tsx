"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

export default function GitHubStatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-indigo-500/40 hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]"
    >
      <div className="mb-5 inline-flex rounded-2xl bg-indigo-500/10 p-4 text-3xl text-indigo-400 transition duration-300 group-hover:scale-110">
        {icon}
      </div>

    <h3 className="text-4xl font-black text-white">
  <CountUp
    end={Number(value)}
    duration={2}
    separator=","
  />
</h3>
<p className="mt-2 text-slate-400">
  {title}
</p>

     <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
  />
</div>

<div className="mt-5 flex items-center justify-end text-indigo-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
  <FiArrowUpRight className="text-xl" />
</div>
    </motion.div>
  );
}