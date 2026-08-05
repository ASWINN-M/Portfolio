import React from "react";
import { FlipWords } from "../FlipWords";
import { motion } from "motion/react";
import { RESUME_URL } from "../../Constant";

const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const ctaClass =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-md text-base font-medium transition-colors";

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Aswin
        </motion.h1>
        <div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            AI Agent Developer
            <br />
            I build tools that think and act
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Agents", "RAG apps", "LLM tools"]}
              className="font-black text-8xl text-white"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            that people can actually use
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            <a
              href="#projects"
              className={`${ctaClass} bg-aqua text-primary hover:bg-mint`}
            >
              View Projects
            </a>
            <a
              href={RESUME_URL}
              download="Aswin_Resume.pdf"
              className={`${ctaClass} border border-white/20 text-white hover:border-aqua hover:text-aqua`}
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 md:hidden c-space">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Aswin
        </motion.p>
        <motion.div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            I build
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Agents", "RAG apps", "LLM tools"]}
              className="font-black text-4xl text-neutral-300"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            with AI
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
        >
          <a
            href="#projects"
            className={`${ctaClass} bg-aqua text-primary hover:bg-mint`}
          >
            View Projects
          </a>
          <a
            href={RESUME_URL}
            download="Aswin_Resume.pdf"
            className={`${ctaClass} border border-white/20 text-white hover:border-aqua hover:text-aqua`}
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
