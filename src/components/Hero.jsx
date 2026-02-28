import React, { useRef } from 'react'
import Card from './Card'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const carRef = useRef(null)
    const heroRef = useRef(null)
    const stickyRef = useRef(null)
    const greenFillRef = useRef(null)
    const lettersRef = useRef([])
    const card1Ref = useRef(null)
    const card2Ref = useRef(null)
    const card3Ref = useRef(null)
    const card4Ref = useRef(null)

    useGSAP(() => {

        gsap.from(lettersRef.current, {
            y: 80,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.05,
        })

        gsap.set(
            [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current],
            { opacity: 0, y: 50 }
        )

        const st = {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
        }


        gsap.fromTo(
            carRef.current,
            { x: -300 },
            { x: '110vw', ease: 'none', scrollTrigger: st }
        )


        gsap.fromTo(
            greenFillRef.current,
            { width: '0%' },
            { width: '100%', ease: 'none', scrollTrigger: st }
        )



        const cardTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: '50% bottom',
                end: 'bottom bottom',
                scrub: 1.2,
            }
        })

            ;[card1Ref, card2Ref, card3Ref, card4Ref].forEach((ref, i) => {
                cardTimeline.to(
                    ref.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                    },
                    i * 0.3
                )
            })
    })

    const addLetter = (el) => {
        if (el && !lettersRef.current.includes(el)) lettersRef.current.push(el)
    }

    const letters1 = ['W', 'E', 'L', 'C', 'O', 'M', 'E']
    const letters2 = ['I', 'T', 'Z', 'F', 'I', 'Z', 'Z']

    return (
        <div ref={heroRef} className='h-[200vh]'>

            <div
                ref={stickyRef}
                className='sticky top-0 h-screen overflow-hidden bg-gray-200'
            >

                <Card
                    ref={card1Ref}
                    id="card1"
                    percent="53%"
                    color="bg-amber-400"
                    para="Increase in pickup point use"
                    position="top-[5%]"
                    right="right-[32%]"
                />
                <Card
                    ref={card2Ref}
                    id="card2"
                    percent="72%"
                    color="bg-blue-400"
                    para="Increase in pickup point use"
                    position="top-[5%]"
                    right="right-[8%]"
                />


                <div className='w-full h-44 flex justify-start items-center gap-5 absolute top-[38%] overflow-hidden bg-gray-950'>



                    <div
                        ref={greenFillRef}
                        className='absolute left-0 top-0 h-full bg-green-600'
                        style={{ width: '0%', zIndex: 0 }}
                    />


                    <img
                        ref={carRef}
                        className='absolute h-full object-contain'
                        style={{ left: 0, zIndex: 10 }}
                        src="https://paraschaturvedi.github.io/car-scroll-animation/McLaren%20720S%202022%20top%20view.png"
                        alt="McLaren car top view"
                    />

                    <div className='flex gap-5 ml-16 relative' style={{ zIndex: 20 }}>
                        {letters1.map((l, i) => (
                            <span key={i} ref={addLetter} className='text-8xl font-bold select-none'>{l}</span>
                        ))}
                    </div>
                    <div className='flex gap-5 ml-12 relative' style={{ zIndex: 20 }}>
                        {letters2.map((l, i) => (
                            <span key={i} ref={addLetter} className='text-8xl font-bold select-none'>{l}</span>
                        ))}
                    </div>
                </div>


                <Card
                    ref={card3Ref}
                    id="card3"
                    percent="23%"
                    color="bg-red-400"
                    para="Decrease in pickup point use"
                    position="top-[65%]"
                    right="right-[32%]"
                />
                <Card
                    ref={card4Ref}
                    id="card4"
                    percent="44%"
                    color="bg-gray-400"
                    para="Decrease in pickup point use"
                    position="top-[65%]"
                    right="right-[8%]"
                />
            </div>
        </div>
    )
}

export default Hero