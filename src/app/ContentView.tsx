"use client";

import React, { useState } from "react";
import ContentCard from "./ContentCard";
import { ContentData } from "@typesDir/Data";

type Props = {
    contentData: ContentData;
    initialCategory?: number;
};

export default function ContentView({ contentData, initialCategory }: Props) {
    // Validity check
    if (!initialCategory || initialCategory > contentData.length - 1) {
        initialCategory = undefined;
    }

    const [activeCategory, setActiveCategory] = useState<number>(
        initialCategory || 0
    );

    const { title: activeCategoryTitle, data: activeCategoryContent } =
        contentData[activeCategory];

    const handleCategoryClick = (idx: number) => {
        setActiveCategory(idx);
    };

    const getSlug = (idx: number) => {
        const content = activeCategoryContent[idx];

        // redirect in current window
        let categorySlug;
        switch (activeCategoryTitle) {
            case "Experiences":
                categorySlug = "experiences";
                break;
            case "Projects":
                categorySlug = "projects";
                break;
            default:
                categorySlug = undefined;
        }

        if (!categorySlug || !content.slug) return;

        return `/${categorySlug}/${content.slug}`;
    };

    if (!contentData || contentData.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col items-center p-6 w-full lg:w-[32rem] xl:w-[40rem]">
            <div className="flex flex-row mb-4 max-w-2xl">
                {contentData.map((category, idx) => {
                    if (category.data.length === 0) return null;

                    const activeClasses =
                        idx === activeCategory
                            ? "underline bg-buttonSecondaryBgHover text-buttonSecondaryActive"
                            : "text-textSecondary";

                    return (
                        <button
                            key={idx}
                            className={`mx-2 px-4 p-2 text-sm lg:text-md xl:text-lg font-semibold 
                            uppercase rounded-md tracking-wide transition-colors 
                            hover:text-buttonSecondaryActive hover:bg-buttonSecondaryBgHover
                            ${activeClasses}`}
                            onClick={() => handleCategoryClick(idx)}
                        >
                            {category.title}
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-col items-center w-full">
                {activeCategoryContent.map((content, idx) => {
                    return (
                        <ContentCard
                            key={idx}
                            content={content}
                            slug={getSlug(idx)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
