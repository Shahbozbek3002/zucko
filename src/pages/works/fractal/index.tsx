import Head from "next/head";
import FractalScreen from "@/screens/works/pages/fractal";

export default function Fractal() {
  return (
    <>
      <Head>
        <title>Zucko</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/title.svg" />
      </Head>
      <FractalScreen />
    </>
  );
}
