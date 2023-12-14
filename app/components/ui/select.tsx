import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

//@utils
import { cn } from "@utils";

type Option<T> = { label: string; value: T };

interface SelectProps<K>
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: Option<K>[];
}

/**
 * Returns the select component
 * @returns JSX.Element
 */
const Select = <K extends string | number>({
  className,
  options,
  ...selectProps
}: SelectProps<K>) => (
  <select
    {...selectProps}
    className={cn(
      className,
      "border-r-solid text-gray-main placeholder-gray-placeholder outline-gray-input relative rounded-lg border-r-8 border-r-transparent bg-white p-2 text-sm leading-[15px] outline outline-1 disabled:opacity-25",
    )}
  >
    {options.map((i, index) => (
      <option key={index} value={i.value}>
        {i.label}
      </option>
    ))}
  </select>
);

export default Select;
