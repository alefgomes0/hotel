import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayArrow } from "../svg/YourStayArrow";
import format from "date-fns/format";

export const YourStayHeader = () => {
  const { checkIn, checkOut } = useGuestInfo();

  return (
    <>
      <h6 className="text-xl font-semibold tracking-wider">Your Stay</h6>
      <div className="grid grid-rows-1 grid-cols-2">
        <div className="flex flex-col">
          <p className="font-medium opacity-90">Check-in</p>
          <p className="text-xs opacity-70">After 2 p.m</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium opacity-90">Check-out</p>
          <p className="text-xs opacity-70">Before 11 a.m</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-sm opacity-90">
          {checkIn && format(checkIn as Date, "eee,  MMMM dd, yyyy")}
        </p>
        <YourStayArrow width={18} height={18} />
        <p className="text-sm opacity-90">
          {checkOut && format(checkOut as Date, "eee,  MMMM dd, yyyy")}
        </p>
      </div>
    </>
  );
};
