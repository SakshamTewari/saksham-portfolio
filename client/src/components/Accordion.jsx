import React, { useState } from 'react'

const Accordion = ({ items }) => {
    const [openId, setOpenId] = useState(null);

    return (
        <div className='w-full max-w-2xl mx-auto my-2'>
            {items.map((item) => (
                <AccordionItem key={item.id} item={item} isOpen={item.id === openId} onClick={() => setOpenId(openId === item.id ? null : item.id)} />
            ))}
        </div>
    )
}

const AccordionItem = ({ item, isOpen, onClick }) => {
    return (
        <div className=' bg-black px-5 rounded-2xl my-2 '>
            <button onClick={onClick} className='w-full py-2'>
                <div className='flex justify-between'>
                    {/* Title */}

                    <span className='font-semibold text-[var(--color-cream-light)]'>{item.title}</span>


                    {/* Date and Icon */}
                    <div className='flex items-center justify-between px-2'>
                        <span className='font-semibold text-[var(--color-cream-light)]'>{item.date}</span>
                        <span className='font-semibold text-[var(--color-cream-light)] px-4'>{isOpen ? '-' : '+'}</span>
                    </div>

                </div>
            </button>
            {
                isOpen && (
                    <div className='flex flex-col justify-between '>
                        <div className='flex gap-8 justify-start '>
                            <div className='text-[var(--color-cream-light)]'>{item.location}</div>
                            <div className='text-[var(--color-cream-light)]'>{item.companyLink}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-[var(--color-cream-light)]'>{item.responsibilities}</div>
                            <div className='text-[var(--color-cream-light)]'><img
                                src={item.logoPath}
                                alt={`${item.companyName} logo`}
                                className="h-full w-200"
                            />
                            </div>
                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default Accordion