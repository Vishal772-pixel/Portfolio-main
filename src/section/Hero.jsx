import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Hackerroom from '../components/Hackerroom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HackerCamera'
import Button from '../components/Button'


const Hero = () => {

    const isMObile= useMediaQuery({maxWidth: 768});
    const isSmall = useMediaQuery({maxWidth: 440})
    const isTablet = useMediaQuery({maxWidth:768, maxWidth:1024})

    const sizes=calculateSizes(isMObile,isTablet,isSmall)

    return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
        <div className='w-full flex flex-col mx-aut0 sm:mt-36 mt-16 c-space gap-2'>
            <p className='sm:text-3xl tex-2xl font-semibold text-white text-center font-generalsans'>Hi, I am Anijeet
                <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            {/* <Leva/> */}
            <Canvas className='w-full h-full'>

                <Suspense fallback={<CanvasLoader/>} >


                <PerspectiveCamera makeDefault position={[0,0,20]} />

                <HeroCamera>
                <Hackerroom 
                scale={sizes.deskScale}
                 position={sizes.deskPosition}
                  rotation={[0,-Math.PI,0]} 
                />
                </HeroCamera>

                <group>
                    <Target position={sizes.targetPosition} />
                    <ReactLogo position={sizes.reactLogoPosition}/>
                    <Cube position={sizes.cubePosition} />
                    <Rings position={sizes.ringPosition} />
                </group>

                <ambientLight intensity={1} />
                <directionalLight intensity={0.5} position={[10,10,10]}/>
                </Suspense>
            </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero