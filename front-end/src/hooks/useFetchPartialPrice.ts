import { fetchPartialPrice } from "@/api/fetchPartialPrice";
import { useQuery } from "@tanstack/react-query";
import { useGuestInfo } from "./useGuestInfo";

export const useFetchPartialPrice = (id: number) => {
  const { daysOfStay } = useGuestInfo();

  return useQuery({
    queryKey: ["calculatePartialPrice", id],
    queryFn: () => fetchPartialPrice(id, daysOfStay),
  });
};
