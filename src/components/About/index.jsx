import * as React from 'react'
import BrokenSerie from '../../images/brokenSerie.png'
import * as containerStyles from '../../styles/textShadow.module.css'

const About = () => {
    return (
        <section id="about">
            <img src={BrokenSerie} className="w-full opacity-25" alt="" />
            <p
                className={`${containerStyles.textShadow} text-center text-[22px] leading-[48px] px-[20px] mb-24 lg:mb-36 md:text-[30px] md:leading-[86px] md:px-[96px] lg:text-[40px] lg:leading-[96px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]`}
            >
                Participate in the first edition of the cybersecurity
                competition GDG Algiers CTF, and advance your cybersecurity
                abilities with ambitious competitors from around the world, make
                sure to mark your calendar from 7th to 9th of October.
            </p>
        </section>
    )
}

export default About
