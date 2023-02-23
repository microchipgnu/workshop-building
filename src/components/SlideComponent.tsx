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
  const [show, setshow] = useState(true);

  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(markdownDir)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center relative p-4">
      {!show && (
        <button
          className="absolute left-1/2 transform -translate-x-1/2 top-4 border px-4 py-2 text-sm rounded"
          onClick={() => setshow(!show)}
        >
          How to?
        </button>
      )}

      <div
        className={`h-full w-full ${
          show ? "grid md:grid-cols-2" : "grid grid-cols-1"
        } justify-around`}
      >
        {show && (
          <button
            className="absolute top-1 lg:top-2 bg-white left-1 lg:left-2 border h-8 w-8 rounded-full z-[1000]"
            onClick={() => setshow(!show)}
          >
            X
          </button>
        )}
        <div
          className={`max-h-screen pb-36 z-50 w-full border p-4 overflow-y-auto bg-white lg:relative absolute top-0 bottom-0 left-0 right-0 ${
            !show ? "hidden" : "md:block"
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
        <div
          className={`max-h-screen overflow-y-auto w-full flex items-center justify-center`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
