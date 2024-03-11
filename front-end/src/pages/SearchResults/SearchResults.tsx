import { ChooseRoom } from "@/components/ChooseRoom/ChooseRoom";
import { GenericErrorDisplayer } from "@/components/GenericErrorDisplayer/GenericErrorDisplayer";
import { RoomDisplayerSkeleton } from "@/components/Skeletons/RoomDisplayerSkeleton";
import { SearchResultsHeader } from "@/components/SearchResultsHeader/SearchResultsHeader";
import { useFetchAvailableRooms } from "../../hooks/useFetchAvailableRooms";
import { useFillGuestContext } from "@/hooks/useFillGuestContext";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useLocation } from "react-router-dom";
import { SuitesDisplayer } from "@/components/SuitesDisplayer/SuitesDisplayer";
import { useGoToCheckout } from "@/hooks/useGoToCheckout";
import { YourStayWrapper } from "@/components/YourStayWrapper/YourStayWrapper";
import { useGoToHomepage } from "@/hooks/useGoToHomepage";
import { GoToCheckout } from "@/components/Buttons/GoToCheckout";

export const SearchResults = () => {
  const isMobile = window.innerWidth < 1024;
  const location = useLocation();
  useFillGuestContext(location.search);
  const { numOfGuests, selectedSuiteIndex } = useGuestInfo();
  const { data, error, isError, isLoading, isSuccess } =
    useFetchAvailableRooms();
  const canGoToCheckout =
    numOfGuests.length === selectedSuiteIndex.selected.length;
  useGoToCheckout(selectedSuiteIndex.selected.length);
  useGoToHomepage(numOfGuests.length === 0);
  console.log(data);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] auto-rows-auto gap-x-6 min-h-[calc(100svh-90px)] bg-gray-100 px-4 xl:px-16 pt-8 max-w-[2000px]">
      <div className="static lg:sticky lg:top-[5%] col-start-1 col-end-2 lg:col-start-2 col-end-3">
        <YourStayWrapper />
        {!isMobile && canGoToCheckout && <GoToCheckout hasMargin />}
      </div>
      {isMobile && canGoToCheckout && (
        <div
          className="fixed flex items-center justify-items-center justify-center w-full bottom-0 left-0 bg-neutral-300 h-min py-4 translate-y-full px-4 animate-button-slide-up z-[20]"
          style={{ animationFillMode: "forwards" }}
        >
          <GoToCheckout />
        </div>
      )}
      <section className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2">
        <div className="w-full">
          {!isMobile && <SearchResultsHeader />}
          <ChooseRoom suiteIndex={selectedSuiteIndex.current} />
        </div>

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
                    roomData={data?.data.suites[index]}
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
