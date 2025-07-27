import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RotatingFlower from './RotatingFlower'

const WorkWithMe = () => {


    return (
        <>
            <div className='work-with-me group'>
                <span className='text-white text-sm md:text-base font-medium tracking-wide'>Work with me </span>
                <span className="overflow-hidden flex">
                    <RotatingFlower src="/images/flower.svg" direction={'clockwise'} />
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-white transition-all duration-300  ease-in-out group-hover:w-20 group-hover:scale-x-350"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>

                </span>
                <span className='text-white text-sm md:text-base font-medium tracking-wide'>Based in India</span>
            </div>
        </>
    )
}

export default WorkWithMe
