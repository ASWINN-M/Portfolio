import { motion } from "motion/react";
import { projectDeepDives } from "../Constant";

const ProjectDetails = () => {
  return (
    <section id="project-details" className="c-space section-spacing">
      <div className="max-w-3xl">
        <h2 className="text-heading">More about the projects</h2>
        <p className="mt-4 text-neutral-400 text-base md:text-lg">
          Here's the short story behind each one — what I was trying to fix, how
          I built it, and what I got out of it.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {projectDeepDives.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-navy/40 p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-aqua text-sm font-medium tracking-wide">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sand text-sm font-semibold uppercase tracking-wider mb-2">
                  What I was stuck on
                </p>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="text-sand text-sm font-semibold uppercase tracking-wider mb-2">
                  What I tried
                </p>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {project.approach}
                </p>
              </div>
              <div>
                <p className="text-sand text-sm font-semibold uppercase tracking-wider mb-2">
                  What came out of it
                </p>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs rounded-md bg-storm text-neutral-200 border border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
