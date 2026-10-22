import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './views/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      screens: {
        '2xl': '1600px',
      },
      colors: {
        text: {
          dark: 'var(--text-dark)',
          light: 'var(--text-light)',
        },
        primary: {
          DEFAULT: 'var(--primary-default)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'var(--secondary-default)',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        primaryBg: 'var(--primary-bg)',
        cardBg: 'var(--card-bg)',
        border: 'rgba(185, 190, 210, 0.5)',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundImage: {
        headerFooterGradient:
          'linear-gradient(90deg, #2A2A2C 0%, #414145 57%, #2A2A2C 100%)',
      },
      borderRadius: {
        menuRadius: '0px, 0px, 8px, 8px',
      },
      boxShadow: {
        shadow1: '2px 2px 8px 0 rgba(41, 73, 130, 0.15)',
        shadowSecondary: '0px -3px 0px 0px rgba(65 , 65, 69, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        rotate: {
          '0%': {
            rotate: '270deg',
          },
          '100%': {
            rotate: '0deg',
          },
        },
        slideUpEnter: {
          '0%': {
            opacity: '0',
            translate: '0 1.5rem',
          },
          '100%': {
            opacity: '1',
            translate: '0',
          },
        },
        slideUpLeave: {
          '0%': {
            opacity: '1',
            translate: '0',
          },
          '100%': {
            opacity: '0',
            translate: '0 1.5rem',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        rotate: 'rotate 0.25s ease-out',
        slideUpEnter: 'slideUpEnter .3s ease-in-out',
        slideUpLeave: 'slideUpLeave .3s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
