interface IProps {
  imgSource: string;
}

const IconImage = ({imgSource}: IProps) => {
  return (
    <img src={imgSource} className="w-5 h-5"/>
  );
};

export default IconImage;