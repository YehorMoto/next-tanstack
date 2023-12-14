//@components
import {
  LoadingPill,
  TableCell,
  TableHeader,
  TablePagination,
} from "@components";

//@types
import { Table } from "@tanstack/react-table";
import { Request } from "@types";

interface RequestsTableProps {
  totalRequestsCount: number;
  isLoading: boolean;
  table: Table<Request>;
}

/**
 * Returns the table of requests
 * @returns JSX.Element
 */
const RequestsTable: React.FC<RequestsTableProps> = ({
  totalRequestsCount,
  isLoading,
  table,
}) => {
  const paginationInfoText = isLoading
    ? ""
    : `Viewing ${table.getState().pagination.pageIndex + 1}-${
        table.getPageCount() || 1
      } of ${totalRequestsCount} results`;

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader header={header} key={header.id} />
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {!isLoading &&
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell cell={cell} key={cell.id} />
                ))}
              </tr>
            ))}
          {isLoading &&
            table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <td
                    key={column.id}
                    className="px-2 py-1.5"
                    style={{
                      maxWidth: column.getSize(),
                      width: column.getSize(),
                    }}
                  >
                    <LoadingPill width={column.getSize() - 50} height={22} />
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {isLoading ? (
        <LoadingPill className="ml-2" width={100} height={22} />
      ) : (
        <TablePagination
          paginationInfoText={paginationInfoText}
          onPrevPageClick={table.previousPage}
          isPrevPageDisabled={!table.getCanPreviousPage() || isLoading}
          onNextPageClick={table.nextPage}
          isNextPageDisabled={!table.getCanNextPage() || isLoading}
        />
      )}
    </div>
  );
};

export default RequestsTable;
