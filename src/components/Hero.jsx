import React, { useEffect, useRef } from 'react'
import Card from './Card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const carRef = useRef(null);

    



    return (
        <div className=' bg-gray-200 h-screen relative '>
            <Card
                id="card1"
                percent="53%"
                color="bg-amber-400"
                para="Increase in pickup point use"
                top="20" right="right-[30%]"
            />

            <Card id="card2"
                percent="72%"
                color="bg-blue-400"
                para="Increase in pickup point use"
                top="20"
                right="right-[10%]"
            />
            <div className=' overflow-hidden bg-gray-950 w-full h-48 flex justify-start  items-center gap-5 text-white absolute top-72 '>
                <img ref={carRef} className='absolute  h-full object-contain left-0' src="https://paraschaturvedi.github.io/car-scroll-animation/McLaren%20720S%202022%20top%20view.png" alt="Car.png" />
                <div className='flex gap-5 ml-16'>
                    <span className='text-8xl font-bold'>W</span>
                    <span className='text-8xl font-bold'>E</span>
                    <span className='text-8xl font-bold'>L</span>
                    <span className='text-8xl font-bold'>C</span>
                    <span className='text-8xl font-bold'>O</span>
                    <span className='text-8xl font-bold'>M</span>
                    <span className='text-8xl font-bold'>E</span>
                </div>
                <div className='flex gap-5 ml-12 '>
                    <span className='text-8xl font-bold'>I</span>
                    <span className='text-8xl font-bold'>T</span>
                    <span className='text-8xl font-bold'>Z</span>
                    <span className='text-8xl font-bold'>F</span>
                    <span className='text-8xl font-bold'>I</span>
                    <span className='text-8xl font-bold'>Z</span>
                    <span className='text-8xl font-bold'>Z</span>
                </div>
            </div>
            <Card
                id="card3"
                percent="23%"
                color="bg-red-400"
                para="Decrease in
                pickup point use"
                right="right-[35%]"
            />

            <Card
                id="card4"
                percent="44%"
                color="bg-gray-400"
                para="Decrease in pickup point use"
                right="right-[12.5%]"
            />
        </div>
    )
}

export default Hero