import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import {SessionProvider} from 'next-auth/react'
export default function App({ Component, pageProps , session}) {
  return (
    <>
      <NextNProgress color="red" height={5} />
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
      
    </>
  );
}
