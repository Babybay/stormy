/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Noto Sans', 'sans-serif'],
                display: ['Syne', 'Outfit', 'sans-serif'],
                heading: ['Space Grotesk', 'Outfit', 'sans-serif'],
            },
            colors: {
                'storm-bg': '#050505',
                'storm-card': '#121212',
                'storm-accent': '#a855f7',
                'storm-pink': '#ec4899',
                'storm-green': '#a3e635',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
            }
        },
    },
    plugins: [],
}
