import Link from "next/link";
import Image from "next/image";

// TODO: Typing

export const PortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative max-h-96 max-w-96 m-10 mx-auto">
                    <Image
                        src={value?.asset?.url}
                        alt={value?.alt}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
            );
        },
        list: {
            bullet: ({ children }: any) => {
                return <ul className="list-disc list-inside">{children}</ul>;
            },
            numbered: ({ children }: any) => {
                return <ol className="list-decimal list-inside">{children}</ol>;
            },
        },
    },
    marks: {
        link: ({ value, children }: any) => {
            const target = (value?.href || "").startsWith("http")
                ? "_blank"
                : undefined;

            return (
                <Link href={value.href} target={target}>
                    {children}
                </Link>
            );
        },
    },
};
