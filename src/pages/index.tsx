import { NearWalletConnector } from "@/components/WalletConnectButton";
import ConnectWallet from "@/slides/connect-wallet";
import DeployContract from "@/slides/deploy-contract";
import ListMarketplace from "@/slides/list-marketplace";
import FetchDataMarketplace from "@/slides/fetch-data-marketplace";
import MintToken from "@/slides/mint-token";
import GettingStarted from "@/slides/getting-started";
import TheEnd from "@/slides/the-end";
import { useRouter } from "next/router";
import { useState } from "react";

// TODO: conditions to move to next slide

const slides = [
  {
    title: "Getting Started",
    children: () => <GettingStarted />,
  },
  {
    title: "Connect Wallet",
    children: () => <ConnectWallet />,
  },
  {
    title: "Deploy Token Contract",
    children: () => <DeployContract />,
  },
  {
    title: "Mint token",
    children: () => <MintToken />,
  },
  {
    title: "List in marketplace",
    children: () => <ListMarketplace />,
  },
  {
    title: "Fetch Data (Marketplace)",
    children: () => <FetchDataMarketplace />,
  },
  {
    title: "The End",
    children: () => <TheEnd />,
  },
  // {
  //   title: "Fetch token data",
  //   children: () => <_0 />,
  // },
  // {
  //   title: "Send link (get someone to buy it with AD)",
  //   children: () => <_0 />,
  // },
  // {
  //   title: "Add other minters", // Show QR Code?
  //   children: () => <_0 />,
  // },
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

  const progressPercentage = Math.round(((_index + 1) / slides.length) * 100);
  return (
    <div className="h-screen min-w-screen relative">
      <div className="absolute top-0 h-1 bg-slate-200 w-full z-50">
        <div
          className={`h-1 bg-orange-400`}
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
      {/* <div className="absolute top-0 left-0">
        <div className="m-4 text-sm ">
          <span className="text-orange-500">{slides[_index]?.title}</span>
        </div>
      </div> */}
      {slides[_index].children()}

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-50">
        <div className="flex gap-2 m-4 items-center border bg-white p-2 lg:p-4">
          <button
            className={`px-2 rounded-full lg:rounded border w-12 lg:w-36 h-12 ${
              _index === 0 ? "text-gray-200" : "text-black"
            }`}
            onClick={() => handleSetIndex(_index - 1)}
          >
            <p className="hidden lg:block text-xs text-center truncate">
              <span>{slides[_index - 1]?.title || "-"}</span>
            </p>
            <p className="block lg:hidden text-xs text-center">
              {"<"}
            </p>
          </button>
          <div className={`px-2 w-36 h-12 flex items-center justify-center`}>
            <p className="text-xs text-orange-500 font-bold text-center truncate">
              <span>{slides[_index]?.title} </span>
            </p>
          </div>
          <button
            className={`px-2 lg:rounded rounded-full border w-12 lg:w-36 h-12 ${
              _index === slides.length - 1 ? "text-gray-200" : "text-black"
            }`}
            onClick={() => handleSetIndex(_index + 1)}
          >
            <p className="hidden lg:block text-xs text-center truncate">
              <span>{slides[_index + 1]?.title || "-"}</span>
            </p>
            <p className="block lg:hidden text-xs text-center">
              {">"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
