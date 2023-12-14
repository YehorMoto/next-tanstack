import { createColumnHelper } from "@tanstack/react-table";
import { format, parseISO } from "date-fns";

//@components
import { StatusPill } from "@components";

//@types
import { REQUEST_COLUMN_DEFINITION, Request } from "@types";

/**
 * Get generated requests table columns
 * @returns
 */
export function useGenerateRequestsTableColumns() {
  const columnHelper = createColumnHelper<Request>();

  const columns = [
    columnHelper.accessor(REQUEST_COLUMN_DEFINITION.ID, {
      header: "Request Id",
      cell: (info) => info.getValue(),
      minSize: 120,
    }),
    columnHelper.accessor(REQUEST_COLUMN_DEFINITION.STATUS, {
      header: "Progress",
      cell: (info) => <StatusPill status={info.getValue()} />,
      minSize: 120,
    }),
    columnHelper.accessor((row) => row.item, {
      header: "Item",
      cell: (info) => info.getValue(),
      minSize: 450,
    }),
    columnHelper.accessor((row) => row.createdAt, {
      header: "Created At",
      cell: (info) =>
        format(parseISO(info.renderValue<string>()), "MMM d, yyyy h:mm a"),
      minSize: 450,
    }),
  ];

  return columns;
}

export default useGenerateRequestsTableColumns;
