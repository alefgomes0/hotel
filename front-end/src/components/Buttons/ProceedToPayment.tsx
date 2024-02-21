import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

type SendForm = {
  isSubmitting: boolean;
};

export const ProceedToPayment = ({ isSubmitting }: SendForm) => {
  return (
    <button
      type="submit"
      className="w-[300px] py-2.5 rounded-sm bg-gray-900 hover:bg-gray-700 text-lg lg:row-start-4 lg:row-end-5 text-gray-50 transition-colors shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]"
    >
      {isSubmitting ? <LoadingSpinner /> : "PROCEED TO PAYMENT"}
    </button>
  );
};
