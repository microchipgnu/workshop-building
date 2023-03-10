import SlideComponent from "@/components/SlideComponent";
import { NearWalletConnector } from "@/components/WalletConnectButton";

const Slide = () => {
  return (
    <SlideComponent markdownDir="/slides/connect-wallet.md">
      <NearWalletConnector />
    </SlideComponent>
  );
};

export default Slide;
