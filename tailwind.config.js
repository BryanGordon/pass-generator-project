/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '32px',
        'h2': '24px',
        'h3': '18.72px',
        'h4': '16px',
        'h5': '13.28px',
        'h6': '10.72px'
      }
    }
  },
  plugins: []
}
