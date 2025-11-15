"use client";
import { useEffect, useState} from "react";

import Logo from "@/components/atoms/Logo";
import NavMenu from "@/components/molecules/NavMenu";
import SearchBar from "../molecules/SearchBar";



export default function Navbar() {

    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return ()  => window.removeEventListener("scroll",handleScroll);
    }, []);

    return (

        <header className={`fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
            isScrolled
                ? "bg-black/90 shadow-lg"
                : "bg-gradient-to-b from-black via-black/80 to-transparent"
            }`}>
            <div className="flex h-16 w-full items-center justify-between px-6 md:h-20 md:px-16">
                {/*Lado izquierdo*/}
                <div className="flex items-center gap-6">
                    <Logo />
                    <NavMenu />
                </div>

                {/*Lado derecho*/}
                <div className="flex items-center gap-4 text-sm text-gray-200">

                    <SearchBar />

                    <button className="hidden sm:inline-block text-xs hover:text-white md:text-sm">
                        Niños
                    </button>

                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700/80 text-xs hover:bg-gray-500/80">
                        🔔
                    </button>

                    <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded bg-gray-600/80">
             
                    </div>

                </div>
            </div>
        </header>
    );

}