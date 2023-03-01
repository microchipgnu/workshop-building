# Connect Wallet

Packages: `@mintbase-js/react`

## Setting up the provider

Firstly, head over to `src/pages/_app.tsx`


```jsx

import { WalletContextProvider } from '@mintbase-js/react'
import '@near-wallet-selector/modal-ui/styles.css'

export default function App {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  )
}

```

## React: useWallet hook

In our `@mintbase-js/react` package you can find a hook called `useWallet`.

```jsx

const { connect, disconnect, activeAccountId } = useWallet()

```

