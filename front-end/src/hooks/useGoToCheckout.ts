import { useNavigate } from "react-router-dom";
import { useGuestInfo } from "./useGuestInfo";
import { useEffect } from "react";

export const useGoToCheckout = (selectedRoomsLenght: number) => {
  const { numOfGuests } = useGuestInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (numOfGuests.length !== selectedRoomsLenght) return;
    navigate("/checkout");
  }, [selectedRoomsLenght]);
};
