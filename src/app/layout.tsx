import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

// TODO: CMS for metadata
export const metadata: Metadata = {
    title: "Jett Bui / jettbui.dev",
    description:
        "Hi, I'm Jett! I'm an aspiring software engineer and a student at the University of California, San Diego. You can find points of contact and more about me here!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans bg-bgPrimary overflow-y-scroll`}>
                {children}
            </body>
        </html>
    );
}
