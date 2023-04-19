import { Layout } from "@/components/layout";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
