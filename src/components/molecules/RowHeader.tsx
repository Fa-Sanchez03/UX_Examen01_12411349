type RowHeaderProps = {
    title: string;
};

export default function RowHeader({ title}: RowHeaderProps) {
    return (
        <div className="mb-2 flex items-center justify-between px-1">
            <h2 className="text-sm font-semibold text-white md:text-lg"> {title} </h2>
            <button className="text-[10px] text-gray-300 hover:text-white md:text-xs">Ver mas</button>
        </div>
    );
}