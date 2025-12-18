/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Habilita dark mode baseado em classe
  theme: {
    extend: {
      colors: {
        // IT People Brand Colors - extracted from https://www.itpeople.pt/
        primary: {
          50: '#f5f9e8',
          100: '#e8f2d0',
          200: '#d4e5a8',
          300: '#b8d175',
          400: '#97ba41', // Main brand color
          500: '#93c01f', // Logo green
          600: '#7aa016',
          700: '#5f7b13',
          800: '#4e6415',
          900: '#425516',
        },
        // Additional IT People colors from logo
        brand: {
          lime: '#97ba41',
          green: '#93c01f',
          yellowGreen: '#D2D700',
          limeAlt: '#BBCE00',
        },
        // Text colors from site
        text: {
          dark: '#1e1e1e',
          gray: '#666666',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': { 
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' 
          },
          '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
          '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
          '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
          '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
          '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
        },
      },
    },
  },
  plugins: [],
}

