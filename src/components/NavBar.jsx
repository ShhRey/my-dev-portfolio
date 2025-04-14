import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header className='navbar'>
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