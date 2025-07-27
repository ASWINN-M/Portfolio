import React from 'react'
import Card from '../components/components/Card'
import { Globe } from '../components/components/Globe';

const About = () => {
  const grid2Container = React.useRef();
  return (
    <section className='c-space section-spacing'>
        <h2 className='text-heading'>About Me</h2>
        <div className = 'grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/* Grid-1*/}
            <div className='flex items-end grid-default-color grid-1'>
              <img src='assets/coding-pov.png' className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] '></img>
              <div className='z-10'>
                <p className='headtext text-2xl md:text-4xl text-shadow-black'>Hi I'm Aswin</p>
                <p className='text-sm md:text-base subtext'>I'm a Machine Learning enthusiast <br/>with hands-on experience training various models <br/>on Kaggle. I'm currently researching <br/>Multilingual OCR and Translation using NLP and Computer Vision.</p>
                <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'></div>
              </div>
            </div>
            {/* Grid-2*/}
            <div className='grid-default-color grid-2'>
              <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500 position-relative  '>
                  DEBBUGING 
                  <Card text={'Grasp'} style={{rotate : '75deg' , top : '30%' , left : '20%'}}
                  containerRef={grid2Container}
                  />
                  <Card text={'Design Patterns'} style={{rotate : '-30deg' , top : '60%' , left : '45%'}}
                  containerRef={grid2Container}
                  />
                  <Card text={'SOLID'} style={{rotate : '90deg' , bottom : '30%' , left : '70%'}} 
                  containerRef={grid2Container}
                  />
                  <Card text={'Design Principles'} style={{rotate : '-45deg' , top : '55%' , left : '0%'}}
                  containerRef={grid2Container}
                  />
                  <Card text={'SRP'} style={{rotate : '20deg' , top : '10%' , left : '38%'}}
                  containerRef={grid2Container}
                  />
                  <Card style={{rotate : '30deg' , top : '70%' , left : '70%'}}
                  image={'assets/logos/python-logo-only.png'}
                  containerRef={grid2Container}
                  />
                  <Card style={{rotate : '30deg' , top : '50%' , left : '25%'}}
                  image={'assets/logos/github.svg'}
                  containerRef={grid2Container}
                  />
                  <Card style={{rotate : '-30deg' , top : '20%' , left : '35%'}}
                  image={'assets/logos/cplusplus.svg'}
                  containerRef={grid2Container}
                  />
                  <Card style={{rotate : '10deg' , top : '30%' , left : '60%'}}
                  image={'assets/logos/deep-learning.png'}
                  containerRef={grid2Container}
                  />
                  <Card
                  style={{rotate : '30deg' , top : '70%' , left : '10%'}}
                  image={'assets/logos/tailwindcss.svg'}
                  containerRef={grid2Container}
                  />
                  <Card
                  style={{rotate : '0deg' , top : '70%' , left : '40%'}}
                  image={'assets/logos/react.svg'}
                  containerRef={grid2Container}
                  />
                  <Card
                  style={{rotate : '0deg' , top : '15%' , left : '85%'}}
                  image={'assets/logos/vitejs.svg'}
                  containerRef={grid2Container}
                  />
                  <Card style={{rotate : '0deg' , top : '20%' , left : '0%'}}
                  image={'assets/logos/html5.svg'}
                  containerRef={grid2Container}
                  />
                  <Card style={{rotate : '10deg' , top : '10%' , left : '20%'}}
                  image={'assets/logos/css3.svg'}
                  containerRef={grid2Container}
                  />
                </p>
              </div>
            </div>
            {/* Grid-3*/}
            <div className='grid-black-color grid-3'>
              <div className='z-10 w-[50%]'>
                <p className='headtext'>Time Zone</p>
                <p className='subtext'>I'm based in India, and open to remote work worldwide</p>
                <figure className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                  <Globe/>

                </figure>
              </div>
            </div>
            {/* Grid-4*/}
            <div className='grid-violet-color grid-4'></div>
            {/* Grid-5*/}
            <div className='grid-default-color grid-5'></div>
        </div>
    </section>
  )
}

export default About
