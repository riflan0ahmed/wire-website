/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-50": "rgba(var(--primary-50),var(--tw-bg-opacity))",
        "primary-100": "rgba(var(--primary-100),var(--tw-bg-opacity))",
        "primary-200": "rgba(var(--primary-200),var(--tw-bg-opacity))",
        "primary-300": "rgba(var(--primary-300),var(--tw-bg-opacity))",
        "primary-400": "rgba(var(--primary-400),var(--tw-bg-opacity))",
        "primary-500": "rgba(var(--primary-500),var(--tw-bg-opacity))",
        "primary-600": "rgba(var(--primary-600),var(--tw-bg-opacity))",
        "primary-700": "rgba(var(--primary-700),var(--tw-bg-opacity))",
        "primary-800": "rgba(var(--primary-800),var(--tw-bg-opacity))",
        "primary-900": "rgba(var(--primary-900),var(--tw-bg-opacity))",
        "primary-950": "rgba(var(--primary-950),var(--tw-bg-opacity))",
        "secondary-50": "rgba(var(--secondary-50),var(--tw-bg-opacity))",
        "secondary-100": "rgba(var(--secondary-100),var(--tw-bg-opacity))",
        "secondary-200": "rgba(var(--secondary-200),var(--tw-bg-opacity))",
        "secondary-300": "rgba(var(--secondary-300),var(--tw-bg-opacity))",
        "secondary-400": "rgba(var(--secondary-400),var(--tw-bg-opacity))",
        "secondary-500": "rgba(var(--secondary-500),var(--tw-bg-opacity))",
        "secondary-600": "rgba(var(--secondary-600),var(--tw-bg-opacity))",
        "secondary-700": "rgba(var(--secondary-700),var(--tw-bg-opacity))",
        "secondary-800": "rgba(var(--secondary-800),var(--tw-bg-opacity))",
        "secondary-900": "rgba(var(--secondary-900),var(--tw-bg-opacity))",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".containers": {
          maxWidth: "1240px",
          width: "91.666667%",
          marginLeft: "auto",
          marginRight: "auto",
        },
      });
    },
  ],
};
