import { defineField, defineType } from "sanity";

export default defineType({
    name: "experience",
    title: "Experiences",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        }),
        defineField({
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                },
            ],
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }, { type: "image" }, { type: "code" }],
        }),
        defineField({
            name: "links",
            title: "Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "name",
                            title: "Name",
                            type: "string",
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: "href",
                            title: "URL",
                            type: "url",
                            validation: (rule) => rule.required(),
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
            media: "thumbnail",
        },
    },
});
