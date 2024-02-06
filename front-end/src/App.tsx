import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfirmReservation } from "./pages/ConfirmReservation/ConfirmReservation";
import { Elements } from "@stripe/react-stripe-js";
import { fetchPublishKey } from "./api/fetchPublishKey";
import { GuestInfoProvider } from "./context/GuestInfoContext";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { NoMatch } from "./pages/NoMatch/NoMatch";

const publishableKey = await fetchPublishKey();
const stripePromise = loadStripe(publishableKey);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GuestInfoProvider>
        <Elements stripe={stripePromise} options={{ layout: "tabs" }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/availability?" element={<SearchResults />} />
              <Route
                path="/checkout/contact"
                element={<ConfirmReservation />}
              />
              <Route path="/checkout/payment" element={<PaymentPage />} />
              <Route path="/*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
        </Elements>
      </GuestInfoProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
