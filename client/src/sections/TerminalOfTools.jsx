import React, { useEffect, useRef } from 'react'
import { skills } from '../utils';



const TerminalOfTools = () => {
    const scrollRef = useRef(null);


    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollStep = 1;
        const intervalTime = 20;
        let intervalId;
        const startScroll = () => {
            intervalId = setInterval(() => {
                if (!scrollContainer) return;
                scrollContainer.scrollLeft += scrollStep;
                scrollAmount += scrollStep;

                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                    scrollAmount = 0;
                }

            }, intervalTime)
        };
        const stopScroll = () => clearInterval(intervalId);
        startScroll();

        // Pause on hover
        scrollContainer.addEventListener('mouseenter', stopScroll);
        scrollContainer.addEventListener('mouseleave', startScroll);
        return () => {
            clearInterval(intervalId)
            scrollContainer.removeEventListener('mouseenter', stopScroll);
            scrollContainer.removeEventListener('mouseleave', startScroll);
        };
    }, []);

    const doubledSkills = [...skills, ...skills];

    return (
        <div className='flex justify-center w-[80%] overflow-hidden py-6'>
            <div ref={scrollRef} className='flex justify-center w-max animate-scroll gap-5 scroll-smooth' style={{ whiteSpace: 'nowrap' }}>
                {doubledSkills.map((skill, index) => (
                    <div key={index} className='flex-shrink-0 hover:scale-110 transition-transform duration-300 ease-in-out' >
                        <img src={skill.path} alt={skill.name} className='h-12 w-12 object-contain' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TerminalOfTools