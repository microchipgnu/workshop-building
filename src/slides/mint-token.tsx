import SlideComponent from "@/components/SlideComponent";
import { useWallet } from "@mintbase-js/react";
import { execute, mint } from "@mintbase-js/sdk";
import { uploadReference } from "@mintbase-js/storage";
import { ownedStores } from "@mintbase-js/data";
import { useEffect, useMemo, useState } from "react";

const Slide = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const { selector, activeAccountId, isConnected } = useWallet();

  const [stores, setStores] = useState<
    | {
        id: string;
      }[]
    | undefined
  >(undefined);
  const [selectedStore, setSelectedStore] = useState(stores?.[0].id);

  const canMint = !loading || !!stores || !!file || !!isConnected;

  const handleFetchStores = async () => {
    // TODO: add code here

    // const stores = data?.nft_contracts;

    // setStores(stores);
    // setSelectedStore(stores?.[0].id)
  };

  useEffect(() => {
    handleFetchStores();
  }, []);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleChangeStore = (e: any) => {
    setSelectedStore(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    const metadata = {
      title: "Mintbase Dev Stack Workshop @ETHDenver",
      media: file,
    };

    // TODO: add code here

    // setReference(uploadResult.id);
    setLoading(false);

    // handleMintToken(uploadResult.id);
  };

  const handleMintToken = async (reference: string) => {
    if (!activeAccountId) return;

    const wallet = await selector.wallet();

    // TODO: add code here
  };

  return (
    <SlideComponent markdownDir="/slides/mint-token.md">
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <select className="border p-2 rounded" value={selectedStore} onChange={handleChangeStore}>
            {stores?.map((store) => {
              return (
                <option key={store.id} value={store.id}>
                  {store.id}
                </option>
              );
            })}
          </select>
          <input
            type="file"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
            disabled={false}
          >
            {loading ? "Loading..." : "Mint Token"}
          </button>
        </form>
      </div>
    </SlideComponent>
  );
};

export default Slide;
