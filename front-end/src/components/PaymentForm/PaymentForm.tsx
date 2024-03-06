import { ElementsConsumer, PaymentElement} from "@stripe/react-stripe-js";
import { PayButton } from "../Buttons/PayButton";

export const PaymentForm = () => {
  return (
    <form className="grid gap-y-12">
      <PaymentElement/>
      <PayButton />
    </form>
  );
};
