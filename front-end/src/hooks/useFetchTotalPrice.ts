import { fetchTotalPrice } from "@/api/fetchTotalPrice";
import { getSuitesType } from "@/utils/helpers";
import { useGuestInfo } from "./useGuestInfo";
import { useQuery } from "@tanstack/react-query";

export const useFetchTotalPrice = () => {
  const { numOfGuests, daysOfStay } = useGuestInfo();
  const suitesType = getSuitesType(numOfGuests);

  return useQuery({
    queryKey: ["calculateTotalPrice"],
    queryFn: () => fetchTotalPrice(suitesType, daysOfStay),
  });
};
