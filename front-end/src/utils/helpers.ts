import { numOfGuestsProps } from "../types/numOfGuestsProps";
import { RoomProps } from "../types/RoomProps";

export const filterSuiteById = (
  suiteArray: RoomProps[],
  searchedId: number
) => {
  return suiteArray.find((suite) => suite.id === searchedId);
};

export const getGuestInfo = (guestData: numOfGuestsProps[]) => {
  let totalGuests = {
    adult: 0,
    children: 0,
  };
  for (let i = 0; i < guestData.length; i++) {
    totalGuests = {
      adult: totalGuests.adult + guestData[i].adult,
      children: totalGuests.children + guestData[i].children,
    };
  }

  return totalGuests;
};
