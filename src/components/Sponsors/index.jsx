/* eslint-disable prettier/prettier */
import * as React from 'react'
import flags from '../../images/redblackflags.png'
import Titles from '../Titles';
import Paragraphs from '../paragraphs'

const Sponsors = () => {
     return ( 
        <section id="partners" className="mb-48">
           
           <Titles titlename="Sponsors"/>
           <Paragraphs paragraph="
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem 
             vivamus tortor id ultrices amet, scelerisque tellus proin et.
              Enim neque non, elit, tincidunt. Pellentesque ornare dictumst 
              mattis venenatis at lectus in.                
            "/>

            <div className="flex justify-center items-center">
              <img src={flags} className="w-[240px] h-[160px] md:w-[340px] md:h-[210px] lg:w-[670px] lg:h-[450px] 2xl:w-[1000px] 2xl:h-[674px]" alt="" />
              
            </div>
        </section>
     );
}
 
export default Sponsors; 