import BannerButtons from "../molecules/BannerButtons";

export default function Banner() {
    return (
        <section className="relative h-[60vh] min-h-[400px] md:h-[70vh] text-white">
            {/* Imagen de Fondo*/}
            <div className = "absolute inset-0">
                <div className = "h-full wfull bg-[url('/bannerImage.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"/>"
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent"/>
            </div>

            {/* Contenido  */}
            <div className="relative z-10 flex h-full flex-col justify-center px-4 md:px-16">
                <div className="max-w-xl space-y-3 md:space-y-5">
                    <p className="text-xs font-semibold uppercase text-red-500 md:text-sm">
                        NETFLIX ORIGINAL
                    </p>

                    <h1 className="text-3xl font-extrabold drop-shadow-md md:text-5xl lg:text-6xl">
                        13 Reasons Why
                    </h1>

                    <p className="max-w-xl text-xs text-gray-200 md:text-base">
                        Una serie dramática y conmovedora que sigue a Clay Jensen mientras
                        intenta desentrañar la verdad detrás de la cinta de audio que le dejó
                        su compañera de clase Hannah Baker antes de suicidarse. Cada cinta
                        revela una de las trece razones por las que ella decidió quitarse la
                        vida, exponiendo secretos y el doloroso impacto del bullying, la
                        agresión sexual y el abandono en la vida de los adolescentes.
                    </p>

                    <BannerButtons />

                    <p className="mt-2 text-[10px] text-gray-300 md:text-xs">
                        16+ • 4 temporadas • Drama adolescente
                    </p>
                </div>
            </div>
        </section> 
    );
}