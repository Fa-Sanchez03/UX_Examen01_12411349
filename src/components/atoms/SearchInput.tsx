export default function SearchInput() {
    return (
        <input
            type="text"
            placeholder="Buscar"
            className="w-32 rounded bg-gray-800/50 px-3 py-1 text-sm text-white placeholder-gray-400 outline-none transition-all 
            focus:w-48 focus:bg-gray-700/70 md:w-40 md:focus:w-56"
        />
    );
}