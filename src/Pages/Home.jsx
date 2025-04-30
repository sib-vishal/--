import dynamic from "next/dynamic";
import React from "react";

const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"),{ ssr: false });
const Services = dynamic(() => import("@/components/Services"),{ ssr: false });
const Cta_1 = dynamic(() => import("@/components/Cta_1"),{ ssr: false });
const Projects = dynamic(() => import("@/components/Projects"),{ ssr: false });
const Blog = dynamic(() => import("@/components/Blog"),{ ssr: false });
const Faq = dynamic(() => import("@/components/Faq"),{ ssr: false });
const Contact = dynamic(() => import("@/components/Contact"),{ ssr: false });

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Cta_1 />
      <Projects />
      <Blog />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;

