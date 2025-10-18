import '../styles/globals.css';
import '../styles/reset.css';

import { GoogleAnalytics } from "nextjs-google-analytics";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
