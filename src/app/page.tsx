import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from '@/components/sections/Projects';
import GitHub from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/common/BackToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
       <Hero />
       <About />
       <TechStack />
       <Projects />
       <GitHub />
       <Contact />
       <Footer />
       <BackToTop />

    </>
  );
}