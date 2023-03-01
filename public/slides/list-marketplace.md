# List Token in the Marketplace

Packages: `@mintbase-js/react`, `@mintbase-js/sdk`, `@mintbase-js/data`


## Fetch user owned tokens


```jsx

import { ownedTokens, Token } from "@mintbase-js/data";


const { data, error } = await ownedTokens(someAccount, { limit: 1 });

```

## Listing token

Listing is in fact approving the marketplace for transfering a token by calling `nft_approve`.

```jsx

await execute({ wallet }, [
    depositStorage({
        listAmount: 1,
        marketAddress: marketAddress,
    }),
    list({
        contractAddress: token.contractId,
        marketAddress: marketAddress,
        tokenId: token.tokenId,
        price: `5${"0".repeat(23)}`,
    }),
]);

```