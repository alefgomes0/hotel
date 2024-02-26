import { fetchTotalPrice } from "@/api/fetchTotalPrice";
import { getSuitesType } from "@/utils/helpers";
import { useGuestInfo } from "./useGuestInfo";
import { useQuery } from "@tanstack/react-query";

export const useFetchTotalPrice = () => {
  const { numOfGuests, daysOfStay, selectedSuiteIndex } = useGuestInfo();
  const suitesType = getSuitesType(numOfGuests, selectedSuiteIndex.selected);
  console.log(suitesType)
  const stayData = JSON.stringify({
    suitesType,
    daysOfStay,
  });

  return useQuery({
    queryKey: ["calculateTotalPrice", selectedSuiteIndex.selected.length],
    queryFn: () => fetchTotalPrice(stayData),
    enabled: selectedSuiteIndex.selected.length > 0,
  });
};
