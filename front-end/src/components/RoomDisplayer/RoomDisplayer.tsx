import { extractedSuites } from "@/utils/extractedSuites";
import { SuiteCard } from "../SuiteCard/SuiteCard";

type RoomDisplayerProps = {
  roomData: object | "";
  arrayIndex: number;
};

export const RoomDisplayer = ({ roomData, arrayIndex }: RoomDisplayerProps) => {
  const suites = extractedSuites(roomData);
  return (
    <>
      {suites.map((room, index) => {
        return (
          <>
            {room ? (
              <SuiteCard room={room} index={index} suitesTypes={suites} />
            ) : (
              <></>
            )}
          </>
        );
      })}
    </>
  );
};
