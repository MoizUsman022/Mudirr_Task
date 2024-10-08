import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "65em",
    xl: "85em",
    "2xl": "109em", 
    '3xl': "134em",
    'xll':"80em",
    'xlm':'100em'
  },
});

export default theme;
