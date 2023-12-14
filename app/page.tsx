"use client";

//@components
import { RequestsFilter, RequestsTable } from "@components";
import { ColumnFiltersState, PaginationState } from "@tanstack/react-table";

//@constants
import { PAGE_SISE } from "@constants";

//@hooks
import { useGetRequests, useRequestsTable } from "@hooks";
import { useState } from "react";

//@types
import { REQUEST_COLUMN_DEFINITION, REQUEST_STATUS } from "@types";

export default function Home() {
  const [appliedFilterModel, setAppliedFilterModel] =
    useState<ColumnFiltersState>([]);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: PAGE_SISE,
  });

  const appliedRequestId =
    (appliedFilterModel.find(
      (filter) => filter.id === REQUEST_COLUMN_DEFINITION.ID,
    )?.value as string) ?? "";

  const appliedRequestStatus =
    (appliedFilterModel.find(
      (filter) => filter.id === REQUEST_COLUMN_DEFINITION.STATUS,
    )?.value as REQUEST_STATUS) ?? "";

  const { requests, totalRequestsCount, totalPagesCount, isLoading } =
    useGetRequests({
      page: pagination.pageIndex + 1,
      requestId: appliedRequestId,
      requestStatus: appliedRequestStatus,
    });

  const table = useRequestsTable(
    requests,
    totalPagesCount,
    pagination,
    setPagination,
    setAppliedFilterModel,
  );

  return (
    <main>
      <div className="flex items-center gap-2">
        <RequestsFilter
          table={table}
          appliedRequestId={appliedRequestId}
          appliedRequestStatus={appliedRequestStatus}
        />
      </div>
      <RequestsTable
        isLoading={isLoading}
        table={table}
        totalRequestsCount={totalRequestsCount}
      />
    </main>
  );
}
