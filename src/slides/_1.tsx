import SlideComponent from "@/components/SlideComponent";
import { useWallet } from "@mintbase-js/react";
import { deployContract, execute } from "@mintbase-js/sdk";
import { useState } from "react";

const Slide = () => {
  const [name, setName] = useState<string | null>(null);
  const { selector, activeAccountId } = useWallet();

  const handleGenerateName = () => {
    const name = (Math.random() + 1).toString(16).substring(4);

    setName(name);
  };

  const handleDeployContract = async () => {
    if (!activeAccountId || !name) return;

    const wallet = await selector.wallet();

    await execute(
      { wallet },
      deployContract({
        name: name,
        ownerId: activeAccountId,
        metadata: {
          symbol: "XXX",
        },
      })
    );
  };

  return (
    <SlideComponent markdownDir="/slides/_1.md">
      <div className="flex gap-4">
        {!name && (
          <button
            onClick={handleGenerateName}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Generate name
          </button>
        )}
        {name && (
          <button
            onClick={handleDeployContract}
            className="bg-black text-white px-4 py-2 rounded"
            disabled={!name}
          >
            Deploy {name}
          </button>
        )}
      </div>
    </SlideComponent>
  );
};

export default Slide;
