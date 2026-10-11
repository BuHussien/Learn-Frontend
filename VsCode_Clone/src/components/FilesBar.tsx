import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {closeFile,setFocusedFile} from "../app/features/fileTreeSlice";
import RenderFileIcon from "./RenderFileIcon";
import { useState } from "react";
import ContextMenu from "./ContextMenu";

interface IContextMenu {
  x: number;
  y: number;
  fileName: string;
}

const FilesBar = () => {
  const [contextMenu, setContextMenu] = useState<IContextMenu | null>(null);
  
  const dispatch = useDispatch();
  const { openedFiles, focusedFile } = useSelector(
    (state: RootState) => state.tree,
  );

  return (
    <div className="flex overflow-x-auto border-b border-gray-300" onClick={() => setContextMenu(null)}>
      {openedFiles.map((file) => (
        <div
          key={file.fileName}
          onClick={() =>
            dispatch(
              setFocusedFile({
                fileName: file.fileName,
                content: file.content ?? "",
              }),
            )
          }
          className={`flex items-center gap-2 px-3 py-1 cursor-pointer whitespace-nowrap
            ${
              focusedFile?.fileName === file.fileName
                ? "bg-gray-300"
                : "bg-gray-200"
            }`}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setContextMenu({
              x: e.clientX,
              y: e.clientY,
              fileName: file.fileName,
            });
          }}
        >
          <span>
            <RenderFileIcon fileName={file.fileName} isFolder={false} />
          </span>
          <span>{file.fileName}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(closeFile(file.fileName));
            }}
          >
            ×
          </button>
        </div>
      ))}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          fileName={contextMenu.fileName}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  );
};

export default FilesBar;
