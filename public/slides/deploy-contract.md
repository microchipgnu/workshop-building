# Deploying a Non-fungible Token Contract

## Permissions

Mintbase token contracts use two roles for **Owner** and **Minter**.

The Owner can add/remove minters and transfer contract ownership to other account.

Only the owner and minters can mint tokens on the contract.

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

## Cost

6.5N 

Rule of thumb: 100KB ~= 1N

MB Contract: 500KB + Extra storage (600 tokens)