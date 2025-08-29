import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import { MouseStarTrail } from "./components/components/MouseStarTrail";
import Project from "./components/components/Project";
import Experience from "./components/components/Experience";
import Contact from "./components/components/Contact";



const App = () => {
  return (<div className="container mx-auto max-w-7xl">
    <Navbar/>
    <Hero/>
    <About/>
    <MouseStarTrail/>
    <Project/>
    <Experience/>
    <Contact/>
    
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    

    {/* footer */}
    </div>
  );
};

export default App;