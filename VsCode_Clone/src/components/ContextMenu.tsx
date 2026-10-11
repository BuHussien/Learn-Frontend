import { useDispatch } from "react-redux";
import { closeAllFiles, closeFile } from "../app/features/fileTreeSlice";

interface IProps {
  x: number;
  y: number;
  fileName: string;
  onClose: () => void;
}

const ContextMenu = ({ x, y, fileName, onClose }: IProps) => {
  const dispatch = useDispatch();

  return (
    <div
      className="fixed z-50 flex flex-col border bg-white shadow-lg"
      style={{
        left: x,
        top: y + 15,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="px-4 py-2 text-left hover:bg-gray-100"
        onClick={() => {
          dispatch(closeAllFiles());
          onClose();
        }}
      >
        Close All
      </button>

      <button
        className="px-4 py-2 text-left hover:bg-gray-100"
        onClick={() => {
          dispatch(closeFile(fileName));
          onClose();
        }}
      >
        Close
      </button>
    </div>
  );
};

export default ContextMenu;
