import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#10B981", // Emerald-500
                    foreground: "#FFFFFF",
                    dark: "#065F46",    // Emerald-800
                    light: "#D1FAE5",   // Emerald-100
                    deep: "#064E3B",    // Emerald-900 (Forest)
                },
                accent: {
                    DEFAULT: "#F59E0B", // Amber-500 (Gold)
                    hover: "#D97706",   // Amber-600
                },
                "brand-dark": "#064E3B",
                "soft-bg": "#F8FAFC",
            },
            backgroundImage: {
                "hero-gradient": "linear-gradient(135deg, #064E3B 0%, #047857 100%)",
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};

export default config;
