import axios from "@/api/axios";
import { formattedTime } from "@/utils/formattedTime";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useQuery } from "@tanstack/react-query";

export const SearchResults = () => {
  const { checkIn, checkOut, numOfGuests } = useGuestInfo();

  const fetchAvailableRooms = async () => {
    const searchedInfo = JSON.stringify({
      checkIn: formattedTime(checkIn as Date, "14:00:00"),
      checkOut: formattedTime(checkOut as Date, "11:00:00"),
      numOfGuests,
    });

    return await axios.get(`/rooms/${searchedInfo}`);
  };

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["reserva"],
    queryFn: fetchAvailableRooms,
  });

  console.log(data);

  return (
    <main className="h-[calc(100svh-90px)] bg-gray-100">
      <h1>dosfidosfhdsifhosdhfiods</h1>
    </main>
  );
};
