import SearchIcon from "../atoms/SearchIcon";
import SearchInput from "../atoms/SearchInput";

export default function SearchBar() {
    return (
        <div className="hidden items-center gap-2 sm:flex">
            <SearchIcon />
            <SearchInput />
        </div>
    ); 
}