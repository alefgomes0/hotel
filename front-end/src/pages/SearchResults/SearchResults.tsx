import { ChooseRoom } from "@/components/ChooseRoom/ChooseRoom";
import { RoomDisplayerSkeleton } from "@/components/Skeletons/RoomDisplayerSkeleton";
import { SearchResultsHeader } from "@/components/SearchResultsHeader/SearchResultsHeader";
import { useFetchAvailableRooms } from "../../hooks/useFetchAvailableRooms";
import { useFillGuestContext } from "@/hooks/useFillGuestContext";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useLocation } from "react-router-dom";
import { YourStay } from "@/components/YourStay/YourStay";
import { SuitesDisplayer } from "@/components/SuitesDisplayer/SuitesDisplayer";
import { useGoToCheckout } from "@/hooks/useGoToCheckout";

export const SearchResults = () => {
  const location = useLocation();
  useFillGuestContext(location.search);
  const { numOfGuests, selectedSuiteIndex } = useGuestInfo();
  const { data, isLoading, isError, isSuccess } = useFetchAvailableRooms();
  console.log(data);
  useGoToCheckout(selectedSuiteIndex.selected.length);

  return (
    <main className="grid grid-cols-[3fr_1fr] grid-rows-[auto_1fr] gap-x-6 min-h-[calc(100svh-90px)] bg-gray-100 px-32 pt-12">
      <section className=" ">
        <SearchResultsHeader />
        {numOfGuests.length > 1 && (
          <ChooseRoom suiteIndex={selectedSuiteIndex.current} />
        )}
        {isLoading && (
          <>
            {["_", "_", "_"].map((_, index) => (
              <RoomDisplayerSkeleton key={index} />
            ))}
          </>
        )}
        {isError && <></>}
        {isSuccess && (
          <>
            {numOfGuests.map((_, index) => {
              if (index === selectedSuiteIndex.current) {
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
