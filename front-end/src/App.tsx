import { MainSearchBar } from "./components/MainSearchBar/MainSearchBar";
import { GuestInfoProvider } from "./context/GuestInfoContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GuestInfoProvider>
        <MainSearchBar />
      </GuestInfoProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
