"use client";

import type {ReactNode } from "react";

type BannerButtonProps = {
    label: string;
    variant?: "primary" | "secondary";
    icon?: ReactNode;
    onClick?: () => void;
};

export default function BannerButton({
    label, variant = "primary", icon, onClick
    }: BannerButtonProps) 
{
    const base = "inline-flex items-center gap-2 rounded px-5 py-2 text-sm font-semibold transition md:px-6 md:py-2.5 md:text-base";

    const variants = {
        primary: "bg-white text-black hover:bg-gray-200",
        secondary:
            "bg-gray-500/70 text-white hover:bg-gray-400/80 backdrop-blur-sm"
    } as const;

    return (
        <button onClick={onClick} className={`${base} ${variants[variant]}`}>
            {icon}
            <span>{label}</span>
        </button>
    );
 }
