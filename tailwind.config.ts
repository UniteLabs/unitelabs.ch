import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";
import headlessuiPlugin from "@headlessui/tailwindcss";

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          50: "#F9FAFB",
          300: "#D1D5DB",
          600: "#4B5563",
          900: "#111827",
        },
        red: {
          50: "#F9E6EB",
          300: "#DC6785",
          600: "#C40233",
          900: "#76011F",
        },
        orange: {
          50: "#FFF3E6",
          300: "#FFB566",
          600: "#FF8400",
          900: "#994F00",
        },
        yellow: {
          50: "#FFFBE6",
          300: "#FFE566",
          600: "#FFD300",
          900: "#997F00",
        },
        green: {
          50: "#E6F5F0",
          300: "#66C5A6",
          600: "#009F6B",
          900: "#005F40",
        },
        teal: {
          50: "#E6F3F4",
          300: "#68B7BF",
          600: "#038794",
          900: "#025159",
        },
        blue: {
          50: "#E6F3F8",
          300: "#66B7D7",
          600: "#0087BD",
          900: "#005171",
        },
        purple: {
          50: "#FAF5FF",
          300: "#D8B4FE",
          600: "#9333EA",
          900: "#581C87",
        },
        pink: {
          50: "#FDF2F8",
          300: "#F9A8D4",
          600: "#DB2777",
          900: "#831843",
        },
      },
      minWidth: {
        'app': '320px',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: '50ch',
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.teal.600'),
              fontWeight: 'unset',
              '&:hover': {
                color: theme('colors.teal.900'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin(), headlessuiPlugin({})],
};
