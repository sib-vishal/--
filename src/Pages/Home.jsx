import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Cta_1 from "@/components/Cta_1";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Cta_1/>
      <Projects/>
      <Blog />
      <Faq/>
      <Contact/>
    </div>
  );
};

export default Home;
