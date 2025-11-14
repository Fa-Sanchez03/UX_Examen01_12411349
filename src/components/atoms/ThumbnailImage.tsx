type ThumbnailImageProps = {
    src: string;
    alt: string;
};

export default function ThumbnailImage({ src, alt }: ThumbnailImageProps) {
    return (
       <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md bg-zinc-800">
            <img src={src} alt={alt} className="h-full w-full obect-cover transition-transform duration-300 group-hover:scale-105" />
       </div>
    );
};