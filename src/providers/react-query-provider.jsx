'use client';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import useAlert from '../hooks/use-custom-snackbar';

function makeQueryClient({ onError = () => {} } = {}) {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        if (query.state.data !== undefined && !query.queryKey.includes('user')) {
          onError(error.message);
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        onError(error.message);
      },
    }),
    defaultOptions: {
      queries: {
        retry: false,
        retryOnMount: false,
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient = undefined;

function getQueryClient(options) {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient(options);
    return browserQueryClient;
  }
}

export default function ReactQueryProvider({ children }) {
  const showSnackbar = useAlert();

  const queryClient = getQueryClient({
    onError: (error) =>
      showSnackbar(error, {
        color: 'error',
        open: true,
        autoHideDuration: 5000,
      }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
