import YslText from "../../assets/ysl-text.png"

export default function NavBar() {
    return (
        <>
            <div className=" flex items-center justify-between py-12 px-8">
                <button className="button-primary group">
                    <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                        <span className="h-[40px]">MY PROFILE</span>
                        <span className="font-primary text-xl tracking-wider h-[40px]">MY PROFILE</span>
                    </div>
                </button>

                <img src={YslText} alt="YSL Logo Font" className="w-40 h-auto" />

                <button className="button-primary group">
                    <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                        <span className="h-[40px]">LA MAISON</span>
                        <span className="font-primary text-xl tracking-wider h-[40px]">LA MAISON</span>
                    </div>
                </button>
            </div>
        </>
    );
}