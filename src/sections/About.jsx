import { Globe } from "../components/components/Globe";
import { asset } from "../utils/asset";

const techStacks = [
  "Python",
  "LangGraph",
  "LangChain",
  "MCP",
  "RAG",
  "FastAPI",
  "ChromaDB",
  "FAISS",
  "Ollama",
  "OpenAI API",
  "PaddleOCR",
  "Scikit-Learn",
  "Streamlit",
  "Git",
];

const About = () => {
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="grid-default-color grid-1 flex flex-col">
          <img
            src={asset("assets/coding-pov.png")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[68%_center] opacity-70 md:opacity-80"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-indigo/95 via-indigo/75 to-indigo/25"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo/95 via-indigo/50 to-transparent"
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full flex-col justify-between gap-5">
            <div className="max-w-lg">
              <p className="text-xs uppercase tracking-[0.18em] text-aqua/90">
                AI Agent Developer · VIT-AP
              </p>
              <p className="mt-2 text-2xl md:text-4xl font-semibold text-white">
                Hi, I'm Aswin
              </p>
              <p className="mt-3 text-sm md:text-base text-neutral-100 leading-relaxed">
                I build AI agents and practical ML systems — things like RAG,
                OCR, and tools that can take real actions instead of only
                chatting. I'm a student at VIT-AP, looking for an AI Agent /
                AI Engineering internship where I can help ship useful systems.
              </p>
              <p className="mt-3 text-sm md:text-base text-neutral-200 leading-relaxed">
                Right now I'm building The Hybrid Agent — wiring LangGraph,
                tool use (MCP), memory, and optional voice into one assistant I
                can actually run end to end.
              </p>
            </div>

            <div className="max-w-lg">
              <p className="text-xs uppercase tracking-wider text-neutral-300 mb-2">
                What I focus on
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-neutral-100">
                <li className="flex gap-2">
                  <span className="text-aqua">▸</span>
                  LangGraph agents &amp; MCP tools
                </li>
                <li className="flex gap-2">
                  <span className="text-aqua">▸</span>
                  RAG over real documents
                </li>
                <li className="flex gap-2">
                  <span className="text-aqua">▸</span>
                  Multilingual OCR + NLP
                </li>
                <li className="flex gap-2">
                  <span className="text-aqua">▸</span>
                  Applied ML apps that run
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid-default-color grid-2 flex flex-col">
          <p className="headtext text-white">Tech stack</p>
          <p className="subtext mb-4">
            Tools I use to ship agents, retrieval systems, and AI apps.
          </p>
          <div className="flex flex-wrap gap-2 content-start overflow-hidden">
            {techStacks.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs md:text-sm rounded-md bg-black/25 border border-white/10 text-neutral-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid-black-color grid-3">
          <div className="z-10 relative w-[55%] md:w-[50%]">
            <p className="headtext">Where I am</p>
            <p className="subtext">
              Based in India — open to remote work with teams anywhere.
            </p>
          </div>
          <figure className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 pointer-events-none">
            <Globe />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
