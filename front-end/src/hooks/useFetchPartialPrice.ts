import { fetchPartialPrice } from "@/api/fetchPartialPrice";
import { useQuery } from "@tanstack/react-query";
import { useGuestInfo } from "./useGuestInfo";

export const useFetchPartialPrice = (id: number, arrayIndex: number) => {
  const { numOfGuests, daysOfStay } = useGuestInfo();

  return useQuery({
    queryKey: ["calculatePartialPrice", id],
    queryFn: () => fetchPartialPrice(id, daysOfStay),
    enabled: !!numOfGuests[arrayIndex].selectedRoom.name
  });
};
