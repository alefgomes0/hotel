import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGuestInfo } from "./useGuestInfo";
import { useQueryClient } from "@tanstack/react-query";

export const useGoToHomepage = (redirectCondition: boolean) => {
  const queryClient = useQueryClient();
  const { numOfGuests, setNumOfGuests } = useGuestInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (!redirectCondition) return;
    queryClient.clear();
    setNumOfGuests([
      {
        adult: 1,
        children: 0,
        selectedRoom: {
          id: null,
          name: "",
          pricePerDay: 0,
        },
      },
    ]);
    navigate("/");
  }, [numOfGuests]);
};
