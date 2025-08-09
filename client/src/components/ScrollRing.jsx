import React from 'react'
import RotatingFlower from './RotatingFlower'

const ScrollRing = () => {
    return (
        <>
            <div className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] flex items-center justify-center relative">
                <svg height="120" width="120" viewBox="0 0 150 150" className='fill-[var(--color-white)]'>
                    <defs>
                        <path
                            id="circlePath"
                            d="M75,75 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                            fill="none"
                        />
                    </defs>

                    <g className="spin-text origin-center">
                        <text className="  fill-[var(--color-black-100)]" fontSize='14' letterSpacing='18' fontWeight='bold' textRendering="geometricPrecision"
                            shapeRendering="geometricPrecision" >
                            <textPath href="#circlePath" startOffset="0%" textLength='314' lengthAdjust='spacing' >SCROLL DOWN SCROLL DOWN</textPath>
                        </text>
                    </g>
                </svg>
                <RotatingFlower src="/images/flower-2.svg" className={'absolute'} direction={'anticlockwise'} />
            </div>

        </>

    )
}

export default ScrollRing;