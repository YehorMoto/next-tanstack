//@constants
import { PAGE_SISE } from "@constants";

//@mocks
import { requests } from "app/mocks";

//@types
import { GetRequestsResponse, REQUEST_STATUS } from "app/types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const requestStatus = searchParams.get("requestStatus") as REQUEST_STATUS;

  const requestId = searchParams.get("requestId");

  const page = Number(searchParams.get("page") || 1);

  let filteredRequests = [...requests];

  if (requestStatus) {
    filteredRequests = filteredRequests.filter(
      (request) => request.status === requestStatus,
    );
  }

  if (requestId) {
    filteredRequests = filteredRequests.filter(
      (request) => request.id === requestId,
    );
  }

  const startIndex = (page - 1) * PAGE_SISE;
  const endIndex = startIndex + PAGE_SISE;
  const paginatedRequests = filteredRequests.slice(startIndex, endIndex);

  const totalItems = filteredRequests.length;
  const pagesCount = Math.ceil(totalItems / PAGE_SISE);

  const result: GetRequestsResponse = {
    requests: paginatedRequests,
    totalRequestsCount: filteredRequests.length,
    totalPagesCount: pagesCount,
  };

  return new Response(JSON.stringify(result));
}
