export const PaymentFormSkeleton = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_1fr_1fr] grid-cols-1 min-h-[250px] border-2 border-gray-400 p-4">
      <h4 className="text-2xl font-thin mb-6">PAYMENT INFORMATION</h4>
      <div className="grid grid-rows-1 grid-cols-[2fr_1fr_1fr] gap-x-6">
        <div className="h-12 bg-[#c7c7c7] animate-pulse"></div>
        <div className="h-12 bg-[#c7c7c7] animate-pulse"></div>
        <div className="h-12 bg-[#c7c7c7] animate-pulse"></div>
      </div>
      <div className="h-12 bg-[#c7c7c7] animate-pulse"></div>
      <div className="h-16 bg-[#c7c7c7] animate-pulse"></div>
    </div>
  );
};
