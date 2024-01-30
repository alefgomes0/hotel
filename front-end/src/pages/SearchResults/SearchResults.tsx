import axios from "@/api/axios";
import { formattedTime } from "@/utils/formattedTime";
import { RoomDisplayer } from "@/components/RoomDisplayer/RoomDisplayer";
import { RoomDisplayerSkeleton } from "@/components/Skeletons/RoomDisplayerSkeleton";
import { SearchResultsHeader } from "@/components/SearchResultsHeader/SearchResultsHeader";
import { useFillGuestContext } from "@/hooks/useFillGuestContext";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { YourStay } from "@/components/YourStay/YourStay";
import { ChooseRoom } from "@/components/ChooseRoom/ChooseRoom";

export const SearchResults = () => {
  const { checkIn, checkOut, numOfGuests } = useGuestInfo();
  const location = useLocation();
  useFillGuestContext(location.search);

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
    enabled: !!checkIn && !!checkOut,
  });

  console.log(data);

  return (
    <main className="grid grid-cols-[3fr_1fr] grid-rows-[auto_1fr] min-h-[calc(100svh-90px)] gap-x-6 bg-gray-100 px-32 pt-12">
      <SearchResultsHeader />
      {numOfGuests.length > 1 && <ChooseRoom />}
      <section className="pt-8">
        {isLoading ? (
          <RoomDisplayerSkeleton />
        ) : (
          <>
            {isError ? (
              <></>
            ) : (
              <>
                <RoomDisplayer roomData={data?.data.suites.firstSuite} arrayIndex={0}/>
                <RoomDisplayer roomData={data?.data.suites.secondSuite} arrayIndex={1}/>
                <RoomDisplayer roomData={data?.data.suites.thirdSuite} arrayIndex={2}/>
              </>
            )}
          </>
        )}
      </section>
      <div className="row-start-1 row-end-3 col-start-2 col-end-3">
        <YourStay />
      </div>
    </main>
  );
};
