import { motion } from "motion/react";
import { asset } from "../utils/asset";

const LEETCODE_URL = "https://leetcode.com/u/weWjVE13i9/";
const NEETCODE_URL = "https://neetcode.io/user/StormSannin801";

const contributions = [
  {
    title: "Code Crux — Competitive Programming Core Member",
    description:
      "Core member of the Code Crux club at VIT-AP. Helping peers with DSA practice, contest prep, and building a stronger problem-solving culture on campus.",
    logo: asset("assets/logos/codecrux.svg"),
    logoAlt: "Code Crux",
    link: null,
    linkLabel: null,
    tags: ["DSA", "Club leadership", "Peer mentoring"],
  },
  {
    title: "LeetCode — 200+ problems solved",
    description:
      "Solved 200+ problems across arrays, trees, graphs, DP, and more. Steady practice that sharpens how I break down messy coding problems.",
    logo: asset("assets/logos/leetcode.svg"),
    logoAlt: "LeetCode",
    link: LEETCODE_URL,
    linkLabel: "View LeetCode profile",
    tags: ["200+ solved", "Algorithms", "Data structures"],
  },
  {
    title: "NeetCode — structured DSA practice",
    description:
      "Following NeetCode patterns and roadmaps to build cleaner intuition for interviews — not just grinding random questions.",
    logo: asset("assets/logos/neetcode.svg"),
    logoAlt: "NeetCode",
    link: NEETCODE_URL,
    linkLabel: "View NeetCode profile",
    tags: ["Patterns", "Interview prep", "Roadmaps"],
  },
];

const Contributions = () => {
  return (
    <section id="contributions" className="c-space section-spacing">
      <div className="max-w-3xl">
        <h2 className="text-heading">Contributions & practice</h2>
        <p className="mt-4 text-neutral-400 text-base md:text-lg">
          Outside AI projects, I stay sharp with competitive programming — as a
          Code Crux core member and through consistent LeetCode / NeetCode
          practice.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {contributions.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-2xl border border-white/10 bg-navy/40 p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={item.logo}
                alt={item.logoAlt}
                className="w-11 h-11 rounded-xl bg-white/5 p-1.5"
              />
              <h3 className="text-lg font-semibold text-white leading-snug">
                {item.title}
              </h3>
            </div>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed flex-1">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md bg-storm text-neutral-200 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-aqua hover:text-mint transition-colors text-sm font-medium"
              >
                {item.linkLabel}
                <img
                  src="assets/arrow-up.svg"
                  alt=""
                  className="w-3.5 h-3.5"
                />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Contributions;
