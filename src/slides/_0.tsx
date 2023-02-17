import SlideComponent from "@/components/SlideComponent";
import { NearWalletConnector } from "@/components/WalletConnectButton";

const Slide = () => {
  return (
    <SlideComponent markdownDir="/slides/_0.md">
      <NearWalletConnector />
    </SlideComponent>
  );
};

export default Slide;
