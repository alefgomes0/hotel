import { useEffect } from "react";
import { useGuestInfo } from "./useGuestInfo";
import { useNavigate } from "react-router-dom";

export const useGoToCheckout = (selectedRoomsLenght: number ) => {
  const { hasUserReturned, numOfGuests } = useGuestInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (numOfGuests.length !== selectedRoomsLenght || hasUserReturned.current ) return;
    hasUserReturned.current = true;
    navigate("/checkout/contact");
  }, [selectedRoomsLenght]);
};
