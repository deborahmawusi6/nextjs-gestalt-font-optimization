/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22C55E',        // Bright Green
        secondary: '#3B82F6',      // Bright Blue  
        accent: '#1E40AF',         // Dark Blue
        success: '#10B981',        // Emerald Green
        info: '#06B6D4',           // Cyan
        warning: '#F59E0B',        // Amber
        danger: '#EF4444',         // Red
        light: '#F8FAFC',          // Light Gray
        dark: '#1E293B',           // Dark Gray
      },
      animation: {
        'wave': 'wave 10s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-2%) translateY(-1%)' },
          '50%': { transform: 'translateX(-5%) translateY(-2%)' },
          '75%': { transform: 'translateX(-2%) translateY(-1%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(45deg, #22C55E, #3B82F6, #8B5CF6, #F59E0B)',
        'gradient-blue-green': 'linear-gradient(135deg, #3B82F6, #22C55E)',
        'gradient-green-blue': 'linear-gradient(135deg, #22C55E, #3B82F6)',
      },
    },
  },
  plugins: [],
}
