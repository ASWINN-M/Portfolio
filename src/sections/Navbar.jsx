import React, { useState } from "react";
import { motion } from "motion/react";
import { RESUME_URL } from "../Constant";

const ResumeLink = ({ className = "", onClick }) => (
  <a
    className={className}
    href={RESUME_URL}
    download="Aswin_Resume.pdf"
    title="Download Resume"
    aria-label="Download Resume"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-4 h-4 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16"
      />
    </svg>
    <span>Resume</span>
  </a>
);

function Navigation({ onNavigate }) {
  return (
    <ul className="nav-ul flex gap-6 items-center">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={onNavigate}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={onNavigate}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#currently-building" onClick={onNavigate}>
          Now
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={onNavigate}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#project-details" onClick={onNavigate}>
          Details
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={onNavigate}>
          Contact
        </a>
      </li>
      <li className="nav-li">
        <ResumeLink className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 text-neutral-300 hover:text-white hover:border-aqua/50 hover:bg-white/5 transition-colors text-sm md:text-base" />
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href={import.meta.env.BASE_URL}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Aswin
          </a>
          <div className="flex items-center gap-2 sm:hidden">
            <ResumeLink className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-neutral-300 text-sm" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
          </div>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 0.4 }}
          >
            <nav className="pb-5">
              <Navigation onNavigate={closeMenu} />
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
