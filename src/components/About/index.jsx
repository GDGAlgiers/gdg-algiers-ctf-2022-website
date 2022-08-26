import * as React from 'react'
import BrokenSerie from '../../images/brokenSerie.png'
import * as containerStyles from '../../styles/textShadow.module.css'

const About = () => {
    return (
        <section id="about">
            <img src={BrokenSerie} className="w-full opacity-25" alt="" />
            <p
                className={`${containerStyles.textShadow} text-center text-[22px] leading-[48px] px-[20px] md:text-[30px] md:leading-[86px] md:px-[96px] lg:text-[40px] lg:leading-[96px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]`}
            >
                thank to this wonderful community, I&apos;m so excited to work
                and share new leads projects, and ambitions... whether I&apos;m
                a UX UI comanager or not, GDG will remain my family and
                we&apos;ll do a lot of cool things that matter
            </p>
        </section>
    )
}

export default About
