// import components
import Hero from "./components/hero";
import Navbar from "./layouts/navbar";
import Skills from "./components/skills";
import Service from "./components/services";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Hireme from "./components/hireMe";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Wahyu Budi Prayogo</h6>
        <p>wahyubudiprayogo8 © All Rights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;
