# Connect Wallet

For those of you who want the opportunity to win $1000, use mainnet.

## Setting up the provider

Firstly, head over to `src/pages/_app.tsx`


```jsx

import { WalletContextProvider } from "@mintbase-js/react";
import "@near-wallet-selector/modal-ui/styles.css";

// ...

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  );
}

```

## React: useWallet hook

In our `@mintbase-js/react` package you can find a hook called `useWallet`.

```jsx

const { connect, disconnect, activeAccountId } = useWallet()

```

