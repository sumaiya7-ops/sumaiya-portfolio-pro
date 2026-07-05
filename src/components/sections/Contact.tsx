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
    alert("❌ Failed to send message.");
  }

  setLoading(false);
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[150px]" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-5 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300">
            📬 Contact
          </div>

          <h2 className="text-4xl font-black md:text-5xl">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Have a project in mind or just want to say hello?
            I'd love to hear from you.
          </p>
        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
 className="mx-auto mt-16 grid max-w-6xl gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-2 md:p-10"
>
    <div className="flex flex-col justify-center">
  <h3 className="text-3xl font-bold text-white">
    Get In Touch
  </h3>

  <p className="mt-4 leading-8 text-slate-400">
    I'm always open to discussing new projects,
    freelance opportunities, or just having a chat
    about web development.
  </p>

  <div className="mt-10 space-y-5">
   <a
  href="mailto:sumaiyakookie307@gmail.com"
  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-indigo-500/40 hover:bg-white/10"
>
  <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
    <FiMail size={22} />
  </div>

  <div>
    <p className="text-sm text-slate-400">Email</p>
    <p className="font-semibold text-white">
     sumaiyakookie307@gmail.com
    </p>
  </div>
</a>

    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
  <div className="rounded-xl bg-cyan-500/10 p-3 text-red-500">
    <FiMapPin size={22} />
  </div>

  
      <p className="text-sm text-slate-400">Location</p>
      <p className="mt-1 font-semibold text-white">
        Bangladesh
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-slate-400">Availability</p>
      <p className="mt-1 font-semibold text-emerald-400">
       Open to New Opportunities
      </p>
    </div>
    <div className="mt-8 flex gap-4">
  <a
    href="https://github.com/sumaiya7-ops"
    target="_blank"
    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:-translate-y-1 hover:border-indigo-500/40 hover:text-indigo-400"
  >
    <FiGithub size={22} />
  </a>

  <a
    href="https://linkedin.com/in/sumaiya-sorhad"
    target="_blank"
    className="rounded-2xl border border-white/10 bg-indigo-600 p-4 text-white transition hover:-translate-y-1 hover:border-cyan-500/40 hover:text-white"
  >
    <FiLinkedin size={22} />
  </a>
</div>

  </div>
</div>

 <form onSubmit={sendEmail} className="space-y-6">
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Full Name
        </label>

        <input
          type="text"
           name="from_name"
        value={form.from_name}
        onChange={handleChange}
          placeholder="John Doe"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Email
        </label>

        <input
          type="email"
          name="from_email"
        value={form.from_email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />
      </div>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Message
      </label>

      <textarea
        rows={6}
        name="message"
        value={form.message}
         onChange={handleChange}
        placeholder="Write your message..."
        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 px-6 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/30"
    >
      {loading ? "Sending..." : "🚀 Send Message"}
    </button>
  </form>
</motion.div>
      </Container>
    </section>
  );
}