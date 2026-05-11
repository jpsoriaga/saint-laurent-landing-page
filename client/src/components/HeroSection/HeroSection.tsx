import Model from '../../assets/model.png'
import DiscoverMore from './DiscoverMore'
import DiscoverMoreMobile from './DiscoverMoreMobile';

export default function HeroSection() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="text-hero-section mb-5">
                    <h1>YVES</h1>

                    <div className="flex items-center justify-between">
                        <h1>SAINT</h1>
                    </div>

                    <h1>LAURENT</h1>
                </div>

                <DiscoverMoreMobile />

                <div>
                    <img src={Model} alt="Model Image" className='w-full h-auto object-cover' />
                </div>
            </div>
        </>
    );
}