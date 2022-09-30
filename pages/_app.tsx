import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../hooks/UseAuth";
import { Provider } from "react-redux";

import store from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
