import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../utils';

gsap.registerPlugin(ScrollTrigger);



const TerminalOfTools = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.utils.toArray('.skill-tag').forEach((tag, i) => {
            ScrollTrigger.create({
                trigger: tag,
                start: 'top 80%',
                onEnter: () => {
                    gsap.fromTo(tag, {
                        opacity: 0.3,
                        scale: 0.95
                    }, {
                        opacity: 1,
                        scale: 0.95,
                        duration: 0.8,
                        ease: 'power1.out',
                    });
                },
                onLeaveBack: () => {
                    gsap.to(tag, {
                        opacity: 0.3,
                        scale: 0.95,
                        duration: 0.5,

                    })
                }
            })

        })
    }, []);


    return (
        <>
            <section ref={containerRef} className='relative w-screen min-h-screen overflow-hidden bg-[#0e0e0f]; flex flex-col items-center  px-6 py-24'>

                <div className='flex items-center justify-center w-full h-[10%] mb-10 text-5xl'><h1>&lt;&gt;Terminal Of Tools&lt;/&gt;</h1></div>

                <div className="flex flex-wrap items-center justify-center h-[90%] w-full  text-center">
                    {skills.map((skill, i) => (
                        <img src={skill} key={i} className="size-4 skill-tag text-xl  invert md:text-4xl mb-4 opacity-0 sm:w-1/2 md:w-1/4  h-[60px]" onError={(e) => {
                            e.target.style.border = '2px solid red';
                            e.target.alt = 'Image not found';
                        }} />

                    ))}
                </div>
            </section>
        </>
    )
}

export default TerminalOfTools