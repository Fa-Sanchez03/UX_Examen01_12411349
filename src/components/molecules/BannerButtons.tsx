import BannerButton from "../atoms/BannerButton";
import InfoIcon from "../atoms/InfoIcon";
import PlayIcon from "../atoms/PlayIcon";

export default function BannerButtons() {
    return (
        <div className="mt-4 flex flex-wrap gap-3 md:mt-6">
            <BannerButton 
                label="Reproducir"
                variant="primary"
                icon={<PlayIcon />}
            />
            <BannerButton
                label="Informacion adicional"
                variant="secondary"
                icon={<InfoIcon />}
            />
        </div>
    );
}