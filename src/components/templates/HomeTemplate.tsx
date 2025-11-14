import Banner from "../organisms/Banner";
import Row from "../organisms/Row";
import { rows } from "@/data/mimicMovies";

export default function HomeTemplate() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Banner />
            <div className="mx-auto max-w-6xl px-4 pb-10 pt-4 md:px-10 md:pb-16 md:pt-6">
                {rows.map((row) => (
                    <Row
                        key={row.id}
                        title={row.title}
                        movies={row.items}
                        variant={row.type === "continueWatching" ? "continueWatching" : "default"}
                    />
                ))}
            </div>
        </div>
    );
}
