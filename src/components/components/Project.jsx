
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Project = ({
  title = "Default Project",
  description = "Project description",
  subDescription = [],
  href = "#",
  image = "/assets/default-project.jpg",
  tags = [],
  previewImage = null, 
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <motion.div 
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        <motion.div
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.p 
            className="text-2xl text-white cursor-pointer"
            whileHover={{ color: "#33c2cc" }}
          >
            {title}
          </motion.p>
          <p className="text-neutral-400 mt-2 max-w-md">{description}</p>
          <div className="flex gap-5 mt-4 text-sand">
            {tags.map((tag, index) => (
              <motion.span 
                key={tag.id} 
                className="px-2 py-1 bg-neutral-800 rounded text-sm cursor-pointer"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#282b4b",
                  color: "#33c2cc" 
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer text-white transition-colors"
          whileHover={{ 
            scale: 1.05,
            color: "#33c2cc",
            x: 5
          }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
          <motion.img 
            src="assets/arrow-right.svg" 
            className="w-5" 
            alt="arrow"
            whileHover={{ x: 3 }}
          />
        </motion.button>

        {/* Hover Preview Card */}
        <AnimatePresence>
          {showPreview && (previewImage || href !== "#") && (
            <motion.div
              className="fixed z-40 pointer-events-none"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 100,
              }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-midnight border border-white/20 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="relative w-80 h-48">
                  {previewImage ? (
                    <img 
                      src={previewImage} 
                      alt={`${title} preview`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-storm to-indigo flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                          </svg>
                        </div>
                        <p className="text-white text-sm font-medium">{title}</p>
                        <p className="text-white/60 text-xs mt-1">Live Preview</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-sm font-medium truncate">{title}</p>
                      <div className="flex gap-1 mt-1">
                        {tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag.id}
                            className="px-1.5 py-0.5 bg-white/20 rounded text-xs text-white"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Live indicator */}
                  {href !== "#" && (
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs font-medium">Live</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setIsHidden(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full transition-colors"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(0,0,0,0.8)",
                  rotate: 90 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="assets/close.svg" className="w-6 h-6" alt="close" />
              </motion.button>
              
              <motion.img 
                src={image} 
                alt={title} 
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {title}
                </motion.h3>
                
                <motion.p 
                  className="text-neutral-400 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {description}
                </motion.p>
                
                {subDescription.length > 0 && (
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {subDescription.map((desc, index) => (
                      <motion.p 
                        key={index} 
                        className="text-neutral-400 mb-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        • {desc}
                      </motion.p>
                    ))}
                  </motion.div>
                )}
                
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex gap-3">
                    {tags.map((tag, index) => (
                      <motion.img
                        key={tag.id}
                        src={tag.path}
                        alt={tag.name}
                        className="w-8 h-8 rounded transition-transform"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 5,
                          filter: "brightness(1.2)" 
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      />
                    ))}
                  </div>
                  
                  {href && href !== "#" && (
                    <motion.a 
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-aqua transition-colors"
                      whileHover={{ 
                        color: "#57db96",
                        x: 5
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                      <motion.img 
                        src="assets/arrow-up.svg" 
                        className="w-4 h-4" 
                        alt="external"
                        whileHover={{ y: -2, x: 2 }}
                      />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
