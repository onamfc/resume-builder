module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#243554',
                    teal: '#3ecac2',
                    dark: '#1d1d1d',
                    lightgray: '#eeeeee',
                },
            },
            fontFamily: {
                heading: ['"Georgia"', 'serif'], // for headings
                body: ['"Inter"', 'sans-serif'], // for body
            },
        },
    },
    plugins: [],
}
