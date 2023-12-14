import { DetailedHTMLProps, InputHTMLAttributes } from "react";

//@utils
import { cn } from "@utils";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  fullWidth?: boolean;
}

/**
 * Returns the input
 * @returns JSX.Element
 */
const Input: React.FC<InputProps> = ({
  className,
  fullWidth,
  ...inputProps
}) => (
  <input
    {...inputProps}
    className={cn(
      className,
      "border-gray-input text-gray-main placeholder-gray-placeholder relative rounded-lg border border-solid bg-white p-2 text-sm leading-[15px] outline-none focus:outline-none disabled:opacity-25",
      fullWidth && "w-full",
    )}
  />
);

export default Input;
