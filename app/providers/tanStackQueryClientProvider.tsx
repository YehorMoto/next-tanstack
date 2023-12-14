"use client";

import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//@hooks

//@types
import { ReactNode, useState } from "react";

interface TanStackQueryClientProviderProps {
  children: ReactNode;
}

/**
 * Returns the tanStack query client provider
 * @returns JSX.Element
 */
const TanStackQueryClientProvider = ({
  children,
}: TanStackQueryClientProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanStackQueryClientProvider;
