import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F3EE',
        ink: '#1D1D1B',
        muted: '#77756F',
        accent: '#8A897C',
        line: '#DDDAD2'
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 40px rgba(29,29,27,0.07)'
      }
    }
  },
  plugins: []
};

export default config;
