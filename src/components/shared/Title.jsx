import * as React from 'react'
import * as containerStyles from '../../styles/textShadow.module.css'

const Title = ({ titlename }) => {
    return (
        <div className="mb-5 lg:mb-10">
            <h2
                className={`${containerStyles.textShadow} text-center text-[32px] leading-[38px] md:text-[48px] md:leading-[96px] 2xl:text-[72px] 2xl:leading-[144px]`}
            >
                {titlename}
            </h2>
        </div>
    )
}

export default Title
