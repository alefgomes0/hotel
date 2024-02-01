import { extractedSuites } from "@/utils/extractedSuites";
import React from "react";
import { SuiteCard } from "../SuiteCard/SuiteCard";

type SuitesDisplayerProps = {
  roomData: object | "";
  arrayIndex: number;
};

export const SuitesDisplayer = ({
  roomData,
  arrayIndex,
}: SuitesDisplayerProps) => {
  const suites = extractedSuites(roomData);
  return (
    <>
      {suites.map((room, index) => {
        return (
          <React.Fragment key={index}>
            {room ? (
              <SuiteCard room={room} index={arrayIndex} suitesTypes={suites} />
            ) : (
              <></>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};
