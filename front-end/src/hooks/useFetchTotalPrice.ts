import { fetchTotalPrice } from "@/api/fetchTotalPrice";
import { getSuitesType } from "@/utils/helpers";
import { useGuestInfo } from "./useGuestInfo";
import { useQuery } from "@tanstack/react-query";

export const useFetchTotalPrice = (selectedSuites: number[]) => {
  const { numOfGuests, daysOfStay } = useGuestInfo();
  const suitesType = getSuitesType(numOfGuests);

  return useQuery({
    queryKey: ["calculateTotalPrice"],
    queryFn: () => fetchTotalPrice(suitesType, daysOfStay),
    enabled: selectedSuites.length > 0
  });
};
