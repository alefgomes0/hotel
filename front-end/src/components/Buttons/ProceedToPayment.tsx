import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

type SendForm = {
  isSubmitting: boolean;
};

export const ProceedToPayment = ({ isSubmitting }: SendForm) => {
  return (
    <button
      type="submit"
      className="w-[300px] py-2.5 rounded-sm bg-gray-900 hover:bg-gray-700 text-lg lg:row-start-4 lg:row-end-5 text-gray-50 transition-colors shadow-subtle"
    >
      {isSubmitting ? <LoadingSpinner /> : "PROCEED TO PAYMENT"}
    </button>
  );
};
