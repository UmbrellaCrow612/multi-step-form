import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ubuntu.className}`}>
      <Component {...pageProps} />
    </div>
  );
}



// Have each step be a page route like /info / plan etc 
// Have these be protected by middleware so people cant access it if they haven't filled info in
// Store the values in local storage

// Have the form be a component that you can then pass stuff to put in the right hand section
// Left hand section with use the route your on to highlight the color

