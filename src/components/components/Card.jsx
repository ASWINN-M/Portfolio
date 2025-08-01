import React from 'react'
import {motion} from 'motion/react'

const Card = ({ style , text , image , containerRef }) => {

  return image && !text ? (
    <motion.img src={image} className='absolute w-15 cursor-grab' 
    style={style}
    whileHover = {{scale : 1.05}}
    drag
    dragConstraints={containerRef}
    dragElastic={0.5}
    ></motion.img>
  ) : (
    <motion.div className='px-6 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab absolute'
    style={style}
    whileHover = {{scale : 1.05}}
    drag
    dragConstraints={containerRef}
    dragElastic={0.5}
    >
      {text}
    </motion.div>
  )
}

export default Card
