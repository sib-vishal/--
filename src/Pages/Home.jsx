import dynamic from "next/dynamic";
import React from "react";

const Hero = dynamic(() => import("@/components/Hero"),{ ssr: true });
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Cta_1 = dynamic(() => import("@/components/Cta_1"));
const Projects = dynamic(() => import("@/components/Projects"));
const Blog = dynamic(() => import("@/components/Blog"));
const Faq = dynamic(() => import("@/components/Faq"));
const Contact = dynamic(() => import("@/components/Contact"));

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

