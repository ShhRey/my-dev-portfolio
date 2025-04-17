import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader';

// Importing GSAP Plugins for Animation
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const proj1Ref = useRef(null);
    const proj2Ref = useRef(null);
    const proj3Ref = useRef(null);


    // Runs when the component is Mounted
    useGSAP(() => {
        const projects = [proj1Ref.current, proj2Ref.current, proj3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: { trigger: card, start: 'top bottom-=100' } },
            )
        })

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, []);

    return (
        <section id="project" className='app-showcase section-padding' ref={sectionRef}>
            <div className="w-full">
                {/* <TitleHeader title="Projects" sub="Command Lines became Real-world Solutions." /> */}
                {/* Splitting into Two Sides */}
                <div className='showcase-layout'>
                    {/* Left Side: Solo Project */}
                    <div className="first-project-wrapper" ref={proj1Ref}>
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
                        <div className="project" ref={proj2Ref}>
                            <div className="image-wrapper bg-[#876FD8]">
                                <img src="/images/MLM-proj3.png" alt="Marketing Platform" />
                            </div>
                            <h2>Smart referrals, Smarter networks</h2>
                        </div>

                        <div className="project" ref={proj3Ref}>
                            <div className="image-wrapper bg-[#1E364A]">
                                <img src="/images/RN-proj2.png" alt="Movie App" />
                            </div>
                            <h2>Explore movies at your fingertips</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects