import * as React from 'react'

const Description = ({ paragraph }) => {
    return (
        <div className="mb-12">
            <p className="text-white-lighter text-center text-[15px] leading-[30px] px-[20px] md:text-[20px] md:leading-[50px] md:px-[96px] lg:text-[24px] lg:leading-[50px] lg:px-[164px] 2xl:text-[64px] 2xl:px-[245px] 2xl:leading-[144px]">
                {paragraph}
            </p>
        </div>
    )
}

export default Description
