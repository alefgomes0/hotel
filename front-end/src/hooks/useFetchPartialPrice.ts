import { fetchPartialPrice } from "@/api/fetchPartialPrice";
import { useQuery } from "@tanstack/react-query";
import { useGuestInfo } from "./useGuestInfo";

export const useFetchPartialPrice = (id: number, suiteNumberOnCart: number) => {
  const { daysOfStay } = useGuestInfo();
  return useQuery({
    queryKey: [`calculatePrice${suiteNumberOnCart}`],
    queryFn: () => fetchPartialPrice(id, daysOfStay),
  });
};
