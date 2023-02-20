import SlideComponent from "@/components/SlideComponent";
import Image from "next/image";

const Slide = () => {
  return (
    <SlideComponent markdownDir="/slides/getting-started.md">
      <div
        style={{
          width: 250,
          height: 250,
          border: "3px solid #ccc",
          borderRadius: "100%",
        }}
      >
        <Image
          className="y-axis-animation"
          src={"/images/mintbase-symbol-250x250.png"}
          width={250}
          height={250}
          alt="logo"
          style={{
            animation: "y-axis-animation 3s ease-in-out 0s infinite alternate",
          }}
        />
      </div>
    </SlideComponent>
  );
};

export default Slide;
