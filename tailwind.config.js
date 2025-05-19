/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#0A3B25',
        'medium-green': '#4A8065',
        'cream': '#E8EDDD',
        'cream-darker': '#DBE0D0',
        'profile-bg': '#DCBBB6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['2.75rem', '1.2'],
        'mobile-hero': ['2rem', '1.2'],
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'card': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDelay: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
    },
  },
  plugins: [],
};