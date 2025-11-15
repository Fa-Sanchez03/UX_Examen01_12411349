import BannerButton from "../atoms/BannerButton";
import InfoIcon from "../atoms/InfoIcon";
import PlayIcon from "../atoms/PlayIcon";

type BannerButtonsProps = {
    onPlay?: () => void;
}

export default function BannerButtons({onPlay}: BannerButtonsProps) {
    return (
        <div className="mt-4 flex flex-wrap gap-3 md:mt-6">
            <BannerButton 
                label="Reproducir"
                variant="primary"
                icon={<PlayIcon />}
                onClick={onPlay}
            />
            <BannerButton
                label="Informacion adicional"
                variant="secondary"
                icon={<InfoIcon />}
            />
        </div>
    );
}