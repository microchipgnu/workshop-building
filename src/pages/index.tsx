import { NearWalletConnector } from "@/components/WalletConnectButton";
import _0 from "@/slides/_0";
import _1 from "@/slides/_1";
import { useRouter } from "next/router";
import { useState } from "react";

// TODO: conditions to move to next slide

const slides = [
  {
    title: "Connect account",
    children: () => <_0 />,
  },
  {
    title: "Deploy Token Contract",
    children: () => <_1 />,
  },
  {
    title: "Mint token",
    children: () => <_0 />,
  },
  {
    title: "Add other minters", // Show QR Code?
    children: () => <_0 />,
  },
  {
    title: "List in marketplace",
    children: () => <_0 />,
  },
  {
    title: "Fetch token data",
    children: () => <_0 />,
  },
  {
    title: "Send link (get someone to buy it with AD)",
    children: () => <_0 />,
  },
];

const Index = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const { index: routerIndex } = router.query;

  const handleSetIndex = (index: number) => {
    if (index > slides.length - 1) return;
    if (index < 0) return;
    setIndex(index);

    router.query.index = index.toString();
    router.push(router);
  };

  const _index = Number(routerIndex) || index;
  return (
    <div className="h-screen min-w-screen p-4 relative">
      {slides[_index].children()}

      <div className="absolute bottom-0 right-0">
        <div className="flex gap-2 m-4 items-center border bg-white p-4">
          <button
            className={`px-2 rounded border w-36 h-12 ${
              _index === 0 ? "text-gray-200" : "text-black"
            }`}
            onClick={() => handleSetIndex(_index - 1)}
          >
            <p className="text-xs text-center truncate">
              <span>{slides[_index - 1]?.title || "-"}</span>
            </p>
          </button>
          <div className={`px-2 w-36 h-12 flex items-center justify-center`}>
            <p className="text-xs text-orange-500 font-bold text-center truncate">
              <span>{slides[_index]?.title}</span>
            </p>
          </div>
          <button
            className={`px-2 rounded border w-36 h-12 ${
              _index === slides.length - 1 ? "text-gray-200" : "text-black"
            }`}
            onClick={() => handleSetIndex(_index + 1)}
          >
            <p className="text-xs text-center truncate">
              <span>{slides[_index + 1]?.title || "-"}</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
