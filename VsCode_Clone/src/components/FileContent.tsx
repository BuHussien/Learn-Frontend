import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import Highlighter from "./Highlighter";
import { HugeiconsIcon } from "@hugeicons/react";
import { VisualStudioCodeIcon } from "@hugeicons/core-free-icons";
const FileContent = () => {
  const { focusedFile } = useSelector((state: RootState) => state.tree);

  return (
    <main className="flex-1 p-4">
      {focusedFile ? (
        <pre className="whitespace-pre-wrap">
          <Highlighter content={focusedFile.content} />
        </pre>
      ) : (
        <div className="flex min-h-screen items-center justify-center">
          <HugeiconsIcon icon={VisualStudioCodeIcon} size={400} strokeWidth={1.5}/>
        </div>
      )}
    </main>
  );
};

export default FileContent;
