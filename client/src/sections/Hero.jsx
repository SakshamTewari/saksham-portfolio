import React from 'react'
import { words } from '../utils'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModel/HeroExperience'

const Hero = () => {
    return (
        <section id='hero' className='relative overflow-hidden'>
            {/* Top-left name branding */}
            <div className="fixed top-4 left-6 z-50  text-lg md:text-2xl text-white tracking-wide select-none pointer-events-none">
                <p>&lt;Saksham Tewari/&gt;</p>
            </div>
            <div>

            </div>
            <div className='absolute top-0 left-0 z-0.1'>
                {/* <img src="/images/bg2.png" alt="background" /> */}
            </div>

            <div className='hero-layout'>
                {/* LEFT: Content */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>Exploring
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word, index) => (
                                            <span key={index} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Breaking limits.</h1>
                            {/* <h1>Building what matters</h1> */}
                        </div>
                        {/* <p className='text-white-50 md:text-xl relative z-10 ponter-events-none'>
                            Hi, I'm Saksham,
                            <p>I build with code, train like a fighter, and play to win — in tech and in the ring</p>
                        </p> */}

                        <Button text='See my work' className="md:w-80 md:h-16 h-12 border-white-50 border-[1px] hover:border-transparent" />
                    </div>
                </header>

                {/* RIGHT: 3D model
                <figure >
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure> */}

                {/* <div><svg height="100" width="100"><path id="ellipse-id-r2-" style="fill: none;" d="M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0"></path><text style="font-size: 11px; letter-spacing: 6.5px; fill: rgb(244, 244, 244);"><textPath xlink:href="#ellipse-id-r2-" startOffset="0"><tspan>SCROLL DOWN SCROLL DOWN</tspan></textPath></text></svg></div> */}

            </div>

            {/* Rotating svg */}
            <div className="w-[100px] h-[100px] animate-spin-slow">
                <svg height="100" width="100">
                    <path
                        id="ellipse-id-r2-"
                        fill="none"
                        d="M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0"
                    />
                    <text className="text-[11px] tracking-[6.5px] fill-neutral-100">
                        <textPath xlinkHref="#ellipse-id-r2-" startOffset="0">
                            <tspan>SCROLL DOWN SCROLL DOWN</tspan>
                        </textPath>
                    </text>
                </svg>
            </div>

        </section>
    )
}

export default Hero