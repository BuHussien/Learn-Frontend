import { cn } from "../../lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "flex items-center justify-center rounded-md font-medium text-white duration-300 dark:text-black disabled:bg-indigo-400 disabled:hover:bg-indigo-400 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        // ** FILLED
        default:
          "bg-slate-900 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700",
        danger:
          "bg-red-900 dark:bg-[#c2344d] dark:text-white dark:hover:bg-red-700",
        cancel:
          "bg-gray-300 text-gray-700 dark:bg-[#f5f5fa] dark:text-dark hover:bg-gray-400 dark:hover:bg-gray-200",

        // ** OUTLINE
        outline:
          "border border-indigo-400 hover:text-white bg-transparent text-black hover:border-transparent hover:bg-indigo-600 dark:text-gray-700 dark:hover:text-white",
      },
      size: {
        default: "p-3",
        sm: "text-sm px-4 py-2",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";
}

const Button = ({
  variant,
  size,
  fullWidth,
  isLoading,
  className,
  children,
  type,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
      disabled={isLoading}
    >
      {children}
      {isLoading ? (
        <svg width="40" height="40" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="pl-2">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#149eca" strokeWidth="5" strokeLinecap="round" strokeDasharray="90 150">
            <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8s" repeatCount="indefinite"/>
          </circle>
        </svg>  
      ) : null}
    </button>
  );
};

export default Button;
