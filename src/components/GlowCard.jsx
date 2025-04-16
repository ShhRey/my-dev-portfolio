import React, { useRef } from 'react'

const GlowCard = ({ card, children, index }) => {
    const cardRefs = useRef([]);

    // Move Border around Mouse Position (card) => (event)
    const handleMouseMovement = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        // Get Position of Mouse
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // Calculating angle from Center of Card using atan2
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        card.style.setProperty('--start', angle + 60)
    }
    return (
        <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMovement(index)} className='card card-border timeline-card rounded-xl p-10'>
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