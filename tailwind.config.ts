import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                bestermind: ["Bestermind", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            keyframes: {
                gradient: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
            animation: {
                gradient: "gradient 8s linear infinite",
            },
        },
    },
    plugins: [],
} satisfies Config;
