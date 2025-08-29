import React from 'react'
import Card from '../components/components/Card'
import { Globe } from '../components/components/Globe';
import CopyEmailButton from '../components/components/CopyEmailButton';
import { Frameworks } from '../components/components/FrameWork';

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
               <div className="p-6 text-left bg-black/15 border border-white/7 rounded-lg shadow-lg">
                  <p className="text-2xl font-semibold mb-2 text-white">Course Undertaken</p>
                  <ol className="list-decimal pl-5 space-y-2 text-white">
                    <li>
                      Machine Learning by <b>DeepLearning AI</b>
                    </li>
                    <li>FullStack Development in Udemy</li>
                    <li>
                      Python from <b>Michigan University</b> in Coursera
                    </li>
                    <li>
                      Scikit-Learn from <b>FreeCodeCamp</b>
                    </li>
                  </ol>
                </div>


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
            <div className='grid-special-color grid-4'>
              <div className='flex flex-col items-center justify-center gap-4 size-full'>
                <p className='text-center headtext'>
                  Are you Ready to Explore the World with me?
                  <CopyEmailButton/>
                </p>
              </div>
            </div>
            {/* Grid-5*/}
            <div className='grid-default-color grid-5'>
              <div className='z-10 w-[50%] text-2xl'>
                <p className='headtext'>Tech Stack</p>
                <p className='subtext h-1 left-0'>I specialize in a variety of <br/>languages, frameworks, and tools that allow me to build robust an d scalable applications</p>
              <div/>
                <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                  <Frameworks/>
                </div>  
                <div/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About
