import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import { MouseStarTrail } from "./components/components/MouseStarTrail";



const App = () => {
  return (<div className="container mx-auto max-w-7xl">
    <Navbar/>
    <Hero/>
    <About/>
    <MouseStarTrail/>
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    <section className="min-h-screen"/>
    
    {/* projecs */}
    {/* experience */}
    {/* testimonial */} 
    {/* contact */}
    {/* footer */}
    </div>
  );
};

export default App;