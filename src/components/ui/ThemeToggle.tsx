"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-transform duration-300" />
      )}
    </Button>
  );
}