import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "85em",
    "2xl": "96em", 
    '3xl': "132em"
  },
});

export default theme;
