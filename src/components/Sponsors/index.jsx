/* eslint-disable prettier/prettier */
import * as React from 'react'
import flags from '../../images/redblackflags.png'
import * as containerStyles from '../../styles/textShadow.module.css'

const Sponsors = () => {
     return ( 
        <section id="partners" className="mb-48">
            <h1
                className={`${containerStyles.textShadow} text-center text-[22px] leading-[48px] px-[20px] md:text-[30px] md:leading-[86px] md:px-[96px] lg:text-[40px] lg:leading-[96px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]`}
            >
              Sponsors
            </h1>
            <br/><br/>
            <p
            className="text-white-lighter text-center text-[15px] leading-[30px] px-[20px] md:text-[20px] md:leading-[50px] md:px-[96px] lg:text-[24px] lg:leading-[50px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]"
             >
                 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem 
            vivamus tortor id ultrices amet, scelerisque tellus proin et.
             Enim neque non, elit, tincidunt. Pellentesque ornare dictumst 
             mattis venenatis at lectus in.

            </p>
            <br /><br />
            <div className="flex justify-center items-center">
              <img src={flags} className="w-[240px] h-[160px] md:w-[340px] md:h-[210px] lg:w-[670px] lg:h-[450px] 2xl:w-[1000px] 2xl:h-[674px]" alt="" />
              
            </div>
        </section>
     );
}
 
export default Sponsors; 