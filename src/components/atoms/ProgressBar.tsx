type ProgressBarProps = {
    value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
    const safeValue = Math.max(0, Math.min(100,value));
    return (
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded bg-gray-700">
            <div className="h-full bg-red-600" style={{width: `${safeValue}%`}}></div>
        </div>
    );
}