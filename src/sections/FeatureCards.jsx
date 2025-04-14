import React from 'react'
import { abilities } from '../constants'
import AnimatedCounter from '../components/AnimatedCounter'

const FeatureCards = () => {
    return (
        <>
            {/* Rendering Animated Counters */}
            <AnimatedCounter />

            {/* Creating Feature Cards */}
            <div className="w-full padding-x-lg">
                <div className="mx-auto grid-3-cols">
                    {/* Mapping Abilities from Constants */}
                    {abilities.map(({ imgPath, title, desc }) => (
                        <div
                            key={title}
                            className="flex flex-col gap-3 items-center card-border bg-black-100 rounded-xl p-8 mt-5"
                        >
                            <div className="flex items-center justify-center gap-3">
                                <div className="size-14 flex items-center justify-center rounded-full">
                                    <img src={imgPath} alt={title} />
                                </div>
                                <h3 className="text-white text-2xl font-semibold">{title}</h3>
                            </div>
                            <p className="text-white-50 text-lg">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeatureCards