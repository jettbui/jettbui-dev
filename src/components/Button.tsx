import React from "react";

type Props = {
    children: React.ReactNode;
    noBackground?: boolean;
    onClick?: () => void;
};

export default function Button({ children, onClick, noBackground }: Props) {
    const background = noBackground ? "" : "hover:bg-buttonPrimaryBgHover";

    return (
        <button
            className={`px-3 py-2 text-xs lg:text-sm xl:text-md 
            rounded-md transition-colors font-semibold
            text-buttonPrimary hover:text-buttonPrimaryHover
            ${background}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
