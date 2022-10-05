import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=optional"
          rel="stylesheet"
        />
        <link
            rel="preload"
            href="/fonts/HelveticaNeueCondensedBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
