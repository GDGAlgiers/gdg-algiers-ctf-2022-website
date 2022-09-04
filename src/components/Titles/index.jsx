/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */

import * as React from 'react'
import * as containerStyles from '../../styles/textShadow.module.css'

const Titles = (props) => {
    return ( 
        <div className="mb-5 lg:mb-10">
            
            <h1
                className={`${containerStyles.textShadow} text-center text-[22px] leading-[48px] px-[20px] md:text-[30px] md:leading-[86px] md:px-[96px] lg:text-[40px] lg:leading-[96px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]`}
            >
               {props.titlename}
            </h1>
        </div>
          
        
    );
}

export default Titles; 