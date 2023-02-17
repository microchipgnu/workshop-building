import { useWallet } from "@mintbase-js/react";

export const NearWalletConnector = () => {
  const { connect, disconnect, activeAccountId, isConnected } = useWallet();

  return (
    <div>
      <div className="flex justify-center items-center mt-4">
        {!isConnected ? (
          <button
            onClick={connect}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Connect
          </button>
        ) : (
          <button
            onClick={disconnect}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Disconnect{" "}
            <span className="font-bold text-orange-400">{activeAccountId}</span>
          </button>
        )}
      </div>
    </div>
  );
};
