
import { Astronaut } from "../components/components/Astronaut"
import { Canvas } from "@react-three/fiber"
import HeroText from "../components/components/HeroText"
import ParallexBackground from "../components/components/ParallexBackground"
import { Float, OrbitControls } from "@react-three/drei"
import {useMediaQuery} from "react-responsive"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { Suspense } from "react"
import Loader from "../components/components/Loader"



const Hero = () => {
  const isMobile = useMediaQuery({maxWidth : 853});
  return (
    <section className="flex items-start justify-center 
    md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParallexBackground/>
        <figure className="absolute inset-0 "
        style={{width: '100vw' , height: '100vh'}}
        >
         <Canvas camera={{postion : [0 , 1, 3]}}>
          <Suspense fallback = {<Loader/>}>
          <Float>
          <Astronaut scale={isMobile && 0.23} position = {isMobile && [0 , -1.5 , 0]}/>
          </Float>
          <OrbitControls/>
          <Rig/>
          </Suspense>
         </Canvas>
        </figure>
    </section>
  )
}


function Rig(){
  return useFrame((state , delta) => {
    easing.damp3(state.camera.position , [state.mouse.x / 5 , 1 + state.mouse.y/5 , 3] , 0.5 , delta)
  })
}

export default Hero




