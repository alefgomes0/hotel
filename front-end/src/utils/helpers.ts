import { TContactInformationSchema } from "@/types/TContactInformationSchema";
import { numOfGuestsProps } from "../types/numOfGuestsProps";
import { RoomProps } from "../types/RoomProps";

const filterSuiteById = (suiteArray: RoomProps[], searchedId: number) => {
  return suiteArray.find((suite) => suite.id === searchedId);
};

const findNextSuite = (
  totalNumOfSuites: number,
  selectedSuites: number[]
): number => {
  const arrayIndexes = getArrayIndexes(totalNumOfSuites);
  for (let i of arrayIndexes) {
    if (!selectedSuites.includes(i)) {
      return i;
    }
  }
  return 0;
};

const getArrayIndexes = (length: number): number[] => {
  return Array.from({ length }, (_, index) => index);
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

const getSuitesType = (
  guestData: numOfGuestsProps[],
  selectedSuiteIndex: number[]
) => {
  const suiteTypes = [];
  for (let i of selectedSuiteIndex) {
    if (guestData[i] === undefined) return 0;
    suiteTypes.push(guestData[i].selectedRoom.name);
  }
  return suiteTypes;
};

const getInputType = (fieldName: keyof TContactInformationSchema) => {
  const loweredFieldName = fieldName.toLocaleLowerCase();

  if (loweredFieldName === "email") {
    return "email";
  } else if (loweredFieldName === "phone") {
    return "phone";
  } else {
    return "text";
  }
};

const getPlaceholderText = (fieldName: keyof TContactInformationSchema) => {
  let placeholderText = "";

  for (let i = 0; i < fieldName.length; i++) {
    if (i === 0) {
      placeholderText += fieldName[i].toUpperCase();
    }

    if (fieldName[i] === fieldName[i].toUpperCase()) {
      placeholderText += ` ${fieldName[i]}`;
    } else if (fieldName[i] !== fieldName[i].toUpperCase() && i !== 0) {
      placeholderText += fieldName[i];
    }
  }

  return placeholderText;
};

const manageScrollBehavior = (
  imageDiv: React.RefObject<HTMLDivElement | null>,
  wrapperRef: React.RefObject<HTMLDivElement | null>
) => {
  const clickEvent = new MouseEvent("click", {
    bubbles: false,
    cancelable: true,
  });

  imageDiv.current?.scrollIntoView({ behavior: "instant" });
  const hideBodyScroll = setInterval(() => {
    if (!wrapperRef.current) return;
    document.body.style.overflow = "hidden";
    imageDiv.current?.dispatchEvent(clickEvent);
    imageDiv.current?.focus();
  }, 50);
  setTimeout(() => {
    clearInterval(hideBodyScroll);
    document.body.style.overflow = "scroll";
  }, 500);
};

const stringifyGuestInfo = (guestData: numOfGuestsProps[]) => {
  const numOfSuites = guestData.length;
  const totalGuests = getGuestInfo(guestData);
  return `${numOfSuites} ${numOfSuites === 1 ? "suite" : "suites"}, ${
    totalGuests.adult
  } ${totalGuests.adult === 1 ? "adult" : "adults"}, ${totalGuests.children} ${
    totalGuests.children === 1 ? "child" : "children"
  }`;
};

export {
  filterSuiteById,
  findNextSuite,
  getArrayIndexes,
  getInputType,
  getGuestInfo,
  getPlaceholderText,
  getSuitesType,
  manageScrollBehavior,
  stringifyGuestInfo,
};
