import Image from "next/image";
import IconButton from "@/components/IconButton";
import ContentView from "@/components/ContentView";
import profilePic from "@public/images/profile.jpg";
import {
    getLatestHeaderContent,
    getExperiences,
    getProjects,
} from "@sanity/sanity-utils";
import { defaultSubheaderText, defaultLinkButtons } from "@/DefaultData";
import { ContentData } from "@typesDir/Data";

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
};

export default async function Home({ searchParams }: Props) {
    const [headerData, experiences, projects] = await Promise.all([
        getLatestHeaderContent(),
        getExperiences(),
        getProjects(),
    ]);

    const subheaderText = headerData?.subheaderText || defaultSubheaderText;
    const linkButtons = headerData?.linkButtons || defaultLinkButtons;

    const resumeButton = headerData?.resumeFile && (
        <IconButton
            name="Resume"
            href={headerData.resumeFile}
            icon="file-outline"
        />
    );

    const contentData: ContentData = [
        {
            title: "Experiences",
            data: experiences.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }),
        },
        {
            title: "Projects",
            data: projects.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }),
        },
    ];

    const initialCategory = searchParams.category
        ? parseInt(searchParams.category as string)
        : undefined;

    return (
        <main className="flex flex-col items-center justify-start min-h-screen">
            {/* Header */}
            <div
                className="flex flex-col-reverse lg:flex-row items-center lg:justify-start 
                p-8 lg:p-16 xl:p-24"
            >
                {/* Title & Buttons */}
                <div className="flex flex-col p-4 max-w-2xl">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-textPrimary">
                        Jett Bui
                    </h1>
                    <h2 className="text-md lg:text-lg xl:text-xl font-normal mb-4 text-textSecondary">
                        {subheaderText}
                    </h2>
                    <div className="flex -ml-2">
                        {resumeButton}
                        {linkButtons.map(({ name, href, icon }, idx) => (
                            <IconButton
                                key={idx}
                                name={name}
                                href={href}
                                icon={icon}
                            />
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex justify-center items-center w-36 lg:w-48 xl:w-64 lg:ml-16">
                    <div className="absolute flex justify-center items-center">
                        <div className="absolute border border-bgAccent rounded-full opacity-30 h-[156px] w-[156px] lg:h-[204px] lg:w-[204px] xl:h-[268px] xl:w-[268px] animate-pulse" />
                        <div className="absolute border border-bgAccent rounded-full opacity-30 h-[168px] w-[168px] lg:h-[216px] lg:w-[216px] xl:h-[280px] xl:w-[280px] animate-ping" />
                    </div>
                    <div className="w-full h-full aspect-square relative rounded-full object-fill overflow-hidden shrink-0">
                        {/* TODO: sizes prop for optimized rendering */}
                        <Image
                            src={profilePic}
                            alt="Picture of me"
                            fill
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="w-full min-h-screen grow flex justify-center bg-bgSecondary">
                <ContentView
                    contentData={contentData}
                    initialCategory={initialCategory}
                />
            </div>
        </main>
    );
}
