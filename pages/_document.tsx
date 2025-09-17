import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
