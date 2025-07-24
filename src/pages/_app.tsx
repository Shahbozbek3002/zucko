import { useEffect } from "react";
import { Layout } from "@/layouts";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { CustomCursor } from "@/components/cursor";
import AOS from "aos";
// import { PageTransitionOverlay } from "@/components/page-overlay";

const theme = createTheme({});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <MantineProvider theme={theme}>
      <NextNProgress
        color="#DB3333"
        startPosition={0.3}
        stopDelayMs={3}
        height={3}
        showOnShallow={true}
        transformCSS={(css) => {
          return <style>{css}</style>;
        }}
        options={{ easing: "ease", speed: 500, showSpinner: false }}
        nonce="my-nonce"
      />
      <Layout>
        {/* <PageTransitionOverlay> */}
        <CustomCursor />
        <Component {...pageProps} />
        {/* </PageTransitionOverlay> */}
      </Layout>
    </MantineProvider>
  );
}
