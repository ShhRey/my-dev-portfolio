import React from 'react'

const Projects = () => {
    return (
        <div id="project" className='app-showcase'>
            <div className="w-full">
                {/* Splitting into Two Sides */}
                <div className='showcase-layout'>
                    {/* Left Side: Solo Project */}
                    <div className="first-project-wrapper proj-gradient-border">
                        <div className="image-wrapper">
                            <img src="/images/TP-proj1.png" alt="Trading Platform" />
                        </div>
                        <div className="text-content">
                            <h2>Next-gen trading made real-time & seamless</h2>
                            <p className='text-white-50 md:text-xl'>A real-time trading web platform enabling live and paper trading via Binance APIs, built with Python and MongoDB for dynamic, event-driven market updates.</p>
                        </div>
                    </div>

                    {/* Right Side: Two Projects */}
                    <div className='project-list-wrapper overflow-hidden proj-gradient-border'>
                        <div className="project">
                            <div className="image-wrapper bg-[#8169C4]">
                                <img src="/images/MLM-proj3.png" alt="Marketing Platform" />
                            </div>
                            <div className="text-content">
                                <h2>Smart referrals, Smarter networks</h2>
                                <p className='text-white-50 md:text-xl'>A Django-React based Multi-Level Marketing platform featuring hierarchical dashboards, referral tracking, and admin/user portals.</p>
                            </div>
                        </div>

                        <div className="project mt-10">
                            <div className="image-wrapper bg-[#1E364A]">
                                <img src="/images/RN-proj2.png" alt="Movie App" />
                            </div>
                            <div className="text-content">
                                <h2>Explore movies at your fingertips</h2>
                                <p className='text-white-50 md:text-xl'>A cross-platform mobile app built with React Native and TypeScript that fetches and displays movies from the TMDB API using debounced search and intuitive tab navigation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects