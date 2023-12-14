import {
  ColumnFiltersState,
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

//@hooks
import { useGenerateRequestsTableColumns } from "@hooks";

//@types
import { Request } from "@types";
import { Dispatch, SetStateAction } from "react";

/**
 * Get table info
 * @returns
 */
export function useRequestsTable(
  data: Request[],
  pageCount: number,
  pagination: PaginationState,
  setPagination: Dispatch<SetStateAction<PaginationState>>,
  setAppliedFilterModel: Dispatch<SetStateAction<ColumnFiltersState>>,
) {
  const columns = useGenerateRequestsTableColumns();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    pageCount,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setAppliedFilterModel,
    manualPagination: true,
  });

  return table;
}

export default useRequestsTable;
