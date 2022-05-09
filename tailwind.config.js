const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'media',
    content: [
      './index.html',
      './src/js/**/*.{js,vue}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },

            colors: {...colors},
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
