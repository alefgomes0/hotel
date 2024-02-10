import { extractedSuites } from "@/utils/extractedSuites";
import React from "react";
import { SuiteCard } from "../SuiteCard/SuiteCard";
import { SelectedSuiteIndexProps } from "@/types/SuiteIndexProps";

type SuitesDisplayerProps = {
  roomData: object | "";
  arrayIndex: number;
  selectedSuiteIndex: SelectedSuiteIndexProps;
  setSelectedSuiteIndex: React.Dispatch<
    React.SetStateAction<SelectedSuiteIndexProps>
  >;
};

export const SuitesDisplayer = ({
  roomData,
  arrayIndex,
  selectedSuiteIndex,
  setSelectedSuiteIndex,
}: SuitesDisplayerProps) => {
  const suites = extractedSuites(roomData);
  return (
    <>
      {suites.map((room, index) => {
        return (
          <React.Fragment key={index}>
            {room ? (
              <SuiteCard
                room={room}
                index={arrayIndex}
                selectedSuiteIndex={selectedSuiteIndex}
                setSelectedSuiteIndex={setSelectedSuiteIndex}
              />
            ) : (
              <></>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};
