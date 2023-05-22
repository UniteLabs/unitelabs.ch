import headlessuiPlugin from "@headlessui/tailwindcss";
import typographyPlugin from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config, PluginAPI } from "tailwindcss/types/config";

export default <Config>{
  content: ["content/**/*.md"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Assistant", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        red: {
          50: "#f9e6eb",
          300: "#dc6785",
          600: "#c40233",
          900: "#76011f",
        },
        orange: {
          50: "#fff3e6",
          300: "#ffb566",
          600: "#ff8400",
          900: "#994f00",
        },
        yellow: {
          50: "#fffbe6",
          300: "#ffe566",
          600: "#ffd300",
          900: "#997f00",
        },
        green: {
          50: "#e6f5f0",
          300: "#66c5a6",
          600: "#009f6b",
          900: "#005f40",
        },
        teal: {
          50: "#e6f3f4",
          300: "#68b7bf",
          600: "#038794",
          900: "#025159",
        },
        blue: {
          50: "#e6f3f8",
          300: "#66b7d7",
          600: "#0087bd",
          900: "#005171",
        },
        purple: {
          50: "#faf5ff",
          300: "#d8b4fe",
          600: "#9333ea",
          900: "#581c87",
        },
        pink: {
          50: "#fdf2f8",
          300: "#f9a8d4",
          600: "#db2777",
          900: "#831843",
        },
      },
      spacing: {
        screen: "100vh",
      },
      minWidth: {
        app: "320px",
      },
      gridTemplateRows: {
        "8": "repeat(8, minmax(0, 1fr))",
        "9": "repeat(9, minmax(0, 1fr))",
        "10": "repeat(10, minmax(0, 1fr))",
      },
      strokeWidth: {
        "3": "3px",
        "4": "4px",
        "5": "5px",
        "6": "6px",
        "7": "7px",
        "8": "8px",
        "9": "9px",
      },
      typography: (theme: PluginAPI["theme"]) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme("colors.teal.600"),
            '--tw-prose-invert-links': theme("colors.teal.300"),
            '--tw-prose-bullets': theme('colors.gray.500'),
            '--tw-prose-invert-bullets': theme('colors.gray.400'),
            a: {
              fontWeight: "unset",
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin(), headlessuiPlugin({})],
};
