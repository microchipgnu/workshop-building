# Fetch Data (Marketplace)

Packages: `@mintbase-js/react`, `@mintbase-js/sdk`, `@mintbase-js/data`

## Fetching data

Explore data: [GraphQL Explorer](https://cloud.hasura.io/public/graphiql?endpoint=https%3A%2F%2Fgraph.mintbase.xyz%2Ftestnet&header=mb-api-key:anon)

```
  query MyQuery {
    listings: mb_views_active_listings(
      where: {created_at: {_gte: "2023-03-02"}}
      order_by: {created_at: desc}
    ) {
      currency
      approvalId: approval_id
      kind
      listedBy: listed_by
      marketId: market_id
      media
      minter
      nftContractId: nft_contract_id
      price
      tokenId: token_id
    }
  }

```



## Executing the buy method


```ts

  const handleBuyToken = async (tokenId: string, price: string) => {
    const wallet = await selector.wallet();

    await execute(
      { wallet },
      buy({
        tokenId,
        price,
        // affiliateAccount: "someAccount" 
      })
    );
  }


```


## Earn commissions (AffiliateDirect)

See code above. Simply passing an address as `affiliateAccount` will directly payout 1.25% of the purchase price.
