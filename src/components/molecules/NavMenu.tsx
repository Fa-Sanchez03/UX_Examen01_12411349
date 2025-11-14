import NavItem from "../atoms/NavItem";

const items = [
    "Inicio",
    "Series",
    "Peliculas",
    "Novedades populares",
    "Mi lista",
];

export default function NavMenu() {
    return(
        <>
            {/*Menu de Desktop */}
            <nav className="hidden items-center gap-4 md:flex">
                {items.map((item,index)=>(<NavItem key={item} label={item} isActive={index===0}/>))}
            </nav>

            {/*Menu para mobiles */}
            <div className="md:hidden">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-white">
                    Explorar <span className="text-xs">▼</span>
                </button>
            </div>
        </>
    );
}