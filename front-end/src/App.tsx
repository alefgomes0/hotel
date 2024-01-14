import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuestInfoProvider } from "./context/GuestInfoContext";
import { MainSearchBar } from "./components/MainSearchBar/MainSearchBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GuestInfoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainSearchBar />} />
          </Routes>
        </BrowserRouter>
      </GuestInfoProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
