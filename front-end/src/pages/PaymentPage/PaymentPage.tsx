import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "@/components/PaymentForm/PaymentForm";
import { YourStay } from "@/components/YourStay/YourStay";
import { fetchPublishKey } from "@/api/fetchPublishKey";

const publishableKey = await fetchPublishKey();
const stripe = loadStripe(publishableKey);
const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
};

export const PaymentPage = () => {
  return (
    <Elements stripe={stripe} options={options}>
      <main className="relative grid grid-cols-[3fr_1fr] grid-rows-[auto_1fr] min-h-[calc(100svh-90px)] gap-x-6 text-gray-700 bg-gray-100 px-32 pt-12">
        <section className="grid z-[20] border-[7px] border-gray-50">
          <div className="border-[2px] border-gray-200 p-4">
            <h4 className="text-2xl font-thin mb-6">PAYMENT INFORMATION</h4>
            <PaymentForm />
          </div>
        </section>
        <YourStay />
        <div className="w-full h-full absolute top-[0%] left-[0%] bg-[url(/images/bg-pattern.jpg)] z-[10] opacity-[12%] pointer-events-none"></div>
      </main>
    </Elements>
  );
};