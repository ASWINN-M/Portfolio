import { motion } from "motion/react";
import { asset } from "../utils/asset";

const highlights = [
  "LangGraph agent loop with tool calling",
  "MCP connections for real desktop actions",
  "Groq Llama models + conversation memory",
  "Optional voice in/out with Whisper + TTS",
];

const CurrentlyBuilding = () => {
  return (
    <section id="currently-building" className="c-space section-spacing">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
        <motion.div
          className="w-full lg:w-[46%] overflow-hidden rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <img
            src={asset("assets/projects/hybrid-agent.svg")}
            alt="The Hybrid Agent preview"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-[54%]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <p className="text-aqua text-sm font-semibold tracking-wide uppercase mb-3">
            Currently building
          </p>
          <h2 className="text-heading">The Hybrid Agent</h2>
          <p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed">
            My main project right now — an assistant that doesn’t just chat. It
            can use tools, remember context, and optionally talk out loud. The
            code is still private while I polish it, but here’s what it’s about.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-neutral-300 text-sm md:text-base"
              >
                <span className="text-aqua mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 rounded-xl border border-white/10 bg-navy/50">
            <p className="text-sand text-sm font-semibold mb-1">
              How I usually build agents
            </p>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Start with a clear goal → add tools through MCP or APIs → keep
              memory tight → evaluate answers against real documents or logs →
              only then layer voice or a UI. Hybrid Agent is where that loop is
              coming together.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex px-4 py-2 rounded-md bg-aqua text-primary font-medium hover:bg-mint transition-colors"
            >
              See all projects
            </a>
            <a
              href="#project-details"
              className="inline-flex px-4 py-2 rounded-md border border-white/15 text-neutral-200 hover:border-aqua hover:text-aqua transition-colors"
            >
              Read the deep dive
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
