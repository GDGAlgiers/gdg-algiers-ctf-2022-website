import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Navbar from '../NavBar'
import CounterContainer from './CounterContainer'
import * as containerStyles from '../../styles/textShadow.module.css'

const Hero = () => {
    const data = useStaticQuery(graphql`
        query HeroImage {
            file(relativePath: { eq: "hero-img.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <section id="home">
            <Navbar />
            <div className="py-[96px] pl-[39px] pr-[39px] lg:py-[121px] lg:pl-[66px] lg:pr-[0]">
                <div className="flex flex-col gap-[96px] lg:gap-[64px] lg:flex-row">
                    <div className="order-last lg:order-first flex flex-col gap-[48px] lg:flex-1 lg:gap-[56px] 2xl:gap-[82px]">
                        <h1
                            className={`${containerStyles.textShadow} text-white-lighter text-[40px] text-center lg:text-left lg:text-[68px] 2xl:text-[104px] 2xl:font-extrabold lg:leading-[96px] 2xl:leading-[144px]`}
                        >
                            READY TO START CAPTURING <br /> FLAGS ?
                        </h1>
                        <div className="text-center lg:text-left">
                            <a
                                href="https://ctftime.org/event/1745"
                                type="button"
                                target="__blank"
                                className="inline-block rounded-[7px] border border-gdg-ctf-red py-[21px] px-[82px] lg:px-[63px] lg:text-lg 2xl:py-[31px] 2xl:px-[94px] 2xl:text-[28px] overflow-hidden relative group"
                            >
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gdg-ctf-red top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
                                <span className="relative transition duration-300 text-gdg-ctf-red group-hover:text-white-lighter ease">
                                    JOIN US
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="lg:flex-1">
                        <Img
                            fluid={data.file.childImageSharp.fluid}
                            alt="GDG Algiers CTF22"
                        />
                    </div>
                </div>
            </div>
            <div className="md:px-[184px] lg:px-[241px] 2xl:px-[361px]">
                <div className="flex flex-col justify-between items-center gap-[48px] lg:flex-row ">
                    <CounterContainer countDownLimit={1665158400000} />
                </div>
            </div>
        </section>
    )
}

export default Hero
