/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: {
          light: '#f1f5f9',
          dark: '#0f172a',
        },
        backgroundColor: {
          light: '#f1f5f9',
          dark: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           light: 'slate-50',
//           dark: 'slate-800',
//         },
//         secondary: {
//           light: '#6cb2eb',
//           dark: '#4a5568',
//         },
//       },
//     },
//   },
//   plugins: [],
// }


