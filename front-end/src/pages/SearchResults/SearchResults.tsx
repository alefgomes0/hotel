import { ChooseRoom } from "@/components/ChooseRoom/ChooseRoom";
import { RoomDisplayerSkeleton } from "@/components/Skeletons/RoomDisplayerSkeleton";
import { SearchResultsHeader } from "@/components/SearchResultsHeader/SearchResultsHeader";
import { useFetchAvailableRooms } from "../../hooks/useFetchAvailableRooms";
import { useFillGuestContext } from "@/hooks/useFillGuestContext";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useLocation } from "react-router-dom";
import { YourStay } from "@/components/YourStay/YourStay";
import { SuitesDisplayer } from "@/components/SuitesDisplayer/SuitesDisplayer";
import { useState } from "react";
import { SuiteIndexProps } from "@/types/SuiteIndexProps";

export const SearchResults = () => {
  const [suiteIndex, setSuiteIndex] = useState<SuiteIndexProps>({
    current: 0,
    selected: [],
  });
  const location = useLocation();
  useFillGuestContext(location.search);
  const { numOfGuests } = useGuestInfo();
  const { data, isLoading, isError, isSuccess } = useFetchAvailableRooms();
  console.log(data);

  return (
    <main className="testando grid grid-cols-[3fr_1fr] grid-rows-[auto_1fr] min-h-[calc(100svh-90px)] gap-x-6 bg-gray-100 px-32 pt-12">
      <SearchResultsHeader />
      <section className="pt-8">
        {isLoading && <RoomDisplayerSkeleton />}
        {isError && <></>}
        {isSuccess && (
          <>
            {numOfGuests.length > 1 && <ChooseRoom suiteIndex={suiteIndex.current}/>}
            {numOfGuests.map((_, index) => {
              if (index === suiteIndex.current) {
                return (
                  <SuitesDisplayer
                    roomData={data?.data.suites[index + 1]}
                    arrayIndex={index}
                    key={index}
                  />
                );
              }
            })}
          </>
        )}
      </section>
      <YourStay />
    </main>
  );
};
