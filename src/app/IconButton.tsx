import React from "react";
import Link from "next/link";
import EmailOutline from "@public/svg/email-outline.svg";
import FileOutline from "@public/svg/file-outline.svg";
import GithubOutline from "@public/svg/github-outline.svg";
import LinkOutline from "@public/svg/link-2-outline.svg";
import LinkedinOutline from "@public/svg/linkedin-outline.svg";

type Props = {
    name: string;
    href: string;
    icon?: string;
};

export default function IconButton({ name, href, icon }: Props) {
    let iconComponent;
    switch (icon) {
        case "email-outline":
            iconComponent = <EmailOutline />;
            break;
        case "file-outline":
            iconComponent = <FileOutline />;
            break;
        case "github-outline":
            iconComponent = <GithubOutline />;
            break;
        case "linkedin-outline":
            iconComponent = <LinkedinOutline />;
            break;
        default:
            iconComponent = <LinkOutline />;
            break;
    }

    return (
        <Link
            href={href}
            target="_blank"
            className="aspect-square w-12 mx-2 first:ml-0 last:mr-0 
            text-buttonSecondary hover:text-buttonSecondaryHover 
            transition-colors hover:bg-buttonSecondaryBgHover 
            rounded-full p-2"
        >
            {iconComponent}
        </Link>
    );
}
