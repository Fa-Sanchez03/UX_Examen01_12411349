import Logo from "@/components/atoms/Logo";
import NavMenu from "@/components/molecules/NavMenu";
import SearchBar from "../molecules/SearchBar";

export default function Navbar() {
    return (

        <header className="fixed inset-x-0 top-0 z-20 bg-gradient-to-b from-black/90 via-black/60 to-transparent">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-8">
                {/*Lado izquierdo*/}
                <div className="flex items-center gap-6">
                    <Logo />
                    <NavMenu />
                </div>

                {/*Lado derecho*/}
                <div className="flex items-center gap-4 text-sm text-gray-200">
                    {/*Botones*/}
                   <SearchBar />

                    <button className="hidden sm:inline-block text-xs hover:text-white md:text-sm">
                        Niños
                    </button>

                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700/80 text-xs hover:bg-gray-500/80">
                        🔔
                    </button>

                    <button className="flex h-8 w-8 items-center justify-center overflow-hidden rounded">
                        <div className="h-full w-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                    </button>
                </div>
            </div>
        </header>
    );

}