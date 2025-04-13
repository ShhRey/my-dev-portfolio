import React from 'react'
import { words } from '../constants'

const Hero = () => {
    return (
        <section id='hero' className='relative overflow-hidden'>
            {/* Random Shapes */}
            <div className='absolute top-0 left-30 w-[240px] h-[270px] bg-purple-100 z-10'></div>
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
                            <h1>To Life</h1>
                        </div>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                            Hi, I'm Shrey—a tech enthusiast with a passion for building impactful digital solutions.
                        </p>
                    </div>
                </header>
                {/* Right: 3D-Model */}
            </div>
        </section>
    )
}

export default Hero