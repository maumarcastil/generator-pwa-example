/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const withMT = require('@material-tailwind/react/utils/withMT')

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
