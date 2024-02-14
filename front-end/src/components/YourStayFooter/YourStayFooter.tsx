import { useFetchTotalPrice } from "@/hooks/useFetchTotalPrice";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayFooterSkeleton } from "../Skeletons/YourStayFooterSkeleton";

export const YourStayFooter = () => {
  const { selectedSuiteIndex } = useGuestInfo();
  const { data, error, isLoading, isSuccess } = useFetchTotalPrice(
    selectedSuiteIndex.selected
  );
  return (
    <>
      {isLoading && <YourStayFooterSkeleton />}
      <div className="flex items-center justify-between text-xl">
        <p className="font-medium">Total:</p>
        {isSuccess && <p className="font-bold">${data?.data.totalAmount}</p>}
      </div>
    </>
  );
};
