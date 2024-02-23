import { ChooseRoom } from "@/components/ChooseRoom/ChooseRoom";
import { GenericErrorDisplayer } from "@/components/GenericErrorDisplayer/GenericErrorDisplayer";
import { RoomDisplayerSkeleton } from "@/components/Skeletons/RoomDisplayerSkeleton";
import { SearchResultsHeader } from "@/components/SearchResultsHeader/SearchResultsHeader";
import { useFetchAvailableRooms } from "../../hooks/useFetchAvailableRooms";
import { useFillGuestContext } from "@/hooks/useFillGuestContext";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useLocation } from "react-router-dom";
import { YourStay } from "@/components/YourStay/YourStay";
import { SuitesDisplayer } from "@/components/SuitesDisplayer/SuitesDisplayer";
import { useGoToCheckout } from "@/hooks/useGoToCheckout";
import { useWindowSize } from "@/hooks/useWindowSize";

export const SearchResults = () => {
  const location = useLocation();
  useFillGuestContext(location.search);
  const { numOfGuests, selectedSuiteIndex } = useGuestInfo();
  const { data, error, isError, isLoading, isSuccess } =
    useFetchAvailableRooms();
  useGoToCheckout(selectedSuiteIndex.selected.length);
  useWindowSize();
  const moreThanOneSuite = numOfGuests.length > 1;
  const isMobile = window.innerWidth < 1024;

  return (
    <main className="xl:grid grid-cols-1 auto-rows-auto flex flex-col gap-x-6 min-h-[calc(100svh-90px)] bg-gray-100 px-4 xl:px-16 pt-12">
      {!isMobile && <SearchResultsHeader />}
      <YourStay />
      {moreThanOneSuite && (
        <ChooseRoom suiteIndex={selectedSuiteIndex.current} />
      )}
      <section>
        {isLoading && (
          <>
            {["_", "_", "_"].map((_, index) => (
              <RoomDisplayerSkeleton key={index} />
            ))}
          </>
        )}
        {isError && (
          <>
            <GenericErrorDisplayer error={error} />
          </>
        )}
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
    </main>
  );
};
