import { motion } from "motion/react";

const STAT_STRINGS = [
  {
    label: "GitHub stats (commits, streak inputs)",
    url: "https://github-readme-stats.vercel.app/api?username=ASWINN-M&show_icons=true&theme=radical&hide_border=true&count_private=true&include_all_commits=true",
  },
  {
    label: "Commit streak",
    url: "https://github-readme-streak-stats.herokuapp.com/?user=ASWINN-M&theme=radical&hide_border=true",
  },
  {
    label: "Top languages",
    url: "https://github-readme-stats.vercel.app/api/top-langs/?username=ASWINN-M&layout=compact&theme=radical&hide_border=true&langs_count=8",
  },
];

const GitActivity = () => {
  return (
    <section id="activity" className="c-space section-spacing">
      <motion.h2
        className="text-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        GitHub commits &amp; activity
      </motion.h2>
      <p className="mt-3 max-w-2xl text-neutral-400">
        Live SVG widgets that pull my commit activity from GitHub — same web
        strings used on my profile README.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.a
          href="https://github.com/ASWINN-M"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/10 bg-navy/60 p-3 overflow-hidden hover:border-aqua/40 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <img
            src={STAT_STRINGS[0].url}
            alt="ASWINN-M GitHub stats"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.a>

        <motion.a
          href="https://github.com/ASWINN-M"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/10 bg-navy/60 p-3 overflow-hidden hover:border-aqua/40 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <img
            src={STAT_STRINGS[1].url}
            alt="ASWINN-M streak stats"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.a>
      </div>

      <motion.div
        className="mt-6 max-w-xl rounded-xl border border-white/10 bg-navy/60 p-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        <img
          src={STAT_STRINGS[2].url}
          alt="Top languages"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="mt-8 rounded-xl border border-white/10 bg-midnight/80 p-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <p className="text-sm uppercase tracking-[0.18em] text-aqua/80 mb-3">
          Web strings (copy into README)
        </p>
        <ul className="space-y-3">
          {STAT_STRINGS.map((item) => (
            <li key={item.label}>
              <p className="text-xs text-neutral-400 mb-1">{item.label}</p>
              <code className="block break-all rounded-md bg-black/40 px-3 py-2 text-[11px] md:text-xs text-mint/90 border border-white/5">
                {item.url}
              </code>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default GitActivity;
