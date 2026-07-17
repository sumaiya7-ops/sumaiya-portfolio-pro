import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from '@/components/sections/Projects';
import GitHub from "@/components/sections/GitHub";
import Education from '@/components/sections/Education';
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/common/BackToTop";
import AIChat from "@/components/sections/AIChat";
import WhyHireMe from "@/components/home/WhyHireMe";

export default function HomePage() {
  return (
    <>
      <Navbar />
       <Hero />
       <About />
       <Education />
       <WhyHireMe />
       <TechStack />
       <Projects />
       <GitHub />
       
       <AIChat />
       <Contact />
       <Footer />
       <BackToTop />

    </>
  );
}