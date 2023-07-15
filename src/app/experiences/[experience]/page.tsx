import { cache } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { PortableText } from "@portabletext/react";
import Button from "@/components/Button";
import NotFound from "@/components/NotFound";
import { getExperience } from "@sanity/sanity-utils";
import ArrowBackOutline from "@public/svg/arrow-back-outline.svg";
import ExternalLinkOutline from "@public/svg/external-link-outline.svg";
import { PortableTextComponents } from "@/components/PortableTextComponents";

const getContent = cache(async (slug: string) => {
    const content = await getExperience(slug);
    return content;
});

type Props = {
    params: {
        experience: string;
    };
};

export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.experience;
    const content = await getContent(slug);

    if (!content || !content.content) {
        return {
            title: "Not Found",
            description: "Not Found",
        };
    }

    return {
        title: content.title + " / jettbui.dev",
        description: content.subtitle,
    };
}

export default async function ExperiencePage({ params }: Props) {
    const slug = params.experience;
    const content = await getContent(slug);
    const previousParams = "?category=0";

    if (!content || !content.content) {
        return <NotFound />;
    }

    return (
        <main
            className="flex flex-col items-center justify-start min-h-screen bg-bgSecondary
                         p-4 lg:p-8 xl:p-16"
        >
            <div className="flex flex-col w-full lg:w-[48rem] xl:w-[48rem]">
                {/* Header */}
                <div className="mb-2">
                    <Button
                        href={`/${previousParams}`}
                        target="_self"
                        noBackground
                    >
                        <ArrowBackOutline className="mr-1 inline-block w-4 align-middle" />
                        <p className="inline-block align-middle">Go back</p>
                    </Button>
                </div>
                {/* content.thumbnail && (
                    <div className="relative aspect-square h-16 lg:h-20 xl:h-24 w-24">
                        <Image
                            src={content.thumbnail}
                            alt={"Thumbnail"}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ) */}
                <h1 className="text-md lg:text-lg xl:text-xl font-semibold mt-2 text-textSecondary">
                    {content.subtitle}
                </h1>
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-textPrimary">
                    {content.title}
                </h1>
                {/* Content */}
                {content.content && (
                    <div className="pt-2 pb-4 text-textBody">
                        <PortableText
                            value={content.content}
                            components={PortableTextComponents}
                        />
                    </div>
                )}
                {/* Links */}
                <div className="flex flex-rol justify-start gap-1 mt-3">
                    {content.links &&
                        content.links.map(({ name, href }, idx) => (
                            <Button
                                key={idx}
                                href={href}
                                target="_blank"
                                noBackground
                            >
                                <p className="inline-block align-middle">
                                    {name}
                                </p>
                                <ExternalLinkOutline className="ml-1 inline-block w-4 align-middle" />
                            </Button>
                        ))}
                </div>
            </div>
        </main>
    );
}
