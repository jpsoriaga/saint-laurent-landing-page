import Model from '../../assets/model.png'
import DiscoverMore from './DiscoverMore'

export default function HeroSection() {
    return (
        <div className="flex relative pl-20">
            <img src={Model} alt="Model Picture" className='w-150 h-auto absolute z-0 right-0' />

            <div className="mix-blend-difference text-white font-primary text-[15rem] z-10 relative leading-[0.85]">
                <h1>YVES</h1>
                <div className="flex justify-between items-center">
                    <DiscoverMore />

                    <h1>SAINT</h1>
                </div>
                <h1>LAURENT</h1>
            </div>
        </div>

        
    );
}