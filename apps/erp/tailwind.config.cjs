const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        active: {
          DEFAULT: "hsl(var(--active))",
          foreground: "hsl(var(--active-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        DEFAULT: `
          0px 3px 6px -3px var(--base-shadow-color, --tw-shadow-color),
          0px 2px 4px -2px var(--base-shadow-color, --tw-shadow-color),
          0px 1px 2px -1px var(--base-shadow-color, --tw-shadow-color),
          0px 1px 1px -1px var(--base-shadow-color, --tw-shadow-color),
          0px 1px 0px -1px var(--base-shadow-color, --tw-shadow-color)
        `,
        button: "var(--button-shadow)",
        popover: "var(--popover-shadow)",
        "dropdown-item": "var(--dropdown-item-shadow)",
        "button-base": "var(--button-base-shadow)",
        "button-primary": "var(--button-primary-shadow)",
        "button-danger": "var(--button-danger-shadow)",
        "inset-image-border": "inset 0px 0px 0px 1px var(--border-primary)",
        "select-item":
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), inset 0px 1px 0px rgb(255 255 255 / 0.02), inset 0px 0px 0px 1px rgb(255 255 255 / 0.02), 0px 1px 2px rgb(0 0 0 / 0.12), 0px 2px 4px rgb(0 0 0 / 0.08), 0px 0px 0px 0.5px rgb(0 0 0 / 0.24);",
      },
      boxShadowColor: {
        DEFAULT: "var(--base-shadow-color)",
      },
      fontSize: {
        xxs: "0.675rem",
      },
      fontFamily: {
        sans: ["Geist Variable", ...fontFamily.sans],
        mono: ["Geist Mono Variable", ...fontFamily.mono],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Modern animation keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          'from': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Modern animations
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      screens: {
        tall: { raw: "(min-height: 769px)" },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'modern': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'modern-dark': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(139, 92, 246, 0.5)',
      },
      borderRadius: {
        'modern': '1rem',
        'modern-lg': '1.5rem',
        'modern-xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
