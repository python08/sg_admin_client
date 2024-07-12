import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import { color } from "@global/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Tajawal", "Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.

const rawTheme = createTheme({
  palette: {
    primary: {
      light: "#69696a",
      main: "#28282a",
      dark: "#1e1e1f",
    },
    secondary: {
      light: "#fff5f8",
      main: "#ff3366",
      dark: "#e62958",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          color: color.main.primary,
          borderRadius: "10px",
          borderColor: color.main.primary,
          "&:hover": {
            backgroundColor: color.main.secondary,
            border: `1px solid ${color.main.secondary}`,
            color: color.main.pureWhite,
          },
        },
      },
    },
  },
});

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
    },
  },
  typography: {
    ...rawTheme.typography,
    h1: {
      ...rawTheme.typography.h1,
      letterSpacing: 0,
      fontSize: "2rem",
    },
    h2: {
      ...rawTheme.typography.h2,
      fontSize: "1.9rem",
    },
    h3: {
      ...rawTheme.typography.h3,
      fontSize: "1.8rem",
    },
    h4: {
      ...rawTheme.typography.h4,
      fontSize: "1.7rem",
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: "1.6rem",
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      fontSize: "1.5rem",
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: "1.1rem",
    },
    subtitle2: {
      ...rawTheme.typography,
      fontWeight: rawTheme.typography.fontWeightLight,
      fontSize: "1rem",
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: "1.2rem",
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: "1.1rem",
    },
  },
};

export default theme;
