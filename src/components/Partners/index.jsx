/* eslint-disable prettier/prettier */
import * as React from 'react'
import Shellmates from '../../images/shellmates.png'
import Cybererudites from '../../images/CyberErudites.png'
import * as containerStyles from '../../styles/textShadow.module.css'

const Partners = () => {
     return ( 
        <section id="partners" className="mb-48">
            <h1
                className={`${containerStyles.textShadow} text-center text-[22px] leading-[48px] px-[20px] md:text-[30px] md:leading-[86px] md:px-[96px] lg:text-[40px] lg:leading-[96px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]`}
            >
               Partners
            </h1>
            <br /><br />
            <p
             className="text-white-lighter text-center text-[15px] leading-[30px] px-[20px] md:text-[20px] md:leading-[50px] md:px-[96px] lg:text-[24px] lg:leading-[50px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]"
             >       
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem 
            vivamus tortor id ultrices amet, scelerisque tellus proin et.
             Enim neque non, elit, tincidunt. Pellentesque ornare dictumst 
             mattis venenatis at lectus in.
            </p>
            <br /><br />
            <div className="flex flex-col space-y-14  mr-[50px] justify-center justify-evenly items-center md:flex-row lg:flex-row ">
             <img src={Cybererudites} className=" w-[150px] lg:w-[270px] 2xl:w-[400px] " alt="" />
             <img src={Shellmates} className="w-[150px] lg:w-[270px] 2xl:w-[400px]" alt="" />
            
            </div>

        </section>
     );
}
 
export default Partners; 