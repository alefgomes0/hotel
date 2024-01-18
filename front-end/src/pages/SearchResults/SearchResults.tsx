import axios from "@/api/axios";
import { formattedTime } from "@/utils/formattedTime";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useQuery } from "@tanstack/react-query";
import { SearchResultsHeader } from "@/components/SearchResultsHeader/SearchResultsHeader";
import { RoomDisplayer } from "@/components/RoomDisplayer/RoomDisplayer";
import { RoomDisplayerSkeleton } from "@/components/Skeletons/RoomDisplayerSkeleton";

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

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["reserva"],
    queryFn: fetchAvailableRooms,
  });

  console.log(data);

  console.log(data);
  return (
    <main className="grid grid-cols-[3fr_1fr] grid-rows-[auto_1fr] min-h-[calc(100svh-90px)] gap-x-12 bg-gray-200 px-32 pt-12">
      <SearchResultsHeader />
      <section className="pt-8">
        {isLoading ? (
          <RoomDisplayerSkeleton />
        ) : (
          <>
            {isError ? (
              <></>
            ) : (
              <>
                <RoomDisplayer roomData={data?.data.quartos.Deluxe[0]} />
              </>
            )}
          </>
        )}
      </section>
      <div className="row-start-1 row-end-3 col-start-2 col-end-3 h-[450px] border-2 border-black"></div>
    </main>
  );
};
