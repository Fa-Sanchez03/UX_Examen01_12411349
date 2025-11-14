type NavItemProps = {
    label: string;
    isActive?: boolean;
};

export default function NavItem({ label, isActive }: NavItemProps) {
    return (
        <button
                className={`text-xs md:text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-gray-300"
                } hover:text-white`}
                >
                {label}
        </button>
    );
}