import React from 'react'

const HeroName = () => {
    const name = "Saksham Tewari"
    const letters = name.split("");
    return (
        <div className='grid grid-cols-14 auto-rows-auto gap-0 px-4 sm:px-8 ' style={{ gridTemplateColumns: 'repeat(14, 1fr)' }}>
            {letters.map((letter, i) => (
                <span key={i} className=' col-span-1 font-serif font-bold text-[clamp(1.5rem,6vw,6rem)]  text-black tracking-tight'>{letter}</span>
            ))}
        </div>
    )
}

export default HeroName