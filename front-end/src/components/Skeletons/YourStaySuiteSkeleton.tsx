export const YourStaySuiteSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-3 border-t-[1px] border-gray-400 pt-3">
      <div className="w-20 h-4 bg-[#c7c7c7] animate-pulse"></div>
      <div className="flex items-center justify-between">
        <div>
          <div className="w-16 h-4 bg-[#c7c7c7] animate-pulse"></div>
          <div className="w-12 h-2 bg-[#c7c7c7] animate-pulse mt-3"></div>
        </div>
        <div className="w-20 h-4 bg-[#c7c7c7] animate-pulse"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-20 h-4 bg-[#c7c7c7] animate-pulse"></div>
        <div className="w-12 h-6 bg-[#c7c7c7] animate-pulse"></div>
      </div>
    </div>
  );
};
