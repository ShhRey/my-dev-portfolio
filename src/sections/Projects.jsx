import React from 'react'

const Projects = () => {
  return (
    <div id="project" className='app-showcase'>
        <div className="w-full">
            {/* Splitting into Two Sides */}
            <div className='showcase-layout'>
                {/* Left Side: Solo Project */}
                <div className="first-project-wrapper border-yellow-50 border-2">
                    <div className="image-wrapper">
                        <img src="/images/TP-proj1.png" alt="Trading Platform" />
                    </div>
                    <div className="text-content">
                        <h2>Next-gen trading made real-time & seamless</h2>
                        <p className='text-white-50 md:text-xl'>A real-time trading web platform enabling live and paper trading via Binance APIs, built with Python and MongoDB for dynamic, event-driven market updates.</p>
                    </div>
                </div>

                {/* Right Side: Two Projects */}
            </div>
        </div>
    </div>
  )
}

export default Projects