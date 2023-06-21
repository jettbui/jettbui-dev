import { defineField, defineType } from "sanity";

export default defineType({
    name: "headerContent",
    title: "Header Content",
    type: "document",
    fields: [
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            readOnly: true,
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "lastUpdated",
            title: "Last Updated",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "subheaderText",
            title: "Subheader Text",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "resumeFile",
            title: "Resume File",
            type: "file",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "linkButtons",
            title: "Link Buttons",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                            validation: (rule) => rule.required(),
                        },
                        {
                            name: "href",
                            title: "Href",
                            type: "string",
                            validation: (rule) => rule.required(),
                        },
                        {
                            name: "icon",
                            title: "Icon",
                            type: "string",
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: "isActive",
            title: "Is Active?",
            type: "boolean",
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: "subheaderText",
            subtitle: "lastUpdated",
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: `Last Updated: ${new Date(
                    subtitle
                ).toLocaleString()}`,
            };
        },
    },
});
