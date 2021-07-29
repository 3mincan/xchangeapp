import Head from "next/head";
import Header from "../components/header";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Main from "../components/main";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <Head>
        <title>Exchange App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </div>
  );
}
