import React from "react";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href?: string;
    target?: string;
    noBackground?: boolean;
};

export default function Button({
    children,
    href,
    target,
    noBackground,
}: Props) {
    const background = noBackground
        ? ""
        : "px-3 py-2 hover:bg-buttonPrimaryBgHover";

    return (
        <Link
            className={` text-xs lg:text-sm xl:text-md 
            rounded-md transition-colors font-semibold
            text-buttonPrimary hover:text-buttonPrimaryHover
            hover:cursor-pointer
            ${background}`}
            href={href ?? "#"}
            target={target}
        >
            {children}
        </Link>
    );
}
