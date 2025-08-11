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
        <div className='border-b border-[var(--color-cream-light)] bg-black px-5 rounded-2xl my-2 '>
            <button onClick={onClick} className='w-full text-left py-2'>
                <div className='flex justify-between items-center '>
                    {/* Title */}

                    <span className='font-semibold text-[var(--color-cream-light)] px-5'>{item.title}</span>


                    {/* Date and Icon */}
                    <div className='flex items-center justify-between px-2'>
                        <span className='font-semibold text-[var(--color-cream-light)]'>{item.date}</span>
                        <span className='font-semibold text-[var(--color-cream-light)] px-4'>{isOpen ? '-' : '+'}</span>
                    </div>

                </div>
            </button>
            {
                isOpen && (
                    <div className='flex flex-col justify-between items-center'>
                        <div className='flex justify-items-start items-center'>
                            <div>{item.location}</div>
                            <div>{item.companyLink}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>{item.responsibilities}</div>
                            <div>{item.logoPath}</div>
                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default Accordion