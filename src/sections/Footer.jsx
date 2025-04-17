import React from 'react'
import { socialIcons } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            {/* Left Side of Footer */}
            <div className="flex flex-col justify-center md:items-start items-center">
                <p>Shrey Trivedi © { new Date().getFullYear() }</p>
            </div>

            {/* Center Side of Footer */}
            <div className="socials">
                {socialIcons.map((img) => {
                    <a className='icon' target="_blank" href={img.url} key={img.name}>
                        <img src={img.imgPath} alt={img.alt} />
                    </a>
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