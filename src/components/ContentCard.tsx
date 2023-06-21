import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import CornerUpRightOutline from "@public/svg/corner-up-right-outline.svg";
import ExternalLinkOutline from "@public/svg/external-link-outline.svg";
import { Experience } from "@typesDir/Experience";
import { Project } from "@typesDir/Project";

type Props = {
    content: Experience | Project;
    onClick?: () => void;
};

export default function ContentCard({ content, onClick }: Props) {
    const handleLinkClick = (href: string) => {
        window.open(href, "_blank");
    };

    return (
        <div
            className="flex flex-col mx-4 py-4 border-b first:pt-0 last:pb-0 last:border-none
            border-bgAccent w-full"
        >
            {/* Information and Image */}
            <div className="flex flex-row justify-between max-h-64 lg:max-h-48 xl:max-h-36">
                <div className="flex flex-col">
                    <h1 className="text-textSecondary font-semibold">
                        {content.subtitle}
                    </h1>
                    <h1 className="text-textPrimary font-semibold text-lg mb-1">
                        {content.title}
                    </h1>
                    <p className="text-textBody overflow-hidden text-ellipsis">
                        {content.description}
                    </p>
                </div>
                {/* Image */}
                {content.thumbnail && (
                    <div className="relative aspect-square h-16 lg:h-20 xl:h-24 ml-4">
                        {/* TODO: sizes prop for optimized rendering */}
                        <Image
                            src={content.thumbnail}
                            alt={"Thumbnail"}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                )}
            </div>
            {/* Buttons */}
            <div className="flex flex-row justify-end mt-1 gap-1">
                {content.links &&
                    content.links.map(({ name, href }, idx) => (
                        <Button key={idx} onClick={() => handleLinkClick(href)}>
                            <p className="inline-block align-middle">{name}</p>
                            <ExternalLinkOutline className="ml-1 inline-block w-4 align-middle" />
                        </Button>
                    ))}
                {content.content && (
                    <Button onClick={onClick}>
                        <p className="inline-block align-middle">Read more</p>
                        <CornerUpRightOutline className="ml-1 inline-block w-4 align-middle" />
                    </Button>
                )}
            </div>
        </div>
    );
}
