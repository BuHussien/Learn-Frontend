import { useState } from "react";
import type { IFileTree } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch } from "react-redux";
import { setOpenedFiles } from "../app/features/fileTreeSlice";

interface IProps {
  file: IFileTree;
}

const FileComponent = ({ file }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (file.isFolder) {
      setIsOpen((prev) => !prev);
    } else {
      dispatch(setOpenedFiles(file));
    }
  };

  return (
    <aside>
      <div
        className="flex gap-2 items-center mb-1 cursor-pointer"
        onClick={handleOnClick}
      >
        {file.isFolder && (isOpen ? <BottomArrowIcon /> : <RightArrowIcon />)}
        <RenderFileIcon fileName={file.fileName} isFolder={file.isFolder} />
        <span>{file.fileName}</span>
      </div>

      {isOpen && file.children && (
        <div className="ml-8 mb-1 cursor-pointer">
          {file.children.map((item) => (
            <FileComponent key={item.id ?? item.fileName} file={item} />
          ))}
        </div>
      )}
    </aside>
  );
};

export default FileComponent;