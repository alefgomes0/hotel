export const RoomDisplayerSkeleton = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-[auto_1fr] h-64 border-2 border-gray-300 rounded-sm p-4">
      <div className="w-[320px] h-[192px] bg-[#c7c7c7] animate-pulseFast"></div>
      <div></div>
    </div>
  );
};
