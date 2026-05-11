import Model from '../../assets/model.png'
import DiscoverMore from './DiscoverMore'

export default function HeroSection() {
    return (
        <div className="flex relative pl-20">
            <img src={Model} alt="Model Picture" className='w-150 h-auto absolute z-0 right-0' />

            <div className="font-primary font-extralight text-[16rem] tracking-[1.3rem] z-10 relative leading-[0.85]">
                <h1>YVES</h1>
                <div className="flex justify-between items-center">
                    <DiscoverMore />

                    <h1>SAIN<span className='text-white'>T</span></h1>
                </div>
                <h1>LAUREN<span className='text-white'>T</span></h1>
            </div>
        </div>

        
    );
}