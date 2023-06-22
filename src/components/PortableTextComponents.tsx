import Link from "next/link";
import Image from "next/image";
import { PortableTextReactComponents } from "@portabletext/react";

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: ({ value }) => {
            return (
                <div className="relative w-full h-64 m-10 mx-auto">
                    <Image
                        src={value?.asset?.url}
                        alt={value?.alt}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
            );
        },
        code: ({ value }) => {
            return (
                <pre className="text-textPrimary bg-bgPrimary py-2 px-4 my-4 rounded-md">
                    <code className="whitespace-pre-wrap">{value?.code}</code>
                </pre>
            );
        },
    },
    marks: {
        link: ({ value, children }) => {
            const target = (value?.href || "").startsWith("http")
                ? "_blank"
                : undefined;

            return (
                <Link
                    className="text-textPrimary underline"
                    href={value.href}
                    target={target}
                >
                    {children}
                </Link>
            );
        },
    },
    block: {
        h1: ({ children }) => {
            return (
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-textPrimary my-2 mt-4">
                    {children}
                </h1>
            );
        },
        h2: ({ children }) => {
            return (
                <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-textPrimary my-2 mt-4">
                    {children}
                </h2>
            );
        },
        h3: ({ children }) => {
            return (
                <h3 className="text-md lg:text-lg xl:text-xl font-bold text-textPrimary my-2 mt-4">
                    {children}
                </h3>
            );
        },
        h4: ({ children }) => {
            return (
                <h4 className="text-md lg:text-lg xl:text-xl font-bold text-textPrimary my-2 mt-4">
                    {children}
                </h4>
            );
        },
        h5: ({ children }) => {
            return (
                <h5 className="text-md lg:text-lg xl:text-xl font-bold text-textPrimary my-2 mt-4">
                    {children}
                </h5>
            );
        },
        h6: ({ children }) => {
            return (
                <h6 className="text-sm lg:text-md xl:text-lg font-bold text-textPrimary my-2 mt-4">
                    {children}
                </h6>
            );
        },
        normal: ({ children }) => {
            return <p className="my-2">{children}</p>;
        },
        blockquote: ({ children }) => {
            return (
                <blockquote className="border-l-2 border-textPrimary pl-2 my-4">
                    {children}
                </blockquote>
            );
        },
    },
    list: {
        bullet: ({ children }) => {
            return <li className="list-disc list-inside">{children}</li>;
        },
        number: ({ children }) => {
            return <ol className="list-decimal list-inside">{children}</ol>;
        },
    },
};
