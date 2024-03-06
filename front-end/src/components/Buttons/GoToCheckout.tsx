import { useNavigate } from "react-router-dom";

type GoToCheckoutProps = {
  hasMargin?: boolean;
};

export const GoToCheckout = ({ hasMargin }: GoToCheckoutProps) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`w-full lg:w-[400px] py-2.5 rounded-sm bg-gray-900 hover:bg-gray-700 text-lg text-gray-50 transition-colors shadow-subtle ${
        hasMargin ? "mb-4" : ""
      }`}
      onClick={() => navigate("/checkout/contact")}
    >
      Confirm Reservation
    </button>
  );
};
