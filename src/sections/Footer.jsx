import React from 'react'
import { socialIcons } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                {/* Left Side of Footer */}
                <div className="flex flex-col justify-center md:items-start items-center">
                    <p>Shrey Trivedi © {new Date().getFullYear()}</p>
                </div>

                {/* Center Side of Footer */}
                <div className="socials">
                    {socialIcons.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                href={item.url}
                                key={item.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`icon text-white ${item.hoverColor} text-xl md:text-2xl`}
                            >
                                <Icon />
                            </a>
                        );
                    })}
                </div>

                {/* Right Side of Footer */}
                <div className="flex flex-col justify-center">
                    <p className='text-center md:text-end'>
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer