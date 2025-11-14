import ThumbnailImage from "../atoms/ThumbnailImage";
import ProgressBar from "../atoms/ProgressBar";

type MovieCardProps = {
    title: string;
    image: string;
    progress?: number;
    showProgress?: boolean;
};

export default function MovieCard(
    { title, image, progress, showProgress, }: MovieCardProps
) {
    return (
        <div className="group relative w-32 flex-shrink-0 cursor-pointer sm:w-36 md:w-40">
            <ThumbnailImage src={image} alt={title}/>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-md
            bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2">
                <p className="line-clamp-1 text-[10px] font-medium text-gray-100 md:text-xs">
                    {title}
                </p>
                {
                    showProgress && typeof progress ==="number" && (<ProgressBar value={progress}/>)
                }
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-md border border-transparent transition duration-300
            group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-gray-350/60 group-hover:shadow-2xl"/>
        </div>
    );
}