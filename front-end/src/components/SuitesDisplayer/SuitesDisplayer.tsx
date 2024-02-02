import { extractedSuites } from "@/utils/extractedSuites";
import React from "react";
import { SuiteCard } from "../SuiteCard/SuiteCard";
import { SuiteIndexProps } from "@/types/SuiteIndexProps";

type SuitesDisplayerProps = {
  roomData: object | "";
  arrayIndex: number;
  suiteIndex: SuiteIndexProps;
  setSuiteIndex: React.Dispatch<React.SetStateAction<SuiteIndexProps>>;
};

export const SuitesDisplayer = ({
  roomData,
  arrayIndex,
  suiteIndex,
  setSuiteIndex,
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
                suitesTypes={suites}
                suiteIndex={suiteIndex}
                setSuiteIndex={setSuiteIndex}
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
