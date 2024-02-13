import { useGuestInfo } from "@/hooks/useGuestInfo";

export const ChooseRoomSkeleton = () => {
  const { numOfGuests } = useGuestInfo();

  return (
    <article className="flex flex-col text-gray-600 mt-6 mb-6">
      <div className="w-[200px] h-8 mb-6 animate-pulse bg-[#c7c7c7]"></div>
      <div className="w-full h-[2px] animate-pulse bg-[#c7c7c7]"></div>
      <div className="flex items-center pr-3">
        {numOfGuests.map((_, index) => {
          return (
            <div key={index} className="px-4 pt-4 lg:w-48">
              <div className="w-[100px] h-4 animate-pulse bg-[#c7c7c7]"></div>
            </div>
          );
        })}
        <div className="w-full h-[2px] animate-pulse bg-[#c7c7c7]"></div>
      </div>
    </article>
  );
};
