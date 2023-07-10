import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { ContextProvider } from "../contexts/ContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    //Wrapping application with the content API
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
