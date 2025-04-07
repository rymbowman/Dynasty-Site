import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A254E", // Blue
    },
    secondary: {
      main: "#B72025", // Red
    },
    neutral: {
      grey: "#A2A5A8", // athletics grey
      lightGrey: "#D3D6D9", // light grey
      darkGrey: "#55565A", // dark grey
      lightBlue: "#9FCBED", // light blue
      darkerLightBlue: "#75ACD8", // darker light blue
      darkBlue: "#00083B", // dark blue
    },
    background: {
      default: "#f5f5f5", // Light grey
    },
    text: {
      primary: "#002d62",
      secondary: "#c41230",
    },
  },
  typography: {
    fontFamily:
      "'Cinzel', 'EB Garamond', 'Libre Baskerville', 'Roboto', 'Roboto Slab', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Cinzel', serif",
      fontSize: "2.5rem",
      fontWeight: 700,
      fontStyle: "italic",
      color: "#002d62", // Blue
    },
    h2: {
      fontFamily: "'Libre Baskerville', serif",
      fontSize: "2rem",
      fontWeight: 500,
      color: "#c41230", // Red
    },
    body1: {
      fontFamily: "'EB Garamond', serif",
      fontSize: "1rem",
      color: "#002d62", // Blue
    },
    button: {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
});

export default theme;
