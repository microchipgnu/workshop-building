import "@/styles/globals.css";
import "@/styles/github-markdown-light.css";
import "@/styles/3d-animations.css";
import { WalletContextProvider } from "@mintbase-js/react";
import "@near-wallet-selector/modal-ui/styles.css";

import type { AppProps } from "next/app";
import { mbjs, NEAR_NETWORKS } from "@mintbase-js/sdk";

mbjs.config({
  network: NEAR_NETWORKS.TESTNET,
});

mbjs.keys.apiKey = "omni-site"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  );
}
