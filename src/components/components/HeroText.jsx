import React from 'react'
import { FlipWords } from '../FlipWords'
import {motion} from 'motion/react'

const HeroText = () => {
    const variants = {
        hidden : {opacity : 0 , x : -50},
        visible : {opacity : 1 , x : 0}
    };
  return (
    <div className='z-10 mt-20
    text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        <div className='flex-col hidden md:flex c-space'>
            <motion.h1 
            className='text-4xl font-medium'
            variants={variants}
            initial = 'hidden'
            animate = 'visible'
            transition={{delay : 1}}
            >Hi I'm Aswin</motion.h1>
            <div className=''>
                <motion.p 
                className='text-5xl font-medium text-neutral-300'
                variants={variants}
                initial = 'hidden'
                animate = 'visible'
                transition={{delay : 1.2}}>A Developer <br/>Dedicated to Crafting</motion.p>
                <motion.div
                variants={variants}
                initial = 'hidden'
                animate = 'visible'
                transition={{delay : 1.5}}
                ><FlipWords words = {["Secure" , "Modern" , "Scalable"]} className='font-black text-8xl text-white'/></motion.div>
                <motion.p className='text-4xl font-medium text-neutral-300'
                variants={variants}
                initial = 'hidden'
                animate = 'visible'
                transition={{delay : 1.8}}
                >Web Solutions</motion.p>

            </div>
        </div>
        <div className='flex- flex-col space-y-6 md:hidden'>
            <motion.p className='text-4xl font-medium'
                variants={variants}
                initial = 'hidden'
                animate = 'visible'
                transition={{delay : 1}}>Hi, I'm Aswin</motion.p>
            <motion.div>
                <motion.p 
                className='text-5xl font-black text-neutral-300'
                variants={variants}
                initial = 'hidden'
                animate = 'visible'
                transition={{delay : 1.2}}
                >Building</motion.p>
                <motion.div 
                variants={variants}
                initial = 'hidden'
                animate = 'visible'
                transition={{delay : 1.5}}
                ><FlipWords words = {["Secure" , "Modern" , "Scalable"]} className='font-black text-4xl text-neutral-300'/></motion.div>
                <motion.p className='text-4xl font-black text-neutral-300'
                variants={variants}
                initial = 'hidden'
                animate = 'visible'
                transition={{delay : 1.8}}
                >Web Application</motion.p>
            </motion.div>
        </div>
    </div>
  )
}

export default HeroText



