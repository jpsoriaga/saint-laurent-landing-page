import Model from '../../assets/model.png'
import DiscoverMore from './DiscoverMore'

export default function HeroSection() {
    return (
        <div className="relative pl-25 flex">

            <div className="text-hero-section z-10">
                <h1>YVES</h1>

                <div className="flex justify-between">
                    <div className='mt-5'>
                        <DiscoverMore />
                    </div>

                    <h1>SAINT</h1>
                </div>

                <h1>LAURENT</h1>
            </div>

            <div className="absolute right-0 top-0 w-[clamp(420px,40vw,850px)] h-full overflow-hidden">
                <img
                    src={Model}
                    alt="Model Picture"
                    className="w-full h-full object-cover z-0 absolute"
                />

                <div className='absolute text-[#f1efee] text-hero-section  translate-x-[-76.5%] bottom-0 z-20 text-right'>
                    <h1>SAINT</h1>
                    <h1>LAURENT</h1>
                </div>
            </div>

        </div>
    );
}