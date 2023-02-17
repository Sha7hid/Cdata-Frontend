import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {
  return (
    <><NextNProgress color='red' height={5}/><Component {...pageProps} /></>
  )
  
 
}
