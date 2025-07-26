import React from 'react'

const ScrollRing = () => {
    return (
        <>
            <div className="w-[150px] h-[150px] flex items-center justify-center relative">
                <svg height="150" width="150" viewBox="0 0 150 150" className='fill-[var(--color-white-50)]'>
                    <defs>
                        <path
                            id="circlePath"
                            d="M75,75 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                            fill="none"
                        />
                    </defs>

                    <g className="spin-text origin-center">
                        <text className="  fill-[var(--color-white-50)]" fontSize='10' letterSpacing='18'>
                            <textPath href="#circlePath" startOffset="0%" textLength='314' lengthAdjust='spacing'>SCROLL DOWN SCROLL DOWN</textPath>
                        </text>
                    </g>
                </svg>
                {/* Asterisk icon in center */}
                <span className="absolute h-[16px] w-[16px] fill-[var(--color-white-50)] filter invert">
                    <img src="/images/flower-2.svg" alt="" className='spin-flower' />
                </span>
            </div>

        </>

    )
}

export default ScrollRing;