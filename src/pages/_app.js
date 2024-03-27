import "@/styles/globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      refetchOnWindowFocus: false,
    },
  });
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
