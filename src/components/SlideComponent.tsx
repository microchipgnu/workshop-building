import { ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

const SlideComponent = ({
  children,
  markdownDir,
}: {
  children: ReactNode;
  markdownDir: string;
}) => {
  const [hide, setHide] = useState(false);
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(markdownDir)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center relative p-4">
      {/* <h1 className="absolute top-4 text-3xl" onClick={() => setHide(!hide)}>
        Show
      </h1> */}
      <div
        className={`h-full w-full ${
          !hide ? "grid md:grid-cols-2" : "grid grid-cols-1"
        } justify-around`}
      >
        <div className="max-h-screen overflow-y-auto w-full flex items-center justify-center">
          {children}
        </div>
        <div
          className={`max-h-screen pb-24 w-full border p-4 overflow-y-auto ${
            hide && "hidden"
          }`}
        >
          <div className="markdown-body">
            <ReactMarkdown
              rehypePlugins={[rehypeHighlight]}
              remarkPlugins={[remarkGfm]}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
