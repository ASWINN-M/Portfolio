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
        <div className="grid-default-color grid-1 flex flex-col justify-end">
          <img
            src={asset("assets/coding-pov.png")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[70%_center] opacity-45 md:opacity-55 scale-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-indigo via-indigo/90 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-indigo via-indigo/80 to-transparent"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-md p-1">
            <p className="text-2xl md:text-4xl font-semibold text-white">
              Hi, I'm Aswin
            </p>
            <p className="mt-3 text-sm md:text-base text-neutral-200 leading-relaxed">
              I build AI agents and practical ML systems — RAG, OCR, and tools
              that take real actions. Right now I'm working on The Hybrid Agent,
              turning research ideas into projects you can actually run.
            </p>
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
