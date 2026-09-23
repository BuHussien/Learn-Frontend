import { Input as PInput } from "@headlessui/react";
import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  ID: string;
}

const Input = ({ ID, className, ...props }: IProps) => {
  return (
    <PInput
      id={ID}
      {...props}
      className={clsx(
        "block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
        className
      )}
    />
  );
};

export default Input;
