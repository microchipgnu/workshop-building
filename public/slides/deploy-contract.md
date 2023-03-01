# Deploying a Non-fungible Token Contract

Packages: `@mintbase-js/react`, `@mintbase-js/sdk`


## Permissions

Mintbase token contracts Role-based access control for rights to minting and changing the contract policy.

There are two main roles: **Owner** and **Minter**.

The Owner can add/remove minters and transfer contract ownership to other account.

Only the owner and minters can mint tokens on the contract.

## Cost

On NEAR 100KB of data are equivalent to 1N in [storage staking](https://docs.near.org/concepts/storage/storage-staking).


```

Rule of thumb: 100KB ~= 1N

```

The Mintbase token contract uses 500 KB (5N). Each token takes about 0.25KB of data => every 1N allows to mint up to 400 tokens.

## Example

```jsx

import { useState } from 'react';
import { useWallet } from '@mintbase-js/react';
import { execute, deployContract , DeployContractArgs } from '@mintbase-js/sdk';


export const DeployContractComponent = () => {
  
  const { selector } = useWallet();

  const handleDeployContract = async (): Promise<void> => {
    const wallet = await selector.wallet();

    await execute(
        //because no contract factory id is provided it defaults to 'mintspace2.testnet'
        {wallet},
        deployContract({
          name: name,
          ownerId: owner,
          metadata: {
            symbol: symbol
          }
        })
      )
  }

  return (

      <button onClick={() => handleDeployContract()}>
        Deploy
      </button>

  );
};

```

