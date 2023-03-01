# Getting Started

## Fork 

https://github.com/microchipgnu/workshop-building


## Clone 

```sh

git clone git@github.com:microchipgnu/workshop-building.git

```

## Follow 

Just watch 🤩

## Mintbase Dev Stack

### Indexer

The Indexer indexes events emitted by standard NFT contracts and our marketplace protocol. The indexed data is then easily queriable through an endpoint. Built with GraphQL for quick retrieval and intuitive output. Live subscriptions to on-chain events.


### SDK

The **SDK** is a set of packages that allow to intuitively interface with contracts, store data, fetch data and manage auth. We have recently modularized MintbaseJS to help developers integrating only the needed packages.


### Contracts

The Token Contract that can be deployed via our factory and the Marketplace. The Token Contract follows the NEP standards and is very flexible -- you can mint as you go. The Token Contract also provides a role-based permission system. Today the Marketplace allows to exchange tokens for NEAR and incorporates the AffiliateDirect standard. This means that we split the market fee on affiliate sales.