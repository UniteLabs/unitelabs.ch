import { readdirSync, readFileSync } from "node:fs";
import { join, parse } from "node:path";
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config, PluginAPI } from "tailwindcss/types/config";

const PATTERNS = "./assets/patterns";

const SPACING = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
};

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
        sans: [
          ["Inter var", ...defaultTheme.fontFamily.sans],
          {
            fontFeatureSettings: '"case", "cv11", "ss01", "ss03"',
            fontVariationSettings: "normal",
          },
        ],
      },
      minWidth: SPACING,
      minHeight: SPACING,
      spacing: SPACING,
      // colors: {
      //   gray: {
      //     50: "#f9fafb",
      //     100: "#f3f4f6",
      //     200: "#e5e7eb",
      //     300: "#d1d5db",
      //     400: "#9ca3af",
      //     500: "#6b7280",
      //     600: "#4b5563",
      //     700: "#374151",
      //     800: "#1f2937",
      //     900: "#111827",
      //   },
      //   red: {
      //     50: "#f9e6eb",
      //     300: "#dc6785",
      //     600: "#c40233",
      //     900: "#76011f",
      //   },
      //   orange: {
      //     50: "#fff3e6",
      //     300: "#ffb566",
      //     600: "#ff8400",
      //     900: "#994f00",
      //   },
      //   yellow: {
      //     50: "#fffbe6",
      //     300: "#ffe566",
      //     600: "#ffd300",
      //     900: "#997f00",
      //   },
      //   green: {
      //     50: "#e6f5f0",
      //     300: "#66c5a6",
      //     600: "#009f6b",
      //     900: "#005f40",
      //   },
      //   teal: {
      //     50: "#e6f3f4",
      //     300: "#68b7bf",
      //     600: "#038794",
      //     900: "#025159",
      //   },
      //   blue: {
      //     50: "#e6f3f8",
      //     300: "#66b7d7",
      //     600: "#0087bd",
      //     900: "#005171",
      //   },
      //   purple: {
      //     50: "#faf5ff",
      //     300: "#d8b4fe",
      //     600: "#9333ea",
      //     900: "#581c87",
      //   },
      //   pink: {
      //     50: "#fdf2f8",
      //     300: "#f9a8d4",
      //     600: "#db2777",
      //     900: "#831843",
      //   },
      // },
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-t":
          "radial-gradient(100% 100% at top, var(--tw-gradient-stops))",
        "gradient-radial-tr":
          "radial-gradient(100% 100% at top right, var(--tw-gradient-stops))",
        "gradient-radial-r":
          "radial-gradient(100% 100% at right, var(--tw-gradient-stops))",
        "gradient-radial-br":
          "radial-gradient(100% 100% at bottom right, var(--tw-gradient-stops))",
        "gradient-radial-b":
          "radial-gradient(100% 100% at bottom, var(--tw-gradient-stops))",
        "gradient-radial-bl":
          "radial-gradient(100% 100% at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-l":
          "radial-gradient(100% 100% at left, var(--tw-gradient-stops))",
        "gradient-radial-tl":
          "radial-gradient(100% 100% at top left, var(--tw-gradient-stops))",
        /** patterns */
        ...readdirSync(join(__dirname, PATTERNS)).reduce(
          (patterns, file) => ({
            ...patterns,
            [parse(file).name]: `url("data:image/svg+xml,${encodeURIComponent(
              readFileSync(join(__dirname, PATTERNS, file), {
                encoding: "utf-8",
              }).replace(/\s+/g, " ")
            )}")`,
          }),
          {}
        ),
      },
      typography: (theme: PluginAPI["theme"]) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.teal.600"),
            "--tw-prose-invert-links": theme("colors.teal.300"),
            "--tw-prose-bullets": theme("colors.gray.500"),
            "--tw-prose-invert-bullets": theme("colors.gray.400"),
            a: {
              fontWeight: "unset",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("@headlessui/tailwindcss"),
    plugin(({ matchUtilities, addUtilities, theme }) => {
      matchUtilities(
        { mask: (value) => ({ "mask-position": value }) },
        { values: theme("backgroundPosition"), type: ["lookup", "position"] }
      );
      matchUtilities(
        { mask: (value) => ({ "mask-image": value }) },
        { values: theme("backgroundImage"), type: ["lookup", "image", "url"] }
      );
      matchUtilities(
        { mask: (value) => ({ "mask-size": value }) },
        {
          values: theme("backgroundSize"),
          type: ["lookup", "length", "percentage"],
        }
      );
      addUtilities({
        ".mask-repeat": { "mask-repeat": "repeat" },
        ".mask-no-repeat": { "mask-repeat": "no-repeat" },
        ".mask-repeat-x": { "mask-repeat": "repeat-x" },
        ".mask-repeat-y": { "mask-repeat": "repeat-y" },
        ".mask-repeat-round": { "mask-repeat": "round" },
        ".mask-repeat-space": { "mask-repeat": "space" },
      });
      addUtilities({
        ".mask-origin-border": { "mask-origin": "border-box" },
        ".mask-origin-padding": { "mask-origin": "padding-box" },
        ".mask-origin-content": { "mask-origin": "content-box" },
      });
    }),
  ],
};
