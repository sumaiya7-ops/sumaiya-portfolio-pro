"use client";

import { motion } from "framer-motion";
import { FiCpu, FiSend } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/Container";

export default function AIChat() {

    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

const [messages, setMessages] = useState([
  {
    sender: "ai",
    text: "👋 Hi! I'm Sumaiya's AI assistant. Ask me anything about her skills, projects or availability.",
  },
]);

useEffect(() => {
  if (messagesContainerRef.current) {
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  }
}, [messages, typing]);

function sendMessage(question?: string) {
  const text = question || input;

  if (!text.trim()) return;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text,
    },
  ]);

  setInput("");
  setTyping(true);

  setTimeout(() => {
    const q = text.toLowerCase();

    let reply =
      "I'm still learning. Try asking about skills, projects or contact information.";

    if (
      q.includes("skill") ||
      q.includes("tech") ||
      q.includes("stack")
    ) {
      reply =
        "Sumaiya works with Next.js, React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB and GitHub.";
    }

    else if (
      q.includes("project")
    ) {
      reply =
        "She has built multiple modern web applications including portfolio websites, authentication systems and full-stack applications.";
    }

    else if (
      q.includes("hire") ||
      q.includes("job") ||
      q.includes("available")
    ) {
      reply =
        "Yes! She is open to internships, junior frontend roles and exciting remote opportunities.";
    }

    else if (
      q.includes("contact") ||
      q.includes("email")
    ) {
      reply =
        "You can contact her at: sumaiyakookie307@gmail.com";
    }

    else if (
  q.includes("who are you") ||
  q.includes("about")
) {
  reply =
    "I'm Sumaiya's AI Assistant. I can answer questions about her skills, projects, experience and how to contact or hire her.";
}

else if (
  q.includes("github")
) {
  reply =
    "You can explore all of Sumaiya's projects here: https://github.com/sumaiya7-ops";
}

else if (
  q.includes("linkedin")
) {
  reply =
    "Connect with Sumaiya on LinkedIn: https://linkedin.com/in/sumaiya-sorhad";
}

else if (
  q.includes("resume") ||
  q.includes("cv")
) {
  reply =
    "You can download Sumaiya's resume from the Resume button available in this portfolio.";
}

else if (
  q.includes("thanks") ||
  q.includes("thank you")
) {
  reply =
    "You're welcome! 😊 Let me know if you'd like to know anything else about Sumaiya.";
}

else if (
  q.includes("bye")
) {
  reply =
    "Goodbye! 👋 Have a wonderful day, and thanks for visiting Sumaiya's portfolio.";
}

   setTyping(false);

setMessages((prev) => [
  ...prev,
  {
    sender: "ai",
    text: reply,
  },
]);
  }, 700);
}


  return (
    <section
      id="ai-chat"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[160px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <div className="mb-5 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300">
            🤖 AI Assistant
          </div>

          <h2 className="text-4xl font-black md:text-5xl">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Chat With My AI
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Ask anything about my skills, projects, experience,
            or how to work with me.
          </p>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="group mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/20"
        >
          {/* Header */}
          <div className="flex items-center gap-4 border-b border-white/10 p-6">
            <motion.div
  animate={{
    scale: [1, 1.08, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"
>
              <FiCpu size={24} />
           </motion.div>

            <div>
              <h3 className="font-bold text-white">
                Sumaiya AI Assistant
              </h3>

      <div className="flex items-center gap-2 text-sm text-emerald-400">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
  </span>

  <span>Online</span>
</div>
              </div>
              </div>

          {/* Messages */}
     <div
  ref={messagesContainerRef}
  className="space-y-4 p-6 h-[420px] overflow-y-auto"
>
  {messages.map((msg, index) => (
  <motion.div
    key={index}
    initial={{
      opacity: 0,
      y: 20,
      scale: 0.95,
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 0.25,
    }}
    className={`flex ${
      msg.sender === "user"
        ? "justify-end"
        : "justify-start"
    }`}
  >
      <div
        className={`max-w-md rounded-2xl px-5 py-4 leading-7 ${
          msg.sender === "user"
            ? "rounded-br-sm bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
            : "rounded-bl-sm border border-white/10 bg-white/10 text-slate-300"
        }`}
      >
        {msg.text}
      </div>
   </motion.div>
  ))}
  
</div>



{typing && (
  <div className="flex justify-start">
    <div className="rounded-2xl rounded-bl-sm border border-white/10 bg-white/10 px-5 py-4">
      <div className="flex gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400"></span>
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-indigo-400"
          style={{ animationDelay: ".15s" }}
        ></span>
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-indigo-400"
          style={{ animationDelay: ".3s" }}
        ></span>
      </div>
    </div>
  </div>
)}

<div className="flex flex-wrap gap-3 border-t border-white/10 p-5">
  {[
     "What are your skills?",
  "Tell me about your projects",
  "Can I hire you?",
  "Show me your GitHub",
  "Where is your resume?",
  "How can I contact you?",
  ].map((q) => (
    <button
      key={q}
      onClick={() => sendMessage(q)}
      className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 transition hover:bg-indigo-500 hover:text-white"
    >
      {q}
    </button>
  ))}
</div>

          {/* Input */}
          <div className="border-t border-white/10 p-5">
           <div className="flex gap-3">
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    }}
    placeholder="Ask me anything..."
    className="flex-1 rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
  />

  <button
    onClick={() => sendMessage()}
    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white transition hover:scale-105"
  >
    <FiSend />
  </button>
</div>
          </div>

        </motion.div>
      </Container>
     
    </section>
  );
}