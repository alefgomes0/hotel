import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfirmReservation } from "./pages/ConfirmReservation/ConfirmReservation";
import { GuestInfoProvider } from "./context/GuestInfoContext";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
  const queryClient = new QueryClient();
  useWindowSize();

  return (
    <QueryClientProvider client={queryClient}>
      <GuestInfoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/availability?" element={<SearchResults />} />
            <Route path="/checkout/contact" element={<ConfirmReservation />} />
            <Route path="/checkout/payment" element={<PaymentPage />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </GuestInfoProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
