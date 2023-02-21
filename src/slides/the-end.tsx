import SlideComponent from "@/components/SlideComponent";
import Image from "next/image";

const Slide = () => {
  return (
    <SlideComponent markdownDir="/slides/the-end.md">
      <div className="h-full w-full flex items-center justify-center">
        <div
          style={{
            width: 500,
            height: 500,
          }}
        >
          <Image
            className="y-axis-animation"
            src={"/images/mintbase-symbol-250x250.png"}
            width={500}
            height={500}
            alt="logo"
            style={{
              borderRadius: "100%",
              animation: "heartbeat 2s infinite",
            }}
          />
        </div>
      </div>
    </SlideComponent>
  );
};

export default Slide;
