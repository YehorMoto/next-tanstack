//@types
import { Header, flexRender } from "@tanstack/react-table";
import { Request } from "@types";

//@utils
import { cn } from "@utils";

interface TableHeaderProps {
  header: Header<Request, unknown>;
  className?: string;
}

/**
 * Returns the table header
 * @returns JSX.Element
 */
export const TableHeader: React.FC<TableHeaderProps> = ({
  header,
  className,
}) => (
  <th
    style={{
      width: header.getSize(),
      maxWidth: header.getSize(),
    }}
    className={cn(
      "border-t border-solid border-t-light-grey px-2 py-1.5 text-start text-xs font-semibold leading-normal text-dark-grey",
      className,
    )}
  >
    {header.isPlaceholder
      ? null
      : flexRender(header.column.columnDef.header, header.getContext())}
  </th>
);

export default TableHeader;
