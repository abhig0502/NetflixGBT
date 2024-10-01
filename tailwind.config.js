/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        fadeOut: "fadeIn 2s ease-in-out",
        slideIn: 'slideIn 1s ease-in-out',
        bounceCustom: 'bounceCustom 2s infinite',
        scaleUp: 'scaleUp 0.6s ease-in-out',
        rotate: 'rotate 1s linear 0.1s',
        zoomIn: 'zoomIn 1s ease-in-out',
        zoomOut: 'zoomOut 1s ease-in-out',
        pulseCustom: 'pulseCustom 1.5s ease-in-out infinite',

      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 }, // Start with opacity 0
          "100%": { opacity: 1 }, // End with opacity 1
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' },
        },
        pulseCustom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
