import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import{ RiFacebookCircleLine,RiLinkedinBoxLine } from 'react-icons/ri'
import{ FiTwitter } from 'react-icons/fi'

import Solider from './../../images/Solider.png'
import Wall from './../../images/wall_footer.png'
const Footer = () => {
    const t=[{icon:1,url:'https://web.facebook.com/GDGAlgiers'},{icon:2,url:'https://www.instagram.com/gdg_algiers/'},{icon:3,url:'https://twitter.com/gdg_algiers'},{icon:4,url:'https://www.linkedin.com/company/gdg-algiers/'}];
   const handleIcon=(el)=>{
        switch (el) {
            case 1:
              return <RiFacebookCircleLine className="w-[17px] h-[17px] md:w-[37px] md:h-[37px] 2xl:w-[50px] 2xl:h-[50px]  text-gdg-ctf-red absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
            case 2:
              return <FaInstagram className="w-[17px] h-[17px] md:w-[37px] md:h-[37px] 2xl:w-[50px] 2xl:h-[50px]  text-gdg-ctf-red absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
            case 3:
              return <FiTwitter className="w-[17px] h-[17px] md:w-[37px] md:h-[37px] 2xl:w-[50px] 2xl:h-[50px]  text-gdg-ctf-red absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
            case 4:
              return <RiLinkedinBoxLine className="w-[17px] h-[17px] md:w-[37px] md:h-[37px] 2xl:w-[50px] 2xl:h-[50px]  text-gdg-ctf-red absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
            
            default:
              return null
          }
      
   }
    return (
        <div className="font-body py-4 max-w-full text-white-default list-none pt-[100px] lg:pt-[400px] 2xl:pt-[600px]   ">
            
            <div className="relative ">
                <img src={Wall} alt="Wall" className='w-full' />
            <ul className="flex  justify-between  max-w-full  w-2/3 px-[10px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                {t.map(el=>{
        return(
            <li>
                    <a
                        target="_blank"
                        href={el.url}
                        rel="noreferrer"
                    >
                        <div className="img" className='relative'>
                        <img src={Solider} alt="solider.jpg"  className='w-[50px] md:w-[100px]  lg:w-[180px]' />
                        {
                            handleIcon(el.icon)
                        }
                        
                        </div>
                    </a>
                </li>
        )
    })}
            </ul>
            </div>
           
            <p className="text-sm text-center mt-6">
                Copyright &copy; 2022. All rights reserved
            </p>
        </div>
    )
}

export default Footer
