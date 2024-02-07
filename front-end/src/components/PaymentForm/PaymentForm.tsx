import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { PayButton } from "../Buttons/PayButton";

export const PaymentForm = () => {
  const elements = useElements();
  const stripe = useStripe();

/*   const handleSubmit = (e: React.FormEvent) => {
    if (!stripe || !elements) return;
    e.preventDefault();
    const cardElement = elements?.getElement(CardElement);
    console.log("card", cardElement);
    console.log("stripe", stripe);
  }; */

  return (
    <form  className="grid gap-y-12">
      <PaymentElement />
      <PayButton />
    </form>
  );
};
