import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGuestInfo } from "./useGuestInfo";

export const useGoToHomepage = (redirectCondition: boolean) => {
  const { hasUserReturned, numOfGuests, setNumOfGuests } = useGuestInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (!redirectCondition) return;
    navigate("/");

    hasUserReturned.current = false;
  }, [numOfGuests]);
};
