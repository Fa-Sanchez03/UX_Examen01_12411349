"use client";

import { useEffect, useState } from "react";
import BannerButtons from "../molecules/BannerButtons";

export default function Banner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isPlaying) {
      setShowVideo(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <section className="relative h-[60vh] min-h-[400px] md:h-[75vh] text-white -mt-16 overflow-hidden">

      <div className="absolute inset-0">
        {showVideo ? (
          <video
            src="/images/videoBanner.mp4"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture   
            controls={false}         
            className="h-full w-full object-cover pointer-events-none"
          />
        ) : (
          <div className="h-full w-full bg-[url('/images/bannerImage.jpg')] bg-cover bg-center" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-24">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            13 Reasons Why
          </h1>

          <p className="hidden md:block text-lg leading-relaxed text-gray-200 drop-shadow-lg">
            Una serie dramática y conmovedora que sigue a Clay Jensen mientras
            intenta desentrañar la verdad detrás de la cinta de audio que le dejó
            su compañera de clase Hannah Baker antes de suicidarse. Cada cinta revela
            una de las trece razones por las que ella decidió quitarse la vida,
            exponiendo secretos y el doloroso impacto del bullying, la agresión sexual
            y el abandono en la vida de los adolescentes.
          </p>

          <div className="mt-4">
            <BannerButtons onPlay={handlePlay} />
          </div>

          <p className="mt-3 text-xs text-gray-300">
            16+ • 4 temporadas • Drama adolescente
          </p>
        </div>
      </div>
    </section>
  );
}
