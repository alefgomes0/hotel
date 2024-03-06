import { Elements } from "@stripe/react-stripe-js";
import { fetchPublishKey } from "@/api/fetchPublishKey";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "@/components/PaymentForm/PaymentForm";
import { useFetchClientSecret } from "@/hooks/useFetchClientSecret";
import { PaymentFormSkeleton } from "@/components/Skeletons/PaymentFormSkeleton";
import { YourStayWrapper } from "@/components/YourStayWrapper/YourStayWrapper";
import { ReturnPage } from "@/components/ReturnPage/ReturnPage";
import { useGoToHomepage } from "@/hooks/useGoToHomepage";
import { useNavigate } from "react-router-dom";
import { useGuestInfo } from "@/hooks/useGuestInfo";

const publishableKey = await fetchPublishKey();
const stripe = loadStripe(publishableKey);

export const PaymentPage = () => {
  const { data, error, isLoading, isSuccess } = useFetchClientSecret();
  const appearance = {
    theme: "night" as const,
  };
  const options = {
    clientSecret: data?.data.client_secret.client_secret,
    appearance
  };
  const { selectedSuiteIndex } = useGuestInfo();
  const navigate = useNavigate();
  useGoToHomepage(selectedSuiteIndex.selected.length === 0);

  return (
    <main className="relative grid xl:grid-cols-[3fr_1fr] xl:grid-rows-[auto_1fr] min-h-[calc(100svh-90px)] gap-x-6 text-gray-100 bg-gray-900 px-4 xl:px-16 pt-4 xl:pt-20">
      {isLoading && <PaymentFormSkeleton />}
      {isSuccess && (
        <Elements stripe={stripe} options={options}>
          <ReturnPage returnFunction={() => navigate(-1)} />
          <section className="grid  border-2 border-gray-600">
            <div className="border-[2px] border-gray-200 p-4">
              <h4 className="text-2xl font-thin mb-6">PAYMENT INFORMATION</h4>
              <PaymentForm />
            </div>
          </section>
          <YourStayWrapper darkBackground={true}/>
          <div className="w-full h-full absolute top-[0%] left-[0%] bg-[url(/images/bg-pattern.jpg)] z-[10] opacity-[5%] pointer-events-none"></div>
        </Elements>
      )}
    </main>
  );
};
