import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                bestermind: ["Bestermind", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;
