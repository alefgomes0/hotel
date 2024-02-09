import format from "date-fns/format";
import React from "react";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { YourStayArrow } from "../svg/YourStayArrow";
import { fetchPartialPrice } from "@/api/fetchPartialPrice";

const partials = await fetchPartialPrice(1, 2)

export const YourStay = () => {
  /*   const {
    checkIn,
    checkOut,
    daysOfStay,
    numOfGuests,
    getPartialAmount,
    getTaxesAndFees,
    getTotalAmount,
  } = useGuestInfo(); */

  console.log(partials)

  return (
    <article className="sticky top-[5%] row-start-1 row-end-3 col-start-2 col-end-3 self-start flex flex-col w-[400px] justify-center text-gray-700 border-[1px] border-gray-400 gap-4 px-6 py-3 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
      {/*       <h6 className="text-xl font-semibold tracking-wider">Your Stay</h6>
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
      {numOfGuests.map((suite, index) => {
        return (
          <React.Fragment key={index}>
            {suite.selectedRoom.name && (
              <div className="flex flex-col gap-y-3 border-t-[1px] border-gray-400 pt-3">
                <p className="font-medium">SUITE {index + 1}</p>
                <div className="flex items-center justify-between" key={index}>
                  <div>
                    <p>{suite.selectedRoom.name} Suite</p>
                    <p className="text-xs opacity-70 mt-[-2px]">
                      {suite.adult} {suite.adult === 1 ? "adult" : "adults"},{" "}
                      {suite.children > 0 && (
                        <>
                          {suite.children}{" "}
                          {suite.children === 1 ? "child" : "children"},{" "}
                        </>
                      )}
                      {daysOfStay} {daysOfStay === 1 ? "night" : "nights"}
                    </p>
                  </div>
                  <p className="font-medium">${getPartialAmount(index)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="opacity-90">Taxes and Fees</p>
                  <p className="font-medium">${getTaxesAndFees(index)}</p>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
      <div className="h-[1px] bg-gray-400"></div>
      <div className="flex items-center justify-between text-xl">
        <p className="font-medium">Total:</p>
        <p className="font-bold">${getTotalAmount()}</p>
      </div> */}
    </article>
  );
};
