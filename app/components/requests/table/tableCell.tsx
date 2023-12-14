import { Cell, flexRender } from "@tanstack/react-table";

//@types
import { Request } from "@types";

//@utils
import { cn } from "@utils";

interface TableCellProps {
  cell: Cell<Request, unknown>;
  className?: string;
}

/**
 * Returns table cell
 * @returns JSX.Element
 */
export const TableCell: React.FC<TableCellProps> = ({ cell, className }) => (
  <td
    className={cn(
      "border-y border-solid border-easy-grey px-2 py-1.5 text-sm leading-normal text-middle-grey",
      className,
    )}
  >
    {flexRender(cell.column.columnDef.cell, cell.getContext())}
  </td>
);

export default TableCell;
