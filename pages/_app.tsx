import type { AppProps } from "next/app";

import "@/styles/global.css";
import Layout from "@/components/Layout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
};

export default App;
