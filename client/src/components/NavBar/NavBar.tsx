import YslText from "../../assets/ysl-text.png"

export default function NavBar() {
    return (
        <>
            <div className=" flex items-center justify-between py-12 px-5 sm:px-8">
                <button className="button-primary group">
                    <div className="flex flex-col items-center transition-transform duration-400 group-hover:-translate-y-1/2">
                        <span className="h-[40px] flex items-center">MY PROFILE</span>
                        <span className="font-primary text-xl tracking-wider h-[40px] flex items-center">MY PROFILE</span>
                    </div>
                </button>

                <img src={YslText} alt="YSL Logo Font" className="w-[clamp(120px,10vw,160px)] h-auto" />

                <button className="button-primary group">
                    <div className="flex flex-col transition-transform duration-400 group-hover:-translate-y-1/2">
                        <span className="h-[40px] flex items-center">LA MAISON</span>
                        <span className="font-primary text-xl tracking-wider h-[40px] flex items-center">LA MAISON</span>
                    </div>
                </button>
            </div>
        </>
    );
}