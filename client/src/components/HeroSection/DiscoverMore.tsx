import { MoveUpRight } from 'lucide-react';
import { useState } from 'react';

export default function DiscoverMore() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="flex font-inter font-normal text-base tracking-normal flex-col gap-y-5">
                <p>
                    THE HOUSE<br />
                    OF YVES SAINT LAURENT<br />
                    <span className="italic">PARIS</span>
                </p>

                <div className="flex gap-x-2 items-center">
                    <button
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