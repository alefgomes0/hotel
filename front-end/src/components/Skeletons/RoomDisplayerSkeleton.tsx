export const RoomDisplayerSkeleton = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-[auto_1fr] border-2 border-gray-300 gap-x-12 rounded-sm p-4 mb-10">
      <div className="w-[320px] h-[192px] bg-[#c7c7c7] animate-pulse"></div>
      <div className="flex flex-col gap-y-3">
        <div className="w-[250px] h-8 bg-[#c7c7c7] animate-pulse rounded-sm"></div>
        <div className="w-16 h-4 bg-[#c7c7c7] animate-pulse rounded-lg pt-3"></div>
        <div className="pt-3">
          <div className="w-full h-4 bg-[#c7c7c7] animate-pulse"></div>
          <div className="w-10 h-4 bg-[#c7c7c7] animate-pulse mt-1.5"></div>
        </div>
        <div className="pt-4">
          <div className="w-64 h-4 bg-[#c7c7c7] animate-pulse"></div>
          <div className="w-64 h-4 bg-[#c7c7c7] animate-pulse mt-3"></div>
          <div className="w-64 h-4 bg-[#c7c7c7] animate-pulse mt-3"></div>
        </div>
        <div className="self-end pt-8">
          <p className="w-32 h-4 bg-[#c7c7c7] animate-pulse rounded-sm mb-3"></p>
          <div className="w-[192px] h-[64px] bg-[#c7c7c7] animate-pulse rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};
