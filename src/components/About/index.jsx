import * as React from 'react'
import BrokenSerie from '../../images/brokenSerie.png'
import * as containerStyles from '../../styles/textShadow.module.css'
import Title from '../shared/Title'

const About = () => {
    return (
        <section id="about">
            <img src={BrokenSerie} className="w-full opacity-25" alt="" />
            <Title titlename="About" />
            <p
                className={`${containerStyles.textShadow} text-center text-lg leading-[48px] px-[20px] mb-24 lg:mb-36 md:text-2xl  md:leading-[86px] md:px-[96px] lg:text-3xl  lg:leading-[96px] lg:px-[164px]  2xl:text-4xl 2xl:px-[245px] 2xl:leading-[144px] font-Gilroy font-bold`}
            >
                Participate in the first edition of the cybersecurity
                competition GDG Algiers CTF, and advance your cybersecurity
                abilities with ambitious competitors from around the world, make
                sure to mark your calendar from the 7th to the 9th of October.
            </p>
        </section>
    )
}

export default About
