import format from "date-fns/format";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayArrow } from "../svg/YourStayArrow";

export const YourStay = () => {
  const { checkIn, checkOut, daysOfStay } = useGuestInfo();

  return (
    <article className="flex flex-col w-[400px] justify-center text-gray-700 border-2 border-gray-300 gap-4 px-6 py-3">
      <h6 className="text-xl font-semibold tracking-wider">Your Stay</h6>
      <div className="grid grid-rows-1 grid-cols-2">
        <div className="flex flex-col">
          <p className="font-medium opacity-90">Check-in</p>
          <p className="text-xs opacity-70">Após as 14:00h</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium opacity-90">Check-out</p>
          <p className="text-xs opacity-70">Antes das 11:00h</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-sm opacity-90">
          {format(checkIn as Date, "eee,  MMMM dd, yyyy")}
        </p>
        <YourStayArrow width={20} height={20} />
        <p className="text-sm opacity-90">
          {format(checkOut as Date, "eee,  MMMM dd, yyyy")}
        </p>
      </div>
        <p className="text-xs opacity-70 mt-[-10px]">
          {daysOfStay} {daysOfStay > 1 ? "nights" : "night"}
        </p>
    </article>
  );
};
