import { useEffect } from "react";
import { useGuestInfo } from "./useGuestInfo";
import { useQueryClient } from "@tanstack/react-query";

export const useClearSelectedSuites = () => {
  const { setNumOfGuests, setSelectedSuiteIndex } = useGuestInfo();
  const queryClient = useQueryClient();
  useEffect(() => {
    setSelectedSuiteIndex({
      current: 0,
      selected: [],
    });
    setNumOfGuests([
      {
        adult: 1,
        children: 0,
        selectedRoom: {
          id: null,
          name: "",
        },
      },
    ]);
    queryClient.clear();
  }, []);
};
