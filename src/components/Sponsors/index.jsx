import * as React from 'react'
import gcp from '../../images/gcp-logo.png'
import rootMe from '../../images/rootme.svg'
import digitalOcean from '../../images/digital-ocean.png'
import Title from '../shared/Title'
import Description from '../shared/Description'
import Wall from '../../images/wall_footer.png'

const Sponsors = () => {
    return (
        <section id="sponsors" className="mb-48">
            <div className="flex justify-center">
                <img src={Wall} alt="Wall" className=" w-full h-64" />
            </div>
            <Title titlename="Sponsors" />
            <Description
                paragraph="
             The CTF was not possible without the contribution of our amzing sponsors. 
             Thanks for Google for sponsoring the CTF infrastructure, 
             Thanks also to Digital Ocean and Root-Me for sponsoring the prizes of the CTF                 
            "
            />
            <div className="flex justify-center">
                <div className="w-11/12 ">
                    <div className="flex justify-between items-center">
                        <img
                            src={gcp}
                            className=" h-24 w-32 md:h-52 md:w-64 lg:h-72 lg:w-96 md:mx-3 lg:mx-8"
                            alt="Google Cloud Platform"
                        />
                        <img
                            src={digitalOcean}
                            className=" h-20 w-20 md:h-32 md:w-32 lg:h-48 lg:w-48 md:mx-3  lg:mx-8"
                            alt="Digital Ocean"
                        />
                        <img
                            src={rootMe}
                            className=" h-24 w-24 md:h-44 md:w-44 lg:h-64 lg:w-64 md:mx-3 lg:mx-8"
                            alt="Root-Me"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
