"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <nav className={`flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 transition-all duration-300 ${
  scrolled
    ? "bg-slate-950/90 px-6 py-3 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
    : "bg-slate-900/70 px-6 py-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
}`}>

        {/* Logo */}
 <Link
  href="/"
  className="group flex items-center gap-3"
>
  <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-xl shadow-indigo-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
    
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    {/* Logo */}
    <span className="relative text-xs font-extrabold tracking-[0.2em] text-white">
      SSM
    </span>
  </div>
  <div className="leading-tight">
    <h2 className="text-base font-extrabold tracking-tight text-white">
      {siteConfig.name}
    </h2>

    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
      {siteConfig.role.toUpperCase()}
    </p>
  </div>
</Link>

        {/* Desktop Menu */}
       <div className="hidden items-center gap-8 md:flex">
  {navigation.map((item) => (
    <Link
      key={item.name}
      href={item.href}
     className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
    >
      <>
  {item.name}

  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-indigo-400 transition-all duration-300 group-hover:w-full" />
</>
    </Link>
  ))}
</div>

        {/* Right Side */}
    <div className="flex items-center gap-3">

  <ThemeToggle />

  <Button
    className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-white hover:scale-105"
  >
    Resume
  </Button>
  <button
  onClick={() => setIsOpen(!isOpen)}
  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:bg-white/10 md:hidden"
>
  {isOpen ? <X size={20} /> : <Menu size={20} />}
</button>

</div>

{/* Mobile Menu */}
{isOpen && (
  <div className="absolute left-0 top-[90px] w-full rounded-2xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-3xl md:hidden">
    <div className="flex flex-col gap-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-lg font-semibold text-slate-300 transition hover:text-white"
        >
          {item.name}
        </Link>
      ))}

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <ThemeToggle />

        <Button className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600">
          Resume
        </Button>
      </div>
    </div>
  </div>
)}

      </nav>
    </header>
  );
}