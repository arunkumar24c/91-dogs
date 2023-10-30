import React from "react";
import Hero from "./homecomponent/Hero";
import Serives from "./homecomponent/Serives";
import About from "./homecomponent/About";
import Contact from "./homecomponent/Contact";
import Gallery from "./homecomponent/Gallery";

import Faq from "./homecomponent/Faq";
import Testimonials from "./homecomponent/Testimonials";

export const metadata = {
  title: "91 Dogs",
  description: " Description",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Serives />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />

      <Faq />
    </main>
  );
}
