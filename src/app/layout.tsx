import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

// TODO: CMS for metadata
export const metadata = {
    title: "Jett Bui / jettbui.dev",
    description:
        "Hi, I'm Jett! I'm an aspiring software engineer and a student at the University of California, San Diego. You can find points of contact and more about me here!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // FIXME: Use global color for scrollbar
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans bg-bgPrimary overflow-y-scroll
                            scrollbar-thin  scrollbar-track-[#f1f1f1]
                          dark:scrollbar-thumb-[#94a3b8] dark:scrollbar-track-[#0b1120]`}
            >
                {children}
            </body>
        </html>
    );
}
