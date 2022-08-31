import * as React from 'react'
import * as containerStyles from '../../styles/textShadow.module.css'
import show from '../../images/Show.png'
import hide from '../../images/Hide.png'
import data from './data'

const FaQ = () => {
    const [Selected , setSelected] = React.useState(null)
    const toggle = (i) => {
        if (Selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <section className='pt-96' id="faq">
            <p
                className={`${containerStyles.textShadow} text-center text-[22px] leading-[48px] px-[20px] md:text-[30px] md:leading-[86px] md:px-[96px] lg:text-[40px] lg:leading-[96px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]`}
            >
                FaQ
            </p>
            <div className='flex  justify-center align-center'>
                <div className='w-[74vw]'>
                    {data.map((item , i) => (
                            <div>
                                <svg viewBox="0 0 1704 63" fill="none" >
                                    <path d="M2 31.9999C509.5 104.5 990.5 -64.9999 1702 31.9999V62.9999H2V31.9999Z" fill="#1E1E1E"/>
                                    <path d="M1.5 32C537.612 103.388 953.151 -64.625 1702.5 31.9999M1703 30.9999V62.9998M1 31.0001V63.0001" stroke="#FB000A" stroke-width="3.5" stroke-linejoin="round"/>
                                </svg>
                                <div className='bg-[#1E1E1E] px-[5vw] py-[1.5vh] border-[0.1px] md:border-2 border-[#FB000A] border-t-0 border-b-0 md:border-t-0 md:border-b-0'>
                                    <div className='flex justify-between items-center ' >
                                        <h2 className='text-[14px] lg:text-[21px] 2xl:text-[32px]'>{item.question}</h2>
                                        {Selected == i ? <img src={hide} className="w-[4vw] h-auto cursor-pointer" onClick={() => {toggle(i)}} /> : <img src={show} className="w-[4vw] h-auto cursor-pointer" onClick={() => {toggle(i)}} />}
                                    </div>
                                    <div className={Selected == i ? 'h-auto pt-4 text-[12px] lg:text-[16px] 2xl:text-[24px]' : 'max-h-0 overflow-hidden '}>
                                    {item.answer}
                                    </div>
                                </div>
                                <svg  viewBox="0 0 1704 61" fill="none" >
                                    <path d="M1702 42.0001C959.5 -50.9998 546 110.5 2 41.0002V7.24792e-05H1702V42.0001Z" fill="#1E1E1E"/>
                                    <path d="M1.94318 41.5C538.056 112.888 953.151 -53.6249 1702.5 43M1703 44V0M1 42.5V0" stroke="#FB000A" stroke-width="3.5" stroke-linejoin="round"/>
                                </svg>
                            </div>
                    )
                    )}
                </div>
           </div>
        </section>
    )
}

export default FaQ
