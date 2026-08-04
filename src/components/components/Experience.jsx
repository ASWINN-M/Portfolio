import React from 'react'
import { Timeline } from './TimeLine'
import { experiences } from '../../Constant/experiences'

const Experience = () => {
  return (
    <div id='experience' className='c-space section-spacing'>
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
          My Experience
        </h2>
      </div>
      <Timeline data={experiences}/>
    </div>
  )
}

export default Experience