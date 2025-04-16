import React from 'react'

const GlowCard = ({ card, children }) => {
    return (
        <div className='card card-border timeline-card rounded-xl p-10'>
            <div className='glow' />
            {children}
            <div className="text-white-50 text-lg mb-2">{card.review}</div>
            <div className='flex items-center gap-2 mb-2'>
                {Array.from({ length: 5 }, (_, i) => (
                    <img key={i} src="/images/star.png" alt="star" className="size-5" />
                ))}
            </div>
        </div>
    )
}

export default GlowCard