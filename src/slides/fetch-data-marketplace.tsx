import SlideComponent from "@/components/SlideComponent";
import { useWallet } from "@mintbase-js/react";
import { fetchGraphQl, graphql } from "@mintbase-js/data";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { utils } from "near-api-js";

const MARKET_QUERY = `
  query MyQuery {
    listings: mb_views_active_listings(
      where: {created_at: {_gte: "2023-02-21"}}
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
`;

type MarketplaceData = {
  approvalId: number;
  currency: string;
  kind: string;
  listedBy: string;
  marketId: string;
  minter: string;
  nftContractId: string;
  price: number;
  tokenId: string;
  media: string;
}[];

const Slide = () => {
  const [marketplaceData, setMarketplaceData] = useState<
    MarketplaceData | undefined
  >(undefined);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = (await fetchGraphQl({ query: MARKET_QUERY })) as {
      data: { listings: MarketplaceData };
      error: any;
    };

    if (!data || !data.listings || error) return;

    setMarketplaceData(data?.listings);
    setLoading(false);
  };

  const handleBuyToken = () => {};

  return (
    <SlideComponent markdownDir="/slides/fetch-data-marketplace.md">
      <div className="p-4 absolute top-0 left-0">
        <button className="border px-4 py-2 rounded" onClick={fetchData}>
          {loading ? "Loading..." : "Re-fetch"}
        </button>
      </div>

      <div className="flex flex-nowrap overflow-x-auto gap-4">
        {marketplaceData?.map((listing) => {
          const priceYocto = listing.price.toLocaleString().replace(/,/g, "");
          const priceNear = utils.format.formatNearAmount(priceYocto, 2);

          return (
            <div
              className="inline-block"
              key={`${listing.approvalId}-${listing.nftContractId}-${listing.tokenId}`}
            >
              <Card
                description={""}
                minter={listing.minter}
                price={priceNear}
                title={""}
                coverImage={listing.media}
                isLoading={false}
              ></Card>
            </div>
          );
        })}
      </div>
    </SlideComponent>
  );
};

export default Slide;
