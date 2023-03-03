# Mint a Non-fungible Token

Packages: `@mintbase-js/react`, `@mintbase-js/sdk`, `@mintbase-js/storage`, `@mintbase-js/data`


## Fetch user owned token contract

Import `@mintbase-js/data`

```jsx
import { ownedStores } from "@mintbase-js/data";

// ...

const { activeAccountId } = useWallet()

const { data, error } = await ownedStores(activeAccountId!)

const tokenContracts = data?.nft_contracts

```

## Upload data to Arweave

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
