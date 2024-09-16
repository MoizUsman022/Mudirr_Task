'use client'
import { ChakraProvider } from "@chakra-ui/react";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "./components/Layout";
import theme from "./theme/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Layout>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  );
}
