import { MoveUpRight } from 'lucide-react';
import { useState } from 'react';

export default function DiscoverMoreMobile() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="w-full h-px bg-black"></div>
            <div className="flex font-inter tracking-wide flex-col gap-y-5
                w-full items-center justify-center py-7"> 
                <p className='text-center'>
                    THE HOUSE<br />
                    OF YVES SAINT LAURENT<br />
                    <span className="italic">PARIS</span>
                </p>

                <div className="flex gap-x-2 pl-5 items-center justify-center">
                    <button
                        onClick={() => window.open("https://www.ysl.com/en-en", "_blank")}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`cursor-pointer ${!isHovered ? "underline underline-offset-5 relative" : "relative"}`}
                    >
                        DISCOVER MORE

                        {isHovered && (
                            <span className='absolute left-0 bottom-0 h-[1.5px] w-full bg-black animate-[underline_.5s_ease-out_forwards]' />
                        )}
                    </button>

                    <MoveUpRight strokeWidth={1} />
                </div>
            </div>
        </>
    );
}