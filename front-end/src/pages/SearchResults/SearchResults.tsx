import { ChooseRoom } from "@/components/ChooseRoom/ChooseRoom";
import { RoomDisplayer } from "@/components/RoomDisplayer/RoomDisplayer";
import { RoomDisplayerSkeleton } from "@/components/Skeletons/RoomDisplayerSkeleton";
import { SearchResultsHeader } from "@/components/SearchResultsHeader/SearchResultsHeader";
import { useFetchAvailableRooms } from "../../hooks/useFetchAvailableRooms";
import { useFillGuestContext } from "@/hooks/useFillGuestContext";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useLocation } from "react-router-dom";
import { YourStay } from "@/components/YourStay/YourStay";

export const SearchResults = () => {
  const { numOfGuests } = useGuestInfo();
  const location = useLocation();
  useFillGuestContext(location.search);
  const { data, isLoading, isError } = useFetchAvailableRooms();
  console.log(data);

  return (
    <main className="grid grid-cols-[3fr_1fr] grid-rows-[auto_1fr] min-h-[calc(100svh-90px)] gap-x-6 bg-gray-100 px-32 pt-12">
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
                {numOfGuests.length > 1 && <ChooseRoom />}
                <RoomDisplayer
                  roomData={data?.data.suites.firstSuite}
                  arrayIndex={0}
                />
                <RoomDisplayer
                  roomData={data?.data.suites.secondSuite}
                  arrayIndex={1}
                />
                <RoomDisplayer
                  roomData={data?.data.suites.thirdSuite}
                  arrayIndex={2}
                />
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
