import { RoomProps } from "@/types/RoomProps";

export const extractedSuites = (roomData: object | "") => {
  const extractedSuites: RoomProps[] = [];
  Object.keys(roomData).forEach((suiteType) => {
    if (roomData === "") return;
    const suiteArray: RoomProps[] = (roomData as Record<string, any>)[
      suiteType
    ];
    if (Array.isArray(suiteArray) && suiteArray.length > 0) {
      extractedSuites.push(suiteArray[0] as RoomProps);
    }
  });

  return extractedSuites;
};
