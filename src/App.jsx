import React, { useCallback, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import CurrentlyBuilding from "./sections/CurrentlyBuilding";
import Projects from "./sections/projects";
import Contributions from "./sections/Contributions";
import Experience from "./components/components/Experience";
import Contact from "./components/components/Contact";
import PageLoader from "./components/components/PageLoader";

const App = () => {
  const [booting, setBooting] = useState(true);
  const finishBoot = useCallback(() => setBooting(false), []);

  return (
    <>
      {booting && <PageLoader onFinished={finishBoot} />}
      <div
        className={`container mx-auto max-w-7xl transition-opacity duration-700 ${
          booting ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden={booting}
      >
        <Navbar />
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Projects />
        <Contributions />
        <Experience />
        <Contact />
      </div>
    </>
  );
};

export default App;
