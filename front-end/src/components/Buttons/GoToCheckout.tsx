import { useNavigate } from "react-router-dom";

type GoToCheckoutProps = {
  hasMargin?: boolean;
  teste?: boolean;
};

export const GoToCheckout = ({ hasMargin, teste }: GoToCheckoutProps) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`${teste ? "sticky top-[20%] right-0" : ""} w-full lg:w-[400px] py-2.5 rounded-sm bg-gray-900 hover:bg-gray-700 text-lg text-gray-50 transition-colors shadow-subtle ${
        hasMargin ? "mb-4" : ""
      }`}
      onClick={() => navigate("/checkout/contact")}
    >
      Confirm Reservation
    </button>
  );
};
