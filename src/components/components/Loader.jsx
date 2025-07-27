import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const {progress} = useProgress();
    return (
    <Html className='text-2xl text-center font-black-bold'>
        {progress}%Loading
    </Html>
  )
}

export default Loader