import { PortableTextBlock } from "sanity";

export interface Project {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    date: Date;
    subtitle?: string;
    thumbnail?: string;
    description?: string;
    content?: PortableTextBlock[];
    links?: {
        name: string;
        href: string;
    }[];
}
