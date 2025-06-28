import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "_c",
};

const theme = extendTheme({
  config,
  fonts: {
    heading:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    body: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  colors: {
    // Design token colors
    purple: "#ac7ef4",
    pink: "#eeb1ca",
    lightBlue: "#18b6f6",
    darkBlue: "#006ce9",
    orange: "#ef6c41",
    yellow: "#f7c92e",
    green: "#33b533",
    black: "#000000",
    white: "#ffffff",
    dirtyBlack: "#1d2023",

    // Updated brand colors using design tokens
    brand: {
      50: "#f3f0fd",
      100: "#e8e1fb",
      200: "#d6c7f7",
      300: "#bfa1f1",
      400: "#ac7ef4", // From design tokens - purple
      500: "#9963e8",
      600: "#8649d4",
      700: "#7138b8",
      800: "#5d2f96",
      900: "#4d2979",
    },
    accent: {
      50: "#fefbf0",
      100: "#fef5dc",
      200: "#fde9b4",
      300: "#fcdb81",
      400: "#f7c92e", // From design tokens - yellow
      500: "#f4b91a",
      600: "#d99c0f",
      700: "#b47b0f",
      800: "#925f14",
      900: "#784f16",
    },
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#1d2023", // From design tokens - dirty black
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
            transform: "translateY(-1px)",
            boxShadow: "lg",
          },
          _active: {
            bg: "brand.700",
            transform: "translateY(0)",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
            transform: "translateY(-1px)",
          },
        },
        ghost: {
          color: "gray.600",
          _hover: {
            bg: "gray.100",
            color: "gray.800",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        color: "gray.900",
      },
      sizes: {
        xl: {
          fontSize: ["2.5rem", "3rem", "3.5rem"],
        },
        lg: {
          fontSize: ["1.75rem", "2rem", "2.25rem"],
        },
        md: {
          fontSize: ["1.25rem", "1.375rem", "1.5rem"],
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "white",
          borderRadius: "xl",
          border: "1px solid",
          borderColor: "gray.200",
          boxShadow: "sm",
          _hover: {
            boxShadow: "md",
            transform: "translateY(-2px)",
            borderColor: "brand.200",
          },
          transition: "all 0.2s ease-in-out",
        },
      },
    },
    Input: {
      variants: {
        filled: {
          field: {
            bg: "gray.50",
            _hover: {
              bg: "gray.100",
            },
            _focus: {
              bg: "white",
              borderColor: "brand.500",
            },
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#fafafa",
        color: "gray.800",
      },
    },
  },
});

export default theme;
