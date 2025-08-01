import React from 'react'

const RotatingFlower = ({ className, direction, src }) => {
    return (
        <>
            {/* Flower icon */}
            <span className={` h-[16px] w-[16px] filter ${className}`}>
                <img src={src} alt="" className={`spin-flower-${direction}`} />
            </span>
        </>
    )
}

export default RotatingFlower