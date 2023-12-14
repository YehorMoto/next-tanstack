// @hooks
import { useQuery } from "@tanstack/react-query";

//@types
import { GetRequestsResponse, RequestFilter } from "app/types";

/**
 * Get requests by filter
 * @returns
 */
export function useGetRequests(filter: RequestFilter) {
  const { data, isError, isLoading, isFetching } =
    useQuery<GetRequestsResponse>({
      queryKey: [
        "requests",
        filter.page,
        filter.requestStatus,
        filter.requestId,
      ],
      staleTime: 10000, // 10sec
      queryFn: async () => {
        const searchParams = new URLSearchParams();

        for (const [key, value] of Object.entries(filter)) {
          searchParams.append(key, value);
        }

        const response = await fetch(`api/requests?${searchParams.toString()}`);

        return await response.json();
      },
    });

  return {
    isError,
    isLoading,
    isFetching,
    requests: data?.requests ?? [],
    totalRequestsCount: data?.totalRequestsCount ?? 0,
    totalPagesCount: data?.totalPagesCount ?? 1,
  };
}

export default useGetRequests;
