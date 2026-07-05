"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
            opacity: {
              duration: 0.3,
            },
            scale: {
              duration: 0.3,
            },
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="group fixed bottom-8 right-8 z-50"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 opacity-60 blur-xl transition duration-500 group-hover:opacity-100" />

          {/* Button */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:border-indigo-400">
            <FiArrowUp className="text-2xl text-white transition group-hover:-translate-y-1" />
          </div>

          {/* Tooltip */}
          <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2 text-sm whitespace-nowrap text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
            Back to Top ↑
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}