// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
          // Sophisticated primary colors with a unique blue-violet gradient feel
          primary: {
            50: '#F4F7FE',
            100: '#E9EDFC',
            200: '#D4DBF9',
            300: '#B3BEF4',
            400: '#8D9BED',
            500: '#6B7DE8',  // Main brand color
            600: '#4F63DB',
            700: '#3A4BC7',
            800: '#2B38A4',
            900: '#1F2875',
            950: '#131849'
          },
          // Modern success colors with a slight teal tint
          success: {
            50: '#EDFDF8',
            100: '#D3FBE7',
            200: '#A8F5D3',
            300: '#72E5B8',
            400: '#3FC89D',
            500: '#1CA981',
            600: '#128A69',
            700: '#0E6D55',
            800: '#0B5644',
            900: '#084737'
          },
          // Vibrant danger colors
          danger: {
            50: '#FEF2F2',
            100: '#FFE1E1',
            200: '#FFC7C7',
            300: '#FF9E9E',
            400: '#FF6B6B',
            500: '#FF3B3B',
            600: '#EE2121',
            700: '#D41515',
            800: '#B01212',
            900: '#8B1010'
          },
          // Dark mode optimized grays
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
            950: '#030712'
          },
          // Additional accent colors for UI elements
          accent: {
            purple: '#8B5CF6',
            teal: '#14B8A6',
            amber: '#F59E0B',
            indigo: '#6366F1'
          },
          background: {
            light: '#FFFFFF',
            dark: '#0A0A0A'
          }
        },
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
          display: ['Clash Display', 'Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace']
        },
        boxShadow: {
          'glow-sm': '0 2px 8px -1px rgba(107, 125, 232, 0.15)',
          'glow-md': '0 4px 12px -2px rgba(107, 125, 232, 0.25)',
          'glow-lg': '0 8px 24px -4px rgba(107, 125, 232, 0.35)',
          'inner-glow': 'inset 0 2px 4px 0 rgba(107, 125, 232, 0.05)',
          'glass': '0 0 15px 0 rgba(255, 255, 255, 0.05)'
        },
        borderRadius: {
          'input': '0.75rem',
          'card': '1.25rem'
        },
        animation: {
          'gradient': 'gradient 8s linear infinite',
          'float': 'float 3s ease-in-out infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        },
        keyframes: {
          gradient: {
            '0%, 100%': {
              'background-position': '0% 50%'
            },
            '50%': {
              'background-position': '100% 50%'
            }
          },
          float: {
            '0%, 100%': {
              transform: 'translateY(0)'
            },
            '50%': {
              transform: 'translateY(-10px)'
            }
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
          'glow-gradient': 'linear-gradient(to right, var(--primary-500), var(--accent-purple))'
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms')({
        strategy: 'class'
      })
    ]
  }