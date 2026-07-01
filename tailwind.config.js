/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // MA Square Brand Colors
        "evergreen": "#093D30",
        "evergreen-dark": "#05221B",
        "bright-gold": "#FCD717",
        "white-smoke": "#F2F3F2",
        "platinum": "#E1E2E1",
        
        // Dynamic theme mappings
        "primary": "var(--color-text)",
        "on-primary": "var(--color-bg)",
        "secondary": "#FCD717",
        "background": "var(--color-bg)",
        "surface": "var(--color-surface)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "on-background": "var(--color-text)",
        "on-surface": "var(--color-text)",
        "on-surface-variant": "var(--color-text)",
        "outline-variant": "var(--color-outline)",

        // 3D Folder Component Variables
        "card": "var(--card)",
        "card-foreground": "var(--card-foreground)",
        "border": "var(--border)",
        "accent": "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        "folder-back": "var(--folder-back)",
        "folder-front": "var(--folder-front)",
        "folder-tab": "var(--folder-tab)",
        "muted": "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "primary-foreground": "var(--primary-foreground)",
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px",
      },
      spacing: {
        "margin-desktop": "80px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "section-padding-y": "96px",
        "gutter": "24px",
        "stack-lg": "32px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "nav-link": ["Montserrat", "sans-serif"],
        "paragraph": ["Hanken Grotesk", "sans-serif"],
        "hero-subtitle": ["Hanken Grotesk", "sans-serif"],
        "section-heading-mobile": ["Montserrat", "sans-serif"],
        "section-heading": ["Montserrat", "sans-serif"],
        "hero-heading": ["Montserrat", "sans-serif"],
        "hero-heading-mobile": ["Montserrat", "sans-serif"],
        "logo": ["Montserrat", "sans-serif"],
        "display": ["Anton", "sans-serif"],
        "outfit": ["Outfit", "sans-serif"]
      },
    },
  },
  plugins: [],
}
