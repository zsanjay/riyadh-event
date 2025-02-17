/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': 'var(--customBlack)',
        'custom-teal': 'rgb(102, 252, 241)',
        'custom-green': 'rgb(53, 160, 112)',
      },

      fontFamily: {
        regular: ['Gotham-Regular'],
        book: ['Gotham-Book'],
        ultra: ['Gotham-Ultra']
      },
      boxShadow: {
        'custom-shadow': '7px 7px 10px 0px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: []
};
