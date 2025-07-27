import { motion , transform, useScroll, useSpring, useTransform } from 'motion/react'
import React from 'react'

const ParallexBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress , {damping : 25})
    const mountain3Y = useTransform(x , [0 , 0.5] , ['0%' , '70%']);
    const mountain2Y = useTransform(x ,  [0 , 0.5] , ['0%' , '30%']);
    const mountain1Y = useTransform(x , [0 , 0.5] , ['0%' , '0%']);
    const planetsX = useTransform(x ,  [0 , 0.5] , ['0%' , '-20%']);
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            {/* Background */}
            <div className='absolute inset-0 h-screen w-full -z-50'
            style={{
                backgroundImage:'url(/assets/sky.jpg)',
                backgroundPosition: 'bottom',
                backgroundSize : 'cover'
            }}
            />
            {/* Mountain_3 */}
            <motion.div className='absolute inset-0 h-screen w-full -z-50'
            style={{
                backgroundImage:'url(/assets/mountain-3.png)',
                backgroundPosition: 'bottom',
                backgroundSize : 'cover',
                y:mountain3Y,
            }}/>
            {/* Planets */}
            <motion.div className='absolute inset-0 h-screen w-full -z-50'
            style={{
                backgroundImage:'url(/assets/planets.png)',
                backgroundPosition: 'bottom',
                backgroundSize : 'cover',
                x:planetsX
            }}/>
            {/* mountain_2 */}
            <motion.div className='absolute inset-0 h-screen w-full -z-50'
            style={{
                backgroundImage:'url(/assets/mountain-2.png)',
                backgroundPosition: 'bottom',
                backgroundSize : 'cover',
                y:mountain2Y
            }}/>
            {/* mountain_1 */}
            <motion.div className='absolute inset-0 h-screen w-full -z-50'
            style={{
                backgroundImage:'url(/assets/mountain-1.png)',
                backgroundPosition: 'bottom',
                backgroundSize : 'cover',
                y : mountain1Y
            }}/>
        </div>
    </section>
  )
}

export default ParallexBackground