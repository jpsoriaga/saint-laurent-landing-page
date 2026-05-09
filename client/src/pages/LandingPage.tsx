import { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";

export default function LandingPage() {

    useEffect(() => {
        document.title = "Yves Saint Laurent | YSL"
    }, []);

    return(
        <>
            <div className="flex flex-col">
                <NavBar />
                <HeroSection />
            </div>
        </>
    );
}