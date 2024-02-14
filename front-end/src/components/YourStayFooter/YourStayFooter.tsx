import { useFetchTotalPrice } from "@/hooks/useFetchTotalPrice";

export const YourStayFooter = () => {
  const { data, error, isLoading } = useFetchTotalPrice();
  return (
    <>
      <div className="flex items-center justify-between text-xl">
        <p className="font-medium">Total:</p>
        {isLoading ? (
          <div className="w-16 h-6 bg-[#c7c7c7] animate-pulse"></div>
        ) : (
          <p className="font-bold">${data?.data.totalAmount}</p>
        )}
      </div>
    </>
  );
};
