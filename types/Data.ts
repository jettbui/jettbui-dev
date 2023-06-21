import { Experience } from "./Experience";
import { Project } from "./Project";

export interface HeaderData {
    createdAt: Date;
    lastUpdated: Date;
    subheaderText: string;
    resumeFile: string;
    linkButtons: {
        name: string;
        href: string;
        icon?: string;
    }[];
}

export type ContentData = {
    title: string;
    data: Experience[] | Project[];
}[];
