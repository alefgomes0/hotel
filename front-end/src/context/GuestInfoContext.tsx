import { differenceInDays } from "date-fns";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";
import React, { createContext, useState } from "react";
import { SearchFieldValues } from "../types/SearchFieldValues";
import { RoomProps } from "@/types/RoomProps";

type GuestInfoProviderProps = {
  children: React.ReactNode;
};

type GuestInfoContextValues = {
  addNewRoom: () => void;
  checkIn: null | Date;
  setCheckIn: React.Dispatch<React.SetStateAction<null | Date>>;
  checkOut: null | Date;
  handleSuiteSelection: (index: number, roomData: RoomProps) => void;
  setCheckOut: React.Dispatch<React.SetStateAction<null | Date>>;
  daysOfStay: number;
  deleteRoom: (index: number) => void;
  numOfGuests: numOfGuestsProps[];
  numOfSuites: number;
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
        name: "",
        pricePerDay: 0,
      },
    },
  ]);

  const daysOfStay = differenceInDays(checkOut as Date, checkIn as Date);
  const numOfSuites = numOfGuests.length;

  /*   const getPartialAmount = (index: number) => {
    return daysOfStay * numOfGuests[index].selectedRoom.pricePerDay;
  };

  const getTaxesAndFees = (index: number) => {
    return Math.round(getPartialAmount(index) * 0.043);
  };

  const getTotalTaxesAndFees = () => {
    let totalValue = 0;
    for (let i = 0; i < numOfGuests.length; i++) {
      totalValue += Math.round(getPartialAmount(i) * 0.043);
    }
    return totalValue;
  }; */

  /*   const getTotalAmount = () => {
    let totalValue = 0;
    for (let i = 0; i < numOfGuests.length; i++) {
      totalValue += numOfGuests[i].selectedRoom.pricePerDay * daysOfStay;
    }
    totalValue += getTotalTaxesAndFees();

    return totalValue ? totalValue : 0;
  }; */

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
          name: "",
          pricePerDay: 0,
        },
      },
    ]);
  };

  const deleteRoom = (index: number) => {
    setNumOfGuests((guestInfo) => {
      return guestInfo.filter((_, arrayIndex) => index !== arrayIndex);
    });
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
              name: roomData.type,
              pricePerDay: Number(roomData.price_per_day),
            },
          };
        } else return guestData;
      });
    });
  };

  return (
    <GuestInfoContext.Provider
      value={{
        addNewRoom,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        deleteRoom,
        numOfGuests,
        setNumOfGuests,
        handleSuiteSelection,
        daysOfStay,
        numOfSuites,
        getFieldValue,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </GuestInfoContext.Provider>
  );
};

export { GuestInfoContext, GuestInfoProvider };
