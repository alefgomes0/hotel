import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGuestInfo } from "./useGuestInfo";

export const useGoToHomepage = () => {
  const { numOfGuests } = useGuestInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (numOfGuests.length === 0) {
      navigate("/");
    }
  }, [numOfGuests.length]);
};
