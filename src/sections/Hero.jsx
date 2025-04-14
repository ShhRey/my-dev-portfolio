import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import IntroModel from '../components/models/hero/IntroModel'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'

const Hero = () => {
    // Calling useGSAP Hook for Animation
    useGSAP(() => {
        // Changing from and to positions of target elements
        gsap.fromTo('.hero-text h1',
            { y: 50, opacity: 0 },
            { y:0 , opacity: 1, stagger: 0.5, duration: 1, ease: 'power2.inOut' }
        )
    })

    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='hidden md:block absolute top-0 left-1/9 w-[13vw] h-[25vh] bg-purple-100 z-10 blur-xs'></div>
            <div className="hero-layout">
                {/* Left: Hero Content */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>
                                Bringing
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img
                                                    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-purple-50'
                                                    src={word.imgPath} alt={word.text}
                                                />
                                                <span className='text-purple-50'>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Into Reality</h1>
                        </div>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                            Hi, I'm Shrey—a tech enthusiast with a passion for building impactful digital solutions.
                        </p>
                        <Button
                            className='md:w-80 md:h-16 w-60 h-12'
                            id='button'
                            text='See My Work'
                        />
                    </div>
                </header>

                {/* Right: 3D-Model */}
                <figure>
                    <div className="hero-3d-layout">
                        <IntroModel />
                    </div>
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    )
}

export default Hero