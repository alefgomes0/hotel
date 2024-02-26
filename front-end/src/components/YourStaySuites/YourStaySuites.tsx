import React from "react";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";
import { useFetchPartialPrice } from "@/hooks/useFetchPartialPrice";
import { YourStaySuiteSkeleton } from "../Skeletons/YourStaySuiteSkeleton";
import { TrashIcon } from "../svg/TrashIcon";
import { EditIcon } from "../svg/EditIcon";

type YourStaySuitesProps = {
  suite: numOfGuestsProps;
  index: number;
};

export const YourStaySuites = ({ suite, index }: YourStaySuitesProps) => {
  const { changeSelectedSuite, daysOfStay, deleteSelectedSuite } = useGuestInfo();
  const { data, error, isLoading, isSuccess } = useFetchPartialPrice(
    suite.selectedRoom.id as number,
    index
  );
  console.log(data);

  return (
    <React.Fragment key={index}>
      {!suite.selectedRoom.name && <></>}
      {isLoading && <YourStaySuiteSkeleton />}
      {isSuccess && suite.selectedRoom.name && (
        <div className="flex flex-col gap-y-3 border-t-[1px] border-gray-400 pt-3">
          <div className="flex items-center justify-between">
            <p className="font-medium">SUITE {index + 1}</p>
            <div className="flex gap-x-4">
            <button
                className="flex items-center gap-x-1"
                onClick={() => changeSelectedSuite(index)}
                title="edit this suite"
                aria-label="edit suite"
              >
                <EditIcon width={18} height={18} />
                <p className="text-xs opacity-80">Edit</p>
              </button>
              <button
                className="flex items-center gap-x-1"
                onClick={() => deleteSelectedSuite(index)}
                title="remove this suite"
                aria-label="remove suite"
              >
                <TrashIcon width={20} height={20} />
                <p className="text-xs opacity-80">Delete</p>
              </button>
            </div>
          </div>
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
