import IconImage from "./IconImage";
import FolderIcon from "./SVG/Folder";

interface IProps {
  fileName: string;
  isFolder: boolean;
}

const RenderFileIcon = ({ fileName, isFolder }: IProps) => {
  if (isFolder) {
    return <FolderIcon />;
  }

  const extension = fileName.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "tsx":
      return <IconImage imgSource="/icons/react_ts.svg" />;

    case "jsx":
      return <IconImage imgSource="/icons/react.svg" />;

    case "ts":
      return <IconImage imgSource="/icons/typescript.svg" />;

    case "js":
      return <IconImage imgSource="/public/icons/javascript.svg" />;

    case "gitignore":
      return <IconImage imgSource="/icons/git.svg" />;

    case "md":
      return <IconImage imgSource="/icons/readme.svg" />;

    case "ico":
      return <IconImage imgSource="/icons/ada.svg" />;

    default:
      return <IconImage imgSource={`/icons/${extension}.svg`} />;
  }
};

export default RenderFileIcon;
