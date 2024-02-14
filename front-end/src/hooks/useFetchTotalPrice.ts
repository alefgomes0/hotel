import { fetchTotalPrice } from "@/api/fetchTotalPrice";
import { getSuitesType } from "@/utils/helpers";
import { useGuestInfo } from "./useGuestInfo";
import { useQuery } from "@tanstack/react-query";

export const useFetchTotalPrice = () => {
  const { numOfGuests, daysOfStay, selectedSuiteIndex } = useGuestInfo();
  const suitesType = getSuitesType(numOfGuests, selectedSuiteIndex.selected);

  return useQuery({
    queryKey: ["calculateTotalPrice", selectedSuiteIndex.selected.length],
    queryFn: () => fetchTotalPrice(suitesType, daysOfStay),
    enabled: selectedSuiteIndex.selected.length > 0,
  });
};
