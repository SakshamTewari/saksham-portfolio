import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            gsap.to(dot, {
                x: mouseX,
                y: mouseY,
                duration: 0.1,
                ease: 'power3.out'
            });
            gsap.to(ring, {
                x: mouseX,
                y: mouseY,
                duration: 0,
                ease: 'power3.out',
            });
        }

        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <>
            <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]" />

            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] transition-all"
            /></>
    )
}

export default CustomCursor