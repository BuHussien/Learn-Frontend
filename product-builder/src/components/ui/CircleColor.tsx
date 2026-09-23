import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string
}

const CircleColor = ({color, ...rest}: IProps) => {
  return (
    <span
      className="inline-block rounded-full hover:cursor-pointer"
      style={{ backgroundColor: color, width: 20, height: 20}}
      {...rest}
    />
  );
};

export default CircleColor;