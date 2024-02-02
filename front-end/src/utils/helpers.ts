import { RoomProps } from "../types/RoomProps";

export const filterSuiteById = (suiteArray: RoomProps[], searchedId: number) => {
  return suiteArray.find((suite) => suite.id === searchedId);
};
