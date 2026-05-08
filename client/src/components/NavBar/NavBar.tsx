import YslText from "../../assets/ysl-text.png"

export default function NavBar() {
    return(
        <>
            <div className=" flex items-center justify-between py-12 px-8">
                <button className="button-primary">
                    MY PROFILE
                </button>

                <img src={YslText} alt="YSL Logo Font" className="w-40 h-auto" />

                <button className="text-xl font-light cursor-pointer">
                    LA MAISON
                </button>
            </div>
        </>
    );
}