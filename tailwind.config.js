/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-500': '#6B7280',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
        'blue-200': '#BFDBFE',
        'blue-500': '#3B82F6',
        'blue-600': '#2563EB',
      },
    },
  },
  plugins: [],
}
