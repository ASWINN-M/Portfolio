import React from "react";
import { Globe } from "../components/components/Globe";

const About = () => {
  const grid2Container = React.useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] "
          />
          <div className="z-10">
            <p className="headtext text-2xl md:text-4xl text-shadow-black">
              Hi, I'm Aswin
            </p>
            <p className="text-sm md:text-base subtext">
              I work on AI agents and practical ML — things like RAG, OCR, and
              tools that can take real actions. Right now I'm building The Hybrid
              Agent, and I enjoy turning research ideas into projects you can
              actually run.
            </p>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
          </div>
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="p-6 text-left bg-black/15 border border-white/7 rounded-lg shadow-lg">
              <p className="text-2xl font-semibold mb-2 text-white">
                What I've been learning
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-white">
                <li>
                  Machine Learning with <b>DeepLearning.AI</b>
                </li>
                <li>LangChain, LangGraph, and building AI agents</li>
                <li>
                  Python from the <b>University of Michigan</b> (Coursera)
                </li>
                <li>
                  Scikit-Learn & applied ML on <b>freeCodeCamp</b>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Where I am</p>
            <p className="subtext">
              I'm based in India and happy to work remotely with teams anywhere.
            </p>
            <figure className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Globe />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
