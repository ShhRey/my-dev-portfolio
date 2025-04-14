import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
    return (
        <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div
                        key={item.label}
                        className='flex justify-center items-center bg-zinc-900 rounded-lg p-5 h-32'
                    >
                        <div className='flex items-center gap-6'>
                            <span className='text-white text-5xl font-bold flex items-center'>
                                <CountUp end={item.value} />
                                <span>{item.suffix}</span>
                            </span>
                            <span className='text-white-50 text-2xl font-semibold'>{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default AnimatedCounter