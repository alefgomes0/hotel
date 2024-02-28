import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGuestInfo } from "./useGuestInfo";

export const useGoToHomepage = (redirectCondition: boolean) => {
  const { numOfGuests } = useGuestInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (!redirectCondition) return;
    navigate("/");
  }, [numOfGuests]);
};
