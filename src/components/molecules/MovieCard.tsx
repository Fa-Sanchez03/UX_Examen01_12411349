import ThumbnailImage from "../atoms/ThumbnailImage";
import ProgressBar from "../atoms/ProgressBar";

type MovieCardProps = {
    title: string;
    image: string;
    progress?: number;
    showProgress?: boolean;
    description?: string;
};

export default function MovieCard(
    { title, image, progress, showProgress, description, }: MovieCardProps
) {
    return (
        <div className="group relative w-32 flex-shrink-0 cursor-pointer sm:w-36 md:w-40">
            {/* Imagen */}
            <ThumbnailImage src={image} alt={title} />

            {/* Capa oscura + descripción al hacer hover */}
            <div className="pointer-events-none absolute inset-0 rounded-md bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/70 group-hover:opacity-100">
                <div className="flex h-full flex-col justify-end p-2">
                    <p className="text-[10px] font-semibold text-white md:text-xs">
                        {title}
                    </p>
                    {description && (
                        <p className="mt-1 line-clamp-3 text-[9px] text-gray-200 md:text-[10px]">
                            {description}
                        </p>
                    )}
                    {showProgress && typeof progress === "number" && (
                        <div className="mt-2">
                            <ProgressBar value={progress} />
                        </div>
                    )}
                </div>
            </div>

            {/* Sombra y escala extra en hover */}
            <div className="pointer-events-none absolute inset-0 rounded-md border border-transparent transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-gray-300/40 group-hover:shadow-2xl" />
        </div>
    );
}