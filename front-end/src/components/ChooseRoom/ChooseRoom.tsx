import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useState } from "react";

export const ChooseRoom = () => {
  const { numOfGuests } = useGuestInfo();
  const [currentSuite, setCurrentSuite] = useState<number>(1);

  return (
    <article className="relative w-full grid grid-rows-[auto_1fr] grid-cols-3 items-center text-gray-600 mt-6 mb-6">
      <h6 className="row-start-1 row-end-3 col-start-1 col-end-4 text-xl font-medium mb-6 opacity-90">
        SELECT YOUR SUITE {currentSuite}
      </h6>
      <div className="flex items-center border-y-[1px] border-gray-300 col-start-1 col-end-4">
        {numOfGuests.map((suite, index) => {
          return (
            <div key={index} className="px-4 pt-4 lg:w-48">
              <p className="font-bold text-xs ">SUITE {index + 1}</p>
              <p className="text-xs font-thin opacity-70 pb-4">
                {suite.adult} {suite.adult === 1 ? "adult" : "adults"},{" "}
                {suite.children} {suite.children === 1 ? "child" : "children"}
              </p>
              <div
                className={`absolute lg:w-32 h-[3px] ${
                  currentSuite === index + 1 ? "bg-gray-900" : ""
                } rounded-sm`}
              ></div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
