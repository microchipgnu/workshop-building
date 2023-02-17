import { ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const SlideComponent = ({
  children,
  markdownDir,
}: {
  children: ReactNode;
  markdownDir: string;
}) => {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(markdownDir)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-center relative">
      {/* <h1 className="absolute top-4 text-3xl">Title</h1> */}
      <div className="h-full w-full grid md:grid-cols-2 justify-around">
        <div className="h-full w-full flex items-center justify-center">
          {children}
        </div>
        <div className="h-full w-full border p-4">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
