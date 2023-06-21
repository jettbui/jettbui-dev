import { createClient, groq } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env";
import { HeaderData } from "@typesDir/Data";
import { Experience } from "@typesDir/Experience";
import { Project } from "@typesDir/Project";

export async function getLatestHeaderContent(): Promise<HeaderData> {
    const client = createClient({
        projectId,
        dataset,
        apiVersion,
    });
    // Query for the latest header content where isActive is true
    const query = groq`*[_type == "headerContent" && isActive == true]{
        createdAt,
        lastUpdated,
        subheaderText,
        "resumeFile": resumeFile.asset->url,
        linkButtons
    }`;

    return client.fetch(query).then((data: HeaderData[]) => {
        // Sort the data by createdAt
        data.sort((a, b) => {
            return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            );
        });

        // Return the first element
        return data[0];
    });
}

export async function getExperiences(): Promise<Experience[]> {
    const client = createClient({
        projectId,
        dataset,
        apiVersion,
    });
    const query = groq`*[_type == "experience"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        date,
        subtitle,
        "thumbnail": thumbnail.asset->url,
        description,
        content,
        links
    }`;

    return client.fetch(query);
}

export async function getExperience(slug: string): Promise<Experience> {
    const client = createClient({
        projectId,
        dataset,
        apiVersion,
    });
    const query = groq`*[_type == "experience" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        date,
        subtitle,
        "thumbnail": thumbnail.asset->url,
        description,
        content,
        links,
        content[]{
            ...,
            _type == "image" => {
                ...,
                asset->
            }
        }
    }`;

    return client.fetch(query, { slug });
}

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId,
        dataset,
        apiVersion,
    });
    const query = groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        date,
        subtitle,
        "thumbnail": thumbnail.asset->url,
        description,
        content,
        links
    }`;

    return client.fetch(query);
}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient({
        projectId,
        dataset,
        apiVersion,
    });
    const query = groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        date,
        subtitle,
        "thumbnail": thumbnail.asset->url,
        description,
        content,
        links,
        content[]{
            ...,
            _type == "image" => {
                ...,
                asset->
            }
        }
    }`;

    return client.fetch(query, { slug });
}
