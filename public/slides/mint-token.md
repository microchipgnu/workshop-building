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

## Upload data

We use Arweave at Mintbase

## Mint contract call

```jsx

import { useState } from 'react';

```
