"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function FloatingAvatar({ src, alt }: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <Image
        src={src}
        alt={alt}
        width={110}
        height={110}
        className="rounded-full border-4 border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.5)]"
      />
    </motion.div>
  );
}