import images from '../../assets/image.png'

export default function HeroSection() {
    return (
        <div className="relative pl-8">
            <img src={images} alt="Model Picture" className='w-100 h-100 absolute right-0' />

            <div className="font-bodoni text-[10rem]">
                <h1>YVES</h1>
                <h1 className="">SAINT</h1>
                <h1>LAURENT</h1>
            </div>
        </div>

        
    );
}