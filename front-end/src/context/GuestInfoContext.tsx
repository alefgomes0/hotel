import { differenceInDays } from "date-fns";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";
import React, { createContext, useRef, useState } from "react";
import { RoomProps } from "@/types/RoomProps";
import { SearchFieldValues } from "../types/SearchFieldValues";
import { SelectedSuiteIndexProps } from "@/types/SuiteIndexProps";

type GuestInfoProviderProps = {
  children: React.ReactNode;
};

type GuestInfoContextValues = {
  addNewRoom: () => void;
  changeSelectedSuite: (currentIndex: number) => void;
  checkIn: null | Date;
  setCheckIn: React.Dispatch<React.SetStateAction<null | Date>>;
  checkOut: null | Date;
  handleSuiteSelection: (index: number, roomData: RoomProps) => void;
  setCheckOut: React.Dispatch<React.SetStateAction<null | Date>>;
  selectedSuiteIndex: { current: number; selected: number[] };
  setSelectedSuiteIndex: React.Dispatch<
    React.SetStateAction<SelectedSuiteIndexProps>
  >;
  daysOfStay: number;
  deleteSelectedSuite: (suiteIndex: number) => void;
  numOfGuests: numOfGuestsProps[];
  setNumOfGuests: React.Dispatch<React.SetStateAction<numOfGuestsProps[]>>;
  getFieldValue: (field: SearchFieldValues, index: number) => number;
  increaseQuantity: (
    field: SearchFieldValues,
    index: number,
    event: React.MouseEvent
  ) => void;
  decreaseQuantity: (
    field: SearchFieldValues,
    index: number,
    event: React.MouseEvent
  ) => void;
  hasUserReturned: React.MutableRefObject<boolean>;
};

const GuestInfoContext = createContext({} as GuestInfoContextValues);

const GuestInfoProvider = ({ children }: GuestInfoProviderProps) => {
  const [checkIn, setCheckIn] = useState<null | Date>(null);
  const [checkOut, setCheckOut] = useState<null | Date>(null);
  const [numOfGuests, setNumOfGuests] = useState<numOfGuestsProps[]>([
    {
      adult: 1,
      children: 0,
      selectedRoom: {
        id: null,
        name: "",
        pricePerDay: 0,
      },
    },
  ]);

  const [selectedSuiteIndex, setSelectedSuiteIndex] =
    useState<SelectedSuiteIndexProps>({
      current: 0,
      selected: [],
    });

  const changeSelectedSuite = (currentIndex: number) => {
    setSelectedSuiteIndex((prevState) => {
      return {
        current: currentIndex,
        selected: prevState.selected.filter(
          (selectedIndex) => selectedIndex !== currentIndex
        ),
      };
    });
  };

  const deleteSelectedSuite = (suiteIndex: number) => {
    setNumOfGuests((prevState) => {
      return prevState.filter((_, index) => index !== suiteIndex);
    });
    changeSelectedSuite(suiteIndex);
  };

  const daysOfStay = differenceInDays(checkOut as Date, checkIn as Date);

  const getFieldValue = (field: "adult" | "children", index: number) => {
    if (field === "adult") return numOfGuests[index].adult;
    else return numOfGuests[index].children;
  };

  const addNewRoom = () => {
    if (numOfGuests.length > 2) return;
    setNumOfGuests([
      ...numOfGuests,
      {
        adult: 1,
        children: 0,
        selectedRoom: {
          id: null,
          name: "",
          pricePerDay: 0,
        },
      },
    ]);
  };

  const increaseQuantity = (
    field: "adult" | "children",
    index: number,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (field === "adult") {
      if (numOfGuests[index].adult > 2 || numOfGuests[index].adult < 1) return;
      setNumOfGuests(() => {
        return numOfGuests.map((guestData, arrayIndex) => {
          if (index === arrayIndex) {
            return { ...guestData, adult: guestData.adult + 1 };
          } else return guestData;
        });
      });
    } else {
      if (numOfGuests[index].children > 0) return;
      setNumOfGuests(() => {
        return numOfGuests.map((guestData, arrayIndex) => {
          if (index === arrayIndex) {
            return { ...guestData, children: guestData.children + 1 };
          } else return guestData;
        });
      });
    }
  };

  const decreaseQuantity = (
    field: "adult" | "children",
    index: number,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (field === "adult") {
      if (numOfGuests[index].adult <= 1) return;
      setNumOfGuests(() => {
        return numOfGuests.map((guestData, arrayIndex) => {
          if (index === arrayIndex) {
            return { ...guestData, adult: guestData.adult - 1 };
          } else return guestData;
        });
      });
    } else {
      if (numOfGuests[index].children === 0) return;
      setNumOfGuests(() => {
        return numOfGuests.map((guestData, arrayIndex) => {
          if (index === arrayIndex) {
            return { ...guestData, children: guestData.children - 1 };
          } else return guestData;
        });
      });
    }
  };

  const handleSuiteSelection = (index: number, roomData: RoomProps) => {
    setNumOfGuests(() => {
      return numOfGuests.map((guestData, arrayIndex) => {
        if (index === arrayIndex) {
          return {
            ...guestData,
            selectedRoom: {
              id: roomData.id,
              name: roomData.type,
              pricePerDay: Number(roomData.price_per_day),
            },
          };
        } else return guestData;
      });
    });
  };

  let hasUserReturned = useRef(false);

  return (
    <GuestInfoContext.Provider
      value={{
        addNewRoom,
        changeSelectedSuite,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        deleteSelectedSuite,
        numOfGuests,
        setNumOfGuests,
        selectedSuiteIndex,
        setSelectedSuiteIndex,
        handleSuiteSelection,
        daysOfStay,
        getFieldValue,
        increaseQuantity,
        decreaseQuantity,
        hasUserReturned,
      }}
    >
      {children}
    </GuestInfoContext.Provider>
  );
};

export { GuestInfoContext, GuestInfoProvider };
