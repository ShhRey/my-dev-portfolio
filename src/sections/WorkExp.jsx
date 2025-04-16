import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

const WorkExp = () => {
  return (
    <section id='experience' className='flex-center md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title="Work Experience" sub="Journey Through My Professional Growth" />
        {/* Experience Section Cards */}
        <div className="mt-30 relative">
          <div className='relative xl:space-y-30 space-y-10 z-50'>
            {expCards.map((card) => (
              <div key={card.title} className='exp-card-wrapper'>
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className='flex flex-col sm:flex-row justify-between items-center text-purple-50 px-5 mb-2 gap-2 sm:gap-0'>
                      <span className='text-xl'>{card.title}</span>
                      <span className='text-xl'>{card.compName}</span>
                    </div>
                  </GlowCard>
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