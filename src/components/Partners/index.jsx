/* eslint-disable prettier/prettier */
import * as React from 'react'
import Shellmates from '../../images/shellmates.png'
import Cybererudites from '../../images/CyberErudites.png'

import Titles from '../Titles'
import Paragraphs from '../paragraphs'


const Partners = () => {
     return ( 
        <section id="partners" className="mb-48">
           <Titles titlename="Partners"/>
            <Paragraphs paragraph="
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem 
             vivamus tortor id ultrices amet, scelerisque tellus proin et.
              Enim neque non, elit, tincidunt. Pellentesque ornare dictumst 
              mattis venenatis at lectus in.                
            "/>

            <div className="flex flex-col space-y-14  mr-[10px] justify-center  items-center  lg:flex-row lg:items-end lg:mr-36 ">
             <img src={Cybererudites} className=" w-[150px] lg:w-[270px] 2xl:w-[400px] lg:ml-48 " alt="" />
             <img src={Shellmates} className="w-[150px] lg:w-[270px] 2xl:w-[400px] lg:ml-48" alt="" />
            </div>

        </section>
     );
}
 
export default Partners; 