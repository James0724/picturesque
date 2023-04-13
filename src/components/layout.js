import Head from "next/head";
import Footer from "./footer";
import { Menu } from "./menu";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Picturesque" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        {children}
        <Footer />
      </main>
    </>
  );
};
