import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/models/logos/TechIcon'

const Skills = () => {
  return (
    <section id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title="Dev Kit" sub= "Crafted for Years, Sharpened through Projects" />
            <div className="tech-grid">
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon model={icon} />
                            </div>

                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills