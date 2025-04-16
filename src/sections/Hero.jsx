import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import IntroModel from '../components/models/hero/IntroModel'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    // Calling useGSAP Hook for Animation
    useGSAP(() => {
        // Changing from and to positions of target elements
        gsap.fromTo('.hero-text h1',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.5, duration: 1, ease: 'power2.inOut' }
        )
    })

    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='hidden md:block absolute top-0 left-1/9 w-[14vw] h-[25vh] bg-purple-100 z-10 blur-xs'></div>
            <div className="hero-layout">
                {/* Left: Hero Content */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-2'>
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
                        <p className='text-white-50 md:text-xl relative z-10'>
                            Hi, I'm Shrey—a tech enthusiast with a passion for building impactful digital solutions.
                        </p>
                        <p className='text-white md:text-xl relative z-10'>
                            Areas of Focus:
                        </p>

                        <div className="relative z-10 md:text-lg text-base text-white-50">
                            
                            <div className="flex ml-10">
                                <ul className="space-y-3 text-left">
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 text-xl">•</span>
                                        Full Stack Development
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 text-xl">•</span>
                                        Data Analysis & Visualization
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-purple-400 text-xl">•</span>
                                        Blockchain Technology
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                            className='md:w-80 md:h-16 w-60 h-12 text-sm sm:text-base md:text-lg'
                            id='button'
                            text='More Highlights'
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
        </section>
    )
}

export default Hero