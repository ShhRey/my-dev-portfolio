import React from 'react'

const Projects = () => {
    return (
        <div id="project" className='app-showcase'>
            <div className="w-full">
                {/* Splitting into Two Sides */}
                <div className='showcase-layout'>
                    {/* Left Side: Solo Project */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/TP-proj1.png" alt="Trading Platform" />
                        </div>
                        <div className="text-content">
                            <h2>Next-gen trading made real-time & seamless</h2>
                            <p className='text-white-50 md:text-xl'>A real-time trading web platform enabling live and paper trading via Binance APIs, built with Python and MongoDB for dynamic, event-driven market updates.</p>
                        </div>
                    </div>

                    {/* Right Side: Two Projects */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className="project">
                            <div className="image-wrapper bg-[#8169C4]">
                                <img src="/images/MLM-proj3.png" alt="Marketing Platform" />
                            </div>
                            <h2>Smart referrals, Smarter networks</h2>
                        </div>

                        <div className="project">
                            <div className="image-wrapper bg-[#1E364A]">
                                <img src="/images/RN-proj2.png" alt="Movie App" />
                            </div>
                            <h2>Explore movies at your fingertips</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects