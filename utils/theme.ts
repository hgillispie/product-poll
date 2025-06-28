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
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  colors: {
    brand: {
      50: "#f5f1ff",
      100: "#ede4ff",
      200: "#dcc9ff",
      300: "#c8a8ff",
      400: "#b087ff",
      500: "#8247E5", // Builder purple
      600: "#7338d1",
      700: "#632bb8",
      800: "#52249a",
      900: "#451f7e",
    },
    accent: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b", // Soft yellow accent
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
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
      900: "#171717",
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
