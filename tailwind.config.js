/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                euclid: ["EuclidCircularA"],
            },
            colors: {
                primary: "#0BC96F",
                separator: "#061a3714",
            },
        },
    },
    plugins: [],
};
