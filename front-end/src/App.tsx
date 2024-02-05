import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfirmReservation } from "./pages/ConfirmReservation/ConfirmReservation";
import { GuestInfoProvider } from "./context/GuestInfoContext";
import { Header } from "./components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { NoMatch } from "./pages/NoMatch/NoMatch";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GuestInfoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/availability?" element={<SearchResults />} />
            <Route path="/checkout" element={<ConfirmReservation />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </GuestInfoProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
