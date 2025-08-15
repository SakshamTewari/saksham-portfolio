import HeroName from "../components/HeroName"
import RotatingFlower from '../components/RotatingFlower'
import ScrollRing from '../components/ScrollRing'
import TypingText from "../components/TypingText"
import WorkWithMe from "../components/WorkWithMe"
import Card from "../components/Card"
import { socials } from "../utils"

const Home = () => {

    return (
        <section className="min-h-dvh w-full bg-[#b2b2a8] pt-5 px-4">

            <div className="w-full bg-[#c1c0b6] z-[10]  rounded-lg">


                {/* Header Name */}
                <div><HeroName /></div>


                <div className="flex items-center justify-center px-4 text-sm md:text-l">
                    <span><Card className='bg-[var(--color-cream-light)]' textBefore='Based in India' /></span>
                    <span className="line"></span>
                    <div className="flex-1 flex justify-center">
                        <RotatingFlower className="h-8 w-8" src="/images/flower.svg" direction="clockwise" />
                    </div>
                    <span className="line"></span>
                    <span><WorkWithMe /></span>
                </div>



                {/* Middle Animation */}
                <div>
                    <div className="flex justify-between px-8 shadows-into-light-regular ">
                        {/* Typing text change */}
                        <TypingText />
                        <h1 className="font-bold text-[clamp(1.5rem,10vw,6.25rem)]">Developer</h1>
                    </div>

                    {/* <span className="line"></span> */}

                    <div className="flex justify-between px-8 shadows-into-light-regular">
                        <h1 className="font-bold text-[clamp(1.5rem,7vw,6.25rem)] md:text-[clamp(1.5rem,10vw,6.25rem)]">Solution</h1>
                        <h1 className="font-bold text-[clamp(1.5rem,7vw,6.25rem)] md:text-[clamp(1.5rem,10vw,6.25rem)]">Engineer</h1>
                    </div>

                    {/* <span className="line"></span> */}
                </div>





                {/* Scroll Ring */}
                <div className="flex justify-center">
                    <ScrollRing />
                </div>

                {/* Social icons */}
                <div className='social-media px-4'>
                    {socials.map((social, i) => (
                        <a href={social.link}><img src={social.imgPath} alt={social.name} key={i} /></a>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Home