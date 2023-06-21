import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

// TODO: CMS for metadata
export const metadata = {
    title: "Personal Website / Jett Bui",
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
            <body className={`${inter.variable} font-sans bg-bgPrimary`}>
                {children}
            </body>
        </html>
    );
}
