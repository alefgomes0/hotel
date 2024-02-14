import React from "react";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";
import { useFetchPartialPrice } from "@/hooks/useFetchPartialPrice";
import { YourStaySuiteSkeleton } from "../Skeletons/YourStaySuiteSkeleton";

type YourStaySuitesProps = {
  suite: numOfGuestsProps;
  index: number;
};

export const YourStaySuites = ({ suite, index }: YourStaySuitesProps) => {
  const { daysOfStay } = useGuestInfo();
  const { data, error, isLoading, isSuccess } = useFetchPartialPrice(
    suite.selectedRoom.id as number,
    index
  );
  console.log(data)

  return (
    <React.Fragment key={index}>
      {!suite.selectedRoom.name && <></>}
      {isLoading && <YourStaySuiteSkeleton />}
      {isSuccess && suite.selectedRoom.name && (
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
            <p className="font-medium">${data?.data.partialAmount}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="opacity-90">Taxes and Fees</p>
            <p className="font-medium">${data?.data.taxes}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
