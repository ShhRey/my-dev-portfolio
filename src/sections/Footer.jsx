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
                    {socialIcons.map((img) => (
                        <a
                            className={`icon bg-neutral-800`}
                            href={img.url}
                            key={img.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={img.imgPath} alt={img.alt} className="w-5 md:w-6 h-5 md:h-6 object-contain" />
                        </a>
                    ))}
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