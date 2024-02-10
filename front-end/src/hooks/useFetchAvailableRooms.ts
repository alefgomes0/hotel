import { fetchAvailableRooms } from "@/api/fetchAvailableRooms";
import { useGuestInfo } from "./useGuestInfo";
import { useQuery } from "@tanstack/react-query";

export const useFetchAvailableRooms = () => {
  const { checkIn, checkOut, numOfGuests } = useGuestInfo();
  return useQuery({
    queryKey: ["reserva"],
    queryFn: () => fetchAvailableRooms(checkIn, checkOut, numOfGuests),
    enabled: !!checkIn && !!checkOut && !!numOfGuests,
  });
};
