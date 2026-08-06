import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { asset } from "../../utils/asset";

const githubOpenGraph = (href) => {
  if (!href) return null;
  try {
    const url = new URL(href);
    if (!url.hostname.includes("github.com")) return null;
    const [, owner, repo] = url.pathname.split("/");
    if (!owner || !repo) return null;
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return null;
  }
};

const Project = ({
  title = "Default Project",
  description = "Project description",
  subDescription = [],
  href = "#",
  image = asset("assets/projects/accessories.jpg"),
  tags = [],
  status = null,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hasRepo = Boolean(href && href !== "#");
  const ogImage = useMemo(() => githubOpenGraph(href), [href]);
  const previewSrc = ogImage || image;

  return (
    <>
      <motion.div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true, margin: "-40px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-2xl text-white">{title}</p>
            {status && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-md border border-aqua/40 text-aqua bg-aqua/10">
                {status}
              </span>
            )}
          </div>
          <p className="text-neutral-400 mt-2 max-w-md">{description}</p>
          <div className="flex flex-wrap gap-3 mt-4 text-sand">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 bg-neutral-800 rounded text-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {hasRepo ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 cursor-pointer text-white transition-colors hover:text-aqua"
          >
            GitHub Link
            <img src="assets/arrow-up.svg" className="w-4" alt="" />
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="flex items-center gap-1 cursor-pointer text-white transition-colors hover:text-aqua"
          >
            View notes
            <img src="assets/arrow-right.svg" className="w-5" alt="" />
          </button>
        )}

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="hidden md:block pointer-events-none absolute z-30 right-28 lg:right-36 top-1/2 -translate-y-1/2 w-[20rem] max-w-[42vw]"
              initial={{ opacity: 0, x: 16, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.96 }}
              transition={{ duration: 0.18 }}
            >
              <div className="rounded-xl border border-white/15 bg-midnight/95 shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-black/30">
                  <img
                    src={asset("assets/logos/github.svg")}
                    alt=""
                    className="w-4 h-4 opacity-80"
                  />
                  <span className="text-xs text-neutral-300 truncate">
                    {hasRepo
                      ? href.replace("https://github.com/", "")
                      : title}
                  </span>
                </div>
                <img
                  src={previewSrc}
                  alt={`${title} GitHub preview`}
                  className="w-full aspect-[2/1] object-cover bg-storm"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              className="relative max-w-2xl mx-4 bg-midnight border border-white/10 rounded-2xl overflow-hidden"
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full transition-colors hover:bg-black/80"
              >
                <img src="assets/close.svg" className="w-6 h-6" alt="close" />
              </button>

              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  {status && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md border border-aqua/40 text-aqua bg-aqua/10">
                      {status}
                    </span>
                  )}
                </div>

                <p className="text-neutral-400 mb-4">{description}</p>

                {subDescription.length > 0 && (
                  <div className="mb-4">
                    {subDescription.map((desc, index) => (
                      <p key={index} className="text-neutral-400 mb-2 text-sm">
                        • {desc}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex gap-3">
                    {tags.map((tag) => (
                      <img
                        key={tag.id}
                        src={tag.path}
                        alt={tag.name}
                        className="w-8 h-8 rounded"
                        loading="lazy"
                      />
                    ))}
                  </div>

                  <a
                    href="#currently-building"
                    className="flex items-center gap-2 text-aqua transition-colors hover:text-mint"
                    onClick={() => setShowDetails(false)}
                  >
                    See current build notes
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
