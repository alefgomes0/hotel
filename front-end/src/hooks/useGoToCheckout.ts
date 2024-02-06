import { useEffect } from "react";
import { useGuestInfo } from "./useGuestInfo";
import { useNavigate } from "react-router-dom";

export const useGoToCheckout = (selectedRoomsLenght: number) => {
  const { numOfGuests } = useGuestInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (numOfGuests.length !== selectedRoomsLenght) return;
    navigate("/checkout/contact");
  }, [selectedRoomsLenght]);
};
