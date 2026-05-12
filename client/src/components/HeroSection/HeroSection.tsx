import Model from "../../assets/model.png"
import ModelMobile from "../../assets/model-mobile.png"
import { useState } from "react";
import { MoveUpRight } from "lucide-react";

export default function HeroSection() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="relative pl-8">

                   <div className="absolute top-[clamp(60px,20vw,140px)] z-10 flex flex-col gap-y-5">
                     <div className="text-hero-section">
                        <h1>SAINT</h1>

                        <h1>LAURENT</h1>

                        <h1 className="italic">PARIS</h1>
                    </div>

                    <div>
                        <p className="text-sm">SELF EXPRESSION IS<br />THE HIGHEST FORM OF<br />LUXURY ewan.</p>
                    </div>

                    <div className="w-[40px] h-px bg-black"></div>
                    
                    <div className="flex gap-x-2 items-center">
                    <button
                        onClick={() => window.open("https://www.ysl.com/en-en", "_blank")}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`cursor-pointer text-sm ${!isHovered ? "underline underline-offset-5 relative" : "relative"}`}
                    >
                        DISCOVER MORE

                        {isHovered && (
                            <span className='absolute left-0 bottom-0 h-[1.5px] w-full bg-black animate-[underline_.5s_ease-out_forwards]' />
                        )}
                    </button>

                    <MoveUpRight strokeWidth={1} size={15} />
                </div>

                   </div>

                    <div className="relative ml-auto -top-5 -right-10 w-[80%] md:hidden">
                        <img src={ModelMobile} alt="Model Image" className="w-full object-cover" />

                        <div
                            className=" absolute inset-y-0 z-0 top-5 left-0 w-[20%] bg-gradient-to-r
                             from-[#f5ece1]
                             via-[#f5ece1]/90
                             via-[#f5ece1]/60
                             via-[#f5ece1]/30 to-transparent" />
                    </div>

                    <img src={Model} alt="Model Image" className="hidden lg:block w-full" />
                </div>

                <div className="w-full h-px bg-black"></div>
            </div>


        </>
    );
}