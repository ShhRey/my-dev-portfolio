import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    // Create state to handle NavBar Background
    const [scrolled, setScrolled] = useState(false);

    // Handle changes according to Scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 30;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                {/* DevName to return to Top */}
                <a className='logo' href="#hero">Shrey Trivedi</a>
                {/* Appear Only in Desktop Screen */}
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ name, link }) => (
                            <li className='group' key={name}>
                                <a href={link}>
                                    <span style={{ textTransform: 'uppercase' }}>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Redirect to Contact Section */}
                <a href="#contact" className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar