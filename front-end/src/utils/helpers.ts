import { numOfGuestsProps } from "../types/numOfGuestsProps";
import { RoomProps } from "../types/RoomProps";

const filterSuiteById = (suiteArray: RoomProps[], searchedId: number) => {
  return suiteArray.find((suite) => suite.id === searchedId);
};

const getGuestInfo = (guestData: numOfGuestsProps[]) => {
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

const getSuitesType = (guestData: numOfGuestsProps[], selectedSuiteIndex: number[]) => {
  const suiteTypes = [];
  for (let i = 0;  i < selectedSuiteIndex.length; i++) {
    suiteTypes.push(guestData[i].selectedRoom.name)
  }
  return suiteTypes;
}


export {filterSuiteById, getGuestInfo, getSuitesType };
