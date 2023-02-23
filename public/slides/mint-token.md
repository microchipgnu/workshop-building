# Mint a Non-fungible Token

Creating a token in the contract

Once you have a 

## Fetch user owned stores

Import `@mintbase-js/data`

```jsx

import { ownedStores } from "@mintbase-js/data";

// ...

const { activeAccountId } = useWallet()

const { data, error } = await ownedStores(activeAccountId!)

const stores = data?.nft_contracts

```

## Upload data to Arweave

We use Arweave at Mintbase

```jsx

import { uploadReference } from "@mintbase-js/storage";

const handleSubmit = async (e: any) => {

    const metadata = {
        title: "Mintbase Dev Stack Workshop @ETHDenver",
        media: file // File,
    };

    const uploadResult = await uploadReference(metadata);

    setReference(uploadResult.id);
};


```

## Mint contract call

```jsx


const wallet = await selector.wallet();

execute(
    { wallet },
    mint({
        ownerId: activeAccountId,
        metadata: { reference: reference },
        noMedia: true,
        contractAddress: selectedStore,
    })
);


```

```
