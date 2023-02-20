import SlideComponent from "@/components/SlideComponent";
import { useWallet } from "@mintbase-js/react";
import { deployContract, execute } from "@mintbase-js/sdk";
import { useEffect, useState } from "react";

const Slide = () => {
  const [name, setName] = useState<string | null>(null);
  const { selector, activeAccountId } = useWallet();

  useEffect(() => {
    handleGenerateName();
  }, []);

  const handleGenerateName = () => {
    const name = (Math.random() + 1).toString(16).substring(4);

    setName(name);
  };

  const handleDeployContract = async () => {
    if (!activeAccountId || !name) return;

    const wallet = await selector.wallet();

    console.log(
      deployContract({
        name: name,
        ownerId: activeAccountId,
        metadata: {
          symbol: "XXX",
        },
      })
    );

    await execute(
      { wallet },
      {
        ...deployContract({
          name: name,
          ownerId: activeAccountId,
          metadata: {
            symbol: "XXX",
          },
        }),
        deposit: "6500000000000000000000000",
      }
    );
  };

  return (
    <SlideComponent markdownDir="/slides/list-marketplace.md">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-2">
          <p>
            <span className="underline">{name}</span>.mintspace2.testnet
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="border px-4 py-2 rounded"
            onClick={handleGenerateName}
          >
            Re-generate
          </button>

          <button
            onClick={handleDeployContract}
            className="bg-black text-white px-4 py-2 rounded"
            disabled={!name}
          >
            <span className="font-bold text-orange-400">Deploy</span>{" "}
            <span>Token Contract</span>
          </button>
        </div>
      </div>
    </SlideComponent>
  );
};

export default Slide;
