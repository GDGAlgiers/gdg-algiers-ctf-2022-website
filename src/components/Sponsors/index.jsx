import * as React from 'react'
import gcp from '../../images/gcp-logo.png'
import rootMe from '../../images/rootme.svg'
import digitalOcean from '../../images/digital-ocean.png'
import pentesterLab from '../../images/pentesterlab.png'
import Title from '../shared/Title'
import Description from '../shared/Description'
import Wall from '../../images/wall_footer.png'

const Sponsors = () => {
    return (
        <section id="sponsors">
            <div className="flex justify-center mb-12">
                <img src={Wall} alt="Wall" className=" w-full h-64" />
            </div>
            <Title titlename="Sponsors" />
            <Description
                paragraph="
             The CTF was not possible without the contribution of our amzing sponsors. 
             Thanks for Google for sponsoring the CTF infrastructure, 
             Thanks also to Digital Ocean, PentesterLab and Root-Me for sponsoring the prizes of the CTF                 
            "
            />
            <div className="flex justify-center">
                <div className="w-11/12 ">
                    <div className="flex flex-col gap-8 justify-between items-center flex-wrap md:flex-row lg:gap-0">
                        <img
                            src={gcp}
                            className=" h-56 w-72 md:h-52 md:w-64 md:mx-3 lg:mx-8"
                            alt="Google Cloud Platform"
                        />
                        <img
                            src={digitalOcean}
                            className=" h-36 w-36 md:h-32 md:w-32 md:mx-3  lg:mx-8"
                            alt="Digital Ocean"
                        />
                        <img
                            src={pentesterLab}
                            className=" h-24 w-72 md:h-24 md:w-64 md:mx-3 lg:mx-8"
                            alt="PentesterLab"
                        />
                        <img
                            src={rootMe}
                            className=" h-48 w-48 md:h-44 md:w-44 md:mx-3 lg:mx-8"
                            alt="Root-Me"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
