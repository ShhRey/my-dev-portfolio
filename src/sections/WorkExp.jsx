import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const WorkExp = () => {
  useGSAP(() => {
    // Ease Out and animate the Card
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%'
        }
      })
    })
  }, []);

  return (
    <section id='experience' className='flex-center md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title="Work Experience" sub="Journey Through My Professional Growth" />
        {/* Experience Section Cards */}
        <div className="mt-30 relative">
          {/* Timeline gradient line positioned centrally between cards */}
          <div className="absolute left-5 md:left-10 xl:left-[35.5vw] top-0 bottom-0 z-0 flex justify-center">
            <div className="gradient-line w-1 h-full" />
          </div>

          <div className='relative xl:space-y-30 space-y-10 z-10'>
            {expCards.map((card, index) => (
              <div key={card.title} className='exp-card-wrapper relative z-10'>
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index} />
                </div>

                <div className='xl: w-4/6'>
                  <div className="flex items-start">
                    <div className="exp-text flex relative xl:gap-20 md:gap-10 gap-5 z-20">
                      <div className='timeline-logo'>
                        <img src={card.logoPath} alt="logo" />
                      </div>

                      <div>
                        <h1 className='font-semibold text-3xl text-purple-50'>{card.title}</h1>
                        <p className='my-5 text-white-50'>📅 {card.date}</p>
                        <p className='text-xl italic text-yellow-100'>Responsibilities</p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white'>
                          {card.responsibilities.map((resp) => (
                            <li key={resp} className='text-base'>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExp