import * as React from 'react'

const Description = ({ paragraph }) => {
    return (
        <div className="my-12 2xl:my-20">
            <p className="text-white-lighter text-center text-lg leading-[32px] px-[20px] font-Gilroy md:text-[20px] md:leading-[50px] md:px-[96px] lg:text-[24px] lg:leading-[48px] lg:px-[164px] 2xl:text-[32px] 2xl:px-[245px] 2xl:leading-[80px]">
                {paragraph}
            </p>
        </div>
    )
}

export default Description
