import type { Movie } from "@/data/mimicMovies";
import RowHeader from "../molecules/RowHeader";
import MovieCard from "../molecules/MovieCard";

type RowProps = {
    title: string;
    movies: Movie[];
    variant?: "default" | "continueWatching";
};

export default function Row(
    { title, movies, variant="default"}:RowProps
)
{
    const showProgress = variant ==="continueWatching";

    return (
        <div className="mb-6 md:mb-8">
            <RowHeader title={title} />
            <div className="relative">
                <div className="flex gap-2 overflow-x-auto px-1 py-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
                    {movies.map((movie: Movie) => (
                        <MovieCard key={movie.id} title={movie.title} image={movie.image} 
                                    progress={movie.progress} showProgress={showProgress} description={movie.description}/>
                    ))}
                </div>
            </div>
        </div>
    );
}