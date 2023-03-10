import SlideComponent from "@/components/SlideComponent";
import Image from "next/image";

const Slide = () => {
  return (
    <SlideComponent markdownDir="/slides/getting-started.md">
      <div className="h-full w-full flex items-center justify-center">
        <div
          style={{
            width: 150,
            height: 150,
          }}
        >
          <Image
            className="y-axis-animation"
            src={"/images/mintbase-symbol-250x250.png"}
            width={250}
            height={250}
            alt="logo"
            style={{
              borderRadius: "100%",
              animation: "heartbeat 1.3s infinite",
            }}
          />
        </div>
      </div>
    </SlideComponent>
  );
};

export default Slide;
