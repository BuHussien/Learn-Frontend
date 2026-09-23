import { Button as HeadlessButton } from "@headlessui/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}
const Button = ({
  children = "Save changes",
  className = "",
  width = "w-fit",
  ...rest
}: IProps) => {
  return (
    <HeadlessButton
      className={`${className} ${width} inline-flex items-center gap-2 rounded-md  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-[#14acde] data-open:bg-red-700 hover:cursor-pointer`}
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
