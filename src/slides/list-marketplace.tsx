import SlideComponent from "@/components/SlideComponent";
import { useWallet } from "@mintbase-js/react";
import { ownedStores, ownedTokens, Token } from "@mintbase-js/data";
import { useEffect, useState } from "react";
import { depositStorage, execute, list } from "@mintbase-js/sdk";

const Slide = () => {
  const { selector, activeAccountId } = useWallet();
  const [tokens, setTokens] = useState<Token[] | undefined | null>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOwnedTokens();
  }, [activeAccountId]);

  const fetchOwnedTokens = async () => {
    setLoading(true);

    // TODO: add code here

    setLoading(false);
  };

  const handleListToken = async () => {
    const token = tokens?.[0];
    const wallet = await selector.wallet();

    // TODO: add code here
  };

  return (
    <SlideComponent markdownDir="/slides/list-marketplace.md">
      <div className="p-4 absolute top-0 left-0">
        <button className="border px-4 py-2 rounded" onClick={fetchOwnedTokens}>
          {loading ? "Loading..." : "Re-fetch"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 w-full m-2">
        {tokens?.length === 0 && (
          <div className="text-center">
            <p>
              <span className="font-bold">{activeAccountId}</span> does not own
              any tokens.
            </p>
            <p>Navigate to the previous step to mint a token.</p>
          </div>
        )}
        {tokens?.map((token) => {
          return (
            <div
              key={`${token.metadataId}-${token.tokenId}`}
              className="flex flex-col gap-2 text-center"
            >
              <div className="flex justify-center h-46 w-full">
                <img
                  alt="token image"
                  className="object-contain"
                  src={token.media}
                />
              </div>
              <div>
                <button
                  className="border rounded px-4 py-2 text-white bg-black"
                  // TODO: add code here
                >
                  <span className="font-bold text-orange-500">List</span> for
                  0.5N
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </SlideComponent>
  );
};

export default Slide;
