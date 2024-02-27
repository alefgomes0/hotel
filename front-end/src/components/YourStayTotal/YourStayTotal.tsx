import { useFetchTotalPrice } from "@/hooks/useFetchTotalPrice";

export const YourStayTotal = () => {
  const { data, error, isLoading } = useFetchTotalPrice();
  return (
    <>
      <div className="flex items-center justify-between text-xl font-medium">
        <p>Total:</p>
        {isLoading ? (
          <div className="w-16 h-6 bg-[#c7c7c7] animate-pulse"></div>
        ) : (
          <p>${data?.data.totalAmount}</p>
        )}
      </div>
    </>
  );
};
