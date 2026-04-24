import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAFAF8',
          2: '#F4F3EE',
        },
        ink: {
          DEFAULT: '#0B0B0D',
          2: '#14141A',
          900: '#0B0B0D',
          700: '#2D2D33',
          500: '#5A5A63',
          300: '#9A9AA3',
          100: '#D6D6DC',
        },
        tech: {
          DEFAULT: '#2D5BFF',
          2: '#4A72FF',
        },
        brass: {
          DEFAULT: '#B8935F',
          2: '#9A7A4A',
        },
        success: '#1F7A4C',
        warning: '#B8860B',
        danger: '#A8322B',
        line: 'rgba(11,11,13,0.08)',
        'line-strong': 'rgba(11,11,13,0.16)',
      },
      fontFamily: {
        serif: ['var(--font-instrument-serif)', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter-tight)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        'site': '1360px',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'typing': 'typing 1.4s infinite ease-in-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.5' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
