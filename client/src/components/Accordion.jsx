import React, { useState } from 'react'

const Accordion = ({ items }) => {
    const [openId, setOpenId] = useState(null);

    return (
        <div className='max-w-2xl mx-auto'>
            {items.map((item) => (
                <AccordionItem key={item.id} item={item} isOpen={item.id === openId} onClick={() => setOpenId(openId === item.id ? null : item.id)} />
            ))}
        </div>
    )
}

const AccordionItem = ({ item, isOpen, onClick }) => {
    return (
        <div className='border-b'>
            <button onClick={onClick} className='w-full text-left py-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='font-semibold'>{item.title}</span>
                    </div>
                    <div>
                        <span className='font-semibold'>{item.date}</span>
                        <span className='font-semibold'>{isOpen ? '-' : '+'}</span>
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