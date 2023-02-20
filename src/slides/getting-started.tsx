import SlideComponent from "@/components/SlideComponent";
import Image from "next/image";

const Slide = () => {
  return (
    <SlideComponent markdownDir="/slides/getting-started.md">
      <div className="h-full w-full flex items-center justify-center">
        <div
          style={{
            width: 250,
            height: 250,
            border: "3px solid #0000ff",
            borderRadius: "100%",
            animation: "shrink 1s ease-in-out 0s infinite alternate",
          }}
        >
          <Image
            className="y-axis-animation"
            src={"/images/mintbase-symbol-250x250.png"}
            width={250}
            height={250}
            alt="logo"
            style={{
              animation:
                "y-axis-animation 1s ease-in-out 0s infinite alternate",
            }}
          />
        </div>
      </div>
    </SlideComponent>
  );
};

export default Slide;
