import * as React from 'react'
import Lock from '../../images/lock.png'

const CounterCard = ({ time, timeLeft }) => {
    return (
        <div className="flex flex-col items-center gap-[26px] 2xl:gap-[39px]">
            <div className="relative">
                <img src={Lock} alt="" />
                <span className="absolute top-2/3 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-2xl 2xl:text-5xl">
                    {timeLeft}
                </span>
            </div>
            <p className="uppercase">{time}</p>
        </div>
    )
}

export default CounterCard
