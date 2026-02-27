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
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "#FFFFFF",
                    dark: "var(--primary-dark)",
                    light: "var(--primary-light)",
                    deep: "var(--primary-deep)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    hover: "var(--accent-hover)",
                },
                "brand-dark": "var(--brand-dark)",
                "soft-bg": "var(--soft-bg)",
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
