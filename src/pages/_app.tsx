import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#fff"
        startPosition={0.1}
        showOnShallow
        options={{
          easing: "ease",
          speed: 1000,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
