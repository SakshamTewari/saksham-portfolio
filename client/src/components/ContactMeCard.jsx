import { motion } from 'framer-motion'

const ContactMeCard = ({ onClose }) => {
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[var(--color-black-100)] z-50 p-6 shadow-lg backdrop-blur-md'
        >
            <div className='flex justify-between items-center mb-3'>
                <div className='flex justify-center items-center  w-full'>
                    <h2 className='text-white font-bold '>Let's Talk</h2>
                </div>

                <span onClick={onClose}><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-white transition-all duration-300 ease-in-out group-hover:w-20 group-hover:scale-x-[3.5]"
                >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 5 12 12 19" />
                </svg></span>
            </div>

            <form action="" className='flex flex-col space-y-3 items-center'>
                <input type="email" placeholder='Your email' className='w-full border border-black px-4 placeholder:text-sm text-white' />
                <input type="text" placeholder='Your name' className='w-full border border-black px-4 placeholder:text-sm text-white' />
                <textarea name="" id="" placeholder='How can I help you?' className='w-full border border-black px-4  resize-none placeholder:text-sm text-white'></textarea>
                <motion.button type='submit' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='cta-button gap-2 bg-black borde border-[var(--color-black-100)] w-1/2 text-white'>Ping Me <img src="/images/email-ping.svg" alt="email me" className='w-6 h-6 invert fill-white' /></motion.button>
            </form>
        </motion.div>
    )
}

export default ContactMeCard