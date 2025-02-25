/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryBlue: '#204C5B',
                primaryGrey:"#D0D5DD",
                primaryGreen:"#204C5B",
                secondaryGreen:"#ECF8F6",
                primaryWhite:"#F7FAFC",
                secondaryGrey:"#636363",
                secondaryBlue:"#E3F2FD",
                tertiaryBlue:"#054BA6",
                tertiaryGrey:"#F7FAFC",
                quaternaryGrey:"#535862",
                primaryBlack:"#181D27",
                primaryDarkblue:"#122E39",
                secondaryGreen:"#CFF3E8"
            },
            height:{
                "custom":"520px"
            },
            width:{
                "custom":"450px"
            }
        },
    },
    plugins: [],
};
