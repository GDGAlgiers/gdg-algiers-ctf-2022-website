import * as React from 'react'
import Shellmates from '../../images/shellmates.png'
import Cybererudites from '../../images/CyberErudites.png'

import Title from '../shared/Title'
import Description from '../shared/Description'

const Partners = () => {
    return (
        <section id="partners" className="mt-12 md:mt-24 mb-48">
            <Title titlename="Partners" />
            <Description paragraph="Shellmates is a Club who gathered the cybersecurity enthusiasts from all over Algeria, promoting one of the most prestigious legacy's in the field, and gathering many talents accoss the country." />

            <div className="flex flex-col space-y-14  mr-[10px] justify-center  items-center  lg:flex-row lg:items-end lg:mr-36 ">
                <img
                    src={Cybererudites}
                    className=" w-[150px] lg:w-[270px] 2xl:w-[400px] lg:ml-48 "
                    alt=""
                />
                <img
                    src={Shellmates}
                    className="w-[150px] lg:w-[270px] 2xl:w-[400px] lg:ml-48"
                    alt=""
                />
            </div>
            <Description paragraph="CyberErudites is an Algerian CTF team created in 2019, it is currently holding the first place of CTF teams in Algeria. The team was created by the association of several Algerian teams like Sudo-Root, Team7even, Shellsec, and Th3jackers." />
        </section>
    )
}

export default Partners
