import ScrollRing from '../components/ScrollRing'
import TypingText from '../components/TypingText'
import WorkWithMe from '../components/WorkWithMe'
import AnimatedHeroText from '../components/AnimatedHeroText'


const Hero = () => {

    return (
        <section className='relative h-screen w-screen overflow-hidden'>

            {/* Top-left name branding */}
            <TypingText text="&lt;Saksham Tewari/&gt;" />

            <div className='hero-top-right'>
                <WorkWithMe />
            </div>


            <div className='flex flex-row justify-end h-full'>
                <div className='hero-left-section'>
                    <div className='hero-middle-layout'>
                        <AnimatedHeroText />
                    </div>
                    <div>
                        <ScrollRing />
                    </div>
                </div>

                {/* Right half of section */}
                <div className='hero-right-section'>

                </div>
            </div>
        </section>
    )
}

export default Hero