import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>FUFU TURTLES - THE RUN CLUB</title>

      <meta
        name="description"
        content="FUFU TURTLES is the first ever (coolest) run club in the Tricity spreading the love for RUN and FITNESS"
      />
      <meta
        name="keywords"
        content="FUFU TURTLES, run club, Tricity, RUN, FITNESS"
      />
      <meta name="author" content="FUFU TURTLES" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/logo.svg" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
