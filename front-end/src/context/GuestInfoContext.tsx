import { differenceInDays } from "date-fns";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";
import React, { createContext, useState } from "react";
import { SearchFieldValues } from "../types/SearchFieldValues";

type GuestInfoProviderProps = {
  children: React.ReactNode;
};

type selectedRoomProps = {
  daysOfStay: number;
  name: string;
  pricePerDay: number;
};

type GuestInfoContextValues = {
  addNewRoom: () => void;
  checkIn: null | Date;
  setCheckIn: React.Dispatch<React.SetStateAction<null | Date>>;
  checkOut: null | Date;
  setCheckOut: React.Dispatch<React.SetStateAction<null | Date>>;
  daysOfStay: number;
  deleteRoom: (index: number) => void;
  numOfGuests: numOfGuestsProps[];
  partialAmount: number;
  taxesAndFees: number;
  totalAmount: number;
  selectedRoom: selectedRoomProps;
  setSelectedRoom: React.Dispatch<React.SetStateAction<selectedRoomProps>>;
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

export const GuestInfoContext = createContext({} as GuestInfoContextValues);

export const GuestInfoProvider = ({ children }: GuestInfoProviderProps) => {
  const [checkIn, setCheckIn] = useState<null | Date>(null);
  const [checkOut, setCheckOut] = useState<null | Date>(null);
  const [numOfGuests, setNumOfGuests] = useState<numOfGuestsProps[]>([
    {
      adult: 1,
      children: 0,
    },
  ]);
  const [selectedRoom, setSelectedRoom] = useState<selectedRoomProps>({
    daysOfStay: 0,
    name: "",
    pricePerDay: 0,
  });

  const daysOfStay = differenceInDays(checkOut as Date, checkIn as Date);
  const partialAmount = daysOfStay * selectedRoom.pricePerDay;
  const taxesAndFees = Math.round(partialAmount * 0.043);
  const totalAmount = partialAmount + taxesAndFees;

  const getFieldValue = (field: "adult" | "children", index: number) => {
    if (field === "adult") return numOfGuests[index].adult;
    else return numOfGuests[index].children;
  };

  const addNewRoom = () => {
    if (numOfGuests.length > 2) return;
    setNumOfGuests([...numOfGuests, { adult: 1, children: 0 }]);
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
        daysOfStay,
        partialAmount,
        taxesAndFees,
        totalAmount,
        selectedRoom,
        setSelectedRoom,
        getFieldValue,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </GuestInfoContext.Provider>
  );
};
