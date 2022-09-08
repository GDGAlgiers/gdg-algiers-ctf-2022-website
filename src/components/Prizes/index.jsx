import * as React from 'react'
import whitecastle from '../../images/white.png'
import marooncastle from '../../images/maroon.png'
import yellowcastle from '../../images/yellow.png'
import Title from '../shared/Title'

const Prizes = () => {
    return (
        <section id="partners" className="mb-48 hidden">
            <Title titlename="Prizes" />
            <div className="flex flex-col justify-center space-y-20   flex-wrap items-center lg:space-y-10  lg:flex-row lg:gap-44  lg:items-end lg:pr-[50px]  ">
                <img
                    src={yellowcastle}
                    className=" w-[144px] md:w-[150px] lg:order-2 lg:w-[215px] lg:h-[297px] lg:ml-24 2xl:w-[321px] 2xl:h-[445px]"
                    alt=""
                />
                <img
                    src={whitecastle}
                    className=" w-[96px] md:w-[120px] lg:order-3 lg:w-[160px] lg:h-[222px] lg:ml-24 2xl:w-[240px] 2xl:h-[332px]"
                    alt=""
                />
                <img
                    src={marooncastle}
                    className=" w-[72px] md:w-[84px] lg:order-1 lg:w-[113px] lg:h-[157px] lg:ml-24 2xl:w-[170px] 2xl:h-[235px]"
                    alt=""
                />
            </div>
        </section>
    )
}

export default Prizes
