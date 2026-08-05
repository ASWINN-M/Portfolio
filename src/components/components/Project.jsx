import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { asset } from "../../utils/asset";

const Project = ({
  title = "Default Project",
  description = "Project description",
  subDescription = [],
  href = "#",
  image = asset("assets/projects/accessories.jpg"),
  tags = [],
  status = null,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <motion.div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true, margin: "-40px" }}
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

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer text-white transition-colors hover:text-aqua"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="arrow" />
        </button>
      </motion.div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <AnimatePresence>
        {isHidden && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsHidden(false)}
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
                onClick={() => setIsHidden(false)}
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

                  {href && href !== "#" ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-aqua transition-colors hover:text-mint"
                    >
                      View Project
                      <img
                        src="assets/arrow-up.svg"
                        className="w-4 h-4"
                        alt="external"
                      />
                    </a>
                  ) : (
                    <a
                      href="#currently-building"
                      className="flex items-center gap-2 text-aqua transition-colors hover:text-mint"
                      onClick={() => setIsHidden(false)}
                    >
                      See current build notes
                    </a>
                  )}
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
