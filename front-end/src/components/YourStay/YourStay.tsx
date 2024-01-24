import format from "date-fns/format";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayArrow } from "../svg/YourStayArrow";

export const YourStay = () => {
  const {
    checkIn,
    checkOut,
    daysOfStay,
    numOfGuests,
    partialAmount,
    taxesAndFees,
    totalAmount,
    selectedRoom,
  } = useGuestInfo();

  return (
    <article className="sticky top-[5%] flex flex-col w-[400px] justify-center text-gray-700 border-[1px] border-gray-400 gap-4 px-6 py-3 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
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
      {selectedRoom.name && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{selectedRoom.name} Suite</p>
              <p className="text-xs opacity-70 mt-[-2px]">
                {numOfGuests.apartment} {numOfGuests.apartment > 1 ? "suites" : "suite"},{" "}
                {numOfGuests.adult} {numOfGuests.adult > 1 ? "adults" : "adult"}
                ,{" "}
                {numOfGuests.children > 0 && (
                  <>
                    {numOfGuests.children}{" "}
                    {numOfGuests.children > 1 ? "children" : "child"},{" "}
                  </>
                )}
                {daysOfStay} {daysOfStay > 1 ? "nights" : "night"}
              </p>
            </div>
            <p>${partialAmount}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium">Taxes and Fees</p>
            <p>${taxesAndFees}</p>
          </div>
        </>
      )}
      <div className="h-[1px] bg-gray-400"></div>
      <div className="flex items-center justify-between text-xl font-medium">
        <p>Total:</p>
        <p>${totalAmount}</p>
      </div>
    </article>
  );
};