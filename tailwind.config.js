/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                bgPrimary: "var(--background-primary)",
                bgSecondary: "var(--background-secondary)",
                bgAccent: "var(--background-accent)",
                scrollbarThumb: "var(--scrollbar-thumb)",
                scrollbarTrack: "var(--scrollbar-track)",
                textPrimary: "var(--text-primary)",
                textSecondary: "var(--text-secondary)",
                textBody: "var(--text-body)",
                buttonPrimary: "var(--button-primary)",
                buttonPrimaryActive: "var(--button-primary-active)",
                buttonPrimaryHover: "var(--button-primary-hover)",
                buttonPrimaryBgHover: "var(--button-primary-bg-hover)",
                buttonSecondary: "var(--button-secondary)",
                buttonSecondaryActive: "var(--button-secondary-active)",
                buttonSecondaryHover: "var(--button-secondary-hover)",
                buttonSecondaryBgHover: "var(--button-secondary-bg-hover)",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
