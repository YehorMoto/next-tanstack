import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

//@utils
import { cn } from "@utils";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  fullWidth?: boolean;
}

/**
 * Returns the button
 * @returns JSX.Element
 */
const Button = ({ children, className, fullWidth, ...rest }: ButtonProps) => (
  <button
    {...rest}
    className={cn(
      "text-gray-bold flex items-center justify-center rounded-md border border-solid border-label-grey-disabled bg-white px-2 py-1.5 text-xs shadow-sm disabled:opacity-50",
      className,
      fullWidth && "w-full",
    )}
  >
    {children}
  </button>
);

export default Button;
