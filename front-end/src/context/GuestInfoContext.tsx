import { differenceInDays } from "date-fns";
import React, { createContext, useState } from "react";
import { SearchFieldValues } from "../types/SearchFieldValues";

type GuestInfoProviderProps = {
  children: React.ReactNode;
};

type numOfGuestsProps = {
  adult: number;
  children: number;
};

type selectedRoomProps = {
  daysOfStay: number;
  name: string;
  pricePerDay: number;
};

type GuestInfoContextValues = {
  checkIn: null | Date;
  setCheckIn: React.Dispatch<React.SetStateAction<null | Date>>;
  checkOut: null | Date;
  setCheckOut: React.Dispatch<React.SetStateAction<null | Date>>;
  numOfGuests: numOfGuestsProps;
  daysOfStay: number;
  partialAmount: number;
  taxesAndFees: number;
  totalAmount: number;
  selectedRoom: selectedRoomProps;
  setSelectedRoom: React.Dispatch<React.SetStateAction<selectedRoomProps>>;
  setNumOfGuests: React.Dispatch<React.SetStateAction<numOfGuestsProps>>;
  getFieldValue: (field: SearchFieldValues) => number;
  increaseQuantity: (field: SearchFieldValues, event: React.MouseEvent) => void;
  decreaseQuantity: (field: SearchFieldValues, event: React.MouseEvent) => void;
};

export const GuestInfoContext = createContext({} as GuestInfoContextValues);

export const GuestInfoProvider = ({ children }: GuestInfoProviderProps) => {
  const [checkIn, setCheckIn] = useState<null | Date>(null);
  const [checkOut, setCheckOut] = useState<null | Date>(null);
  const [numOfGuests, setNumOfGuests] = useState<numOfGuestsProps>({
    adult: 1,
    children: 0,
  });
  const [selectedRoom, setSelectedRoom] = useState<selectedRoomProps>({
    daysOfStay: 0,
    name: "",
    pricePerDay: 0,
  });

  const daysOfStay = differenceInDays(checkOut as Date, checkIn as Date);
  const partialAmount = daysOfStay * selectedRoom.pricePerDay;
  const taxesAndFees = Math.round(partialAmount * 0.043);
  const totalAmount = partialAmount + taxesAndFees;

  const getFieldValue = (field:  "adult" | "children") => {
     if (field === "adult") return numOfGuests.adult;
    else return numOfGuests.children;
  };

  const increaseQuantity = (
    field:  "adult" | "children",
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (field === "adult") {
      if (numOfGuests.adult >  2 || numOfGuests.adult < 1) return;
      setNumOfGuests((prevState) => ({
        ...prevState,
        adult: prevState.adult + 1,
      }));
    } else {
      if (numOfGuests.children > 0) return;
      setNumOfGuests((prevState) => ({
        ...prevState,
        children: prevState.children + 1,
      }));
    }
  };

  const decreaseQuantity = (
    field:  "adult" | "children",
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (field === "apartment") {
      if (numOfGuests.apartment <= 1) return;
      setNumOfGuests((prevState) => ({
        ...prevState,
        apartment: prevState.apartment - 1,
      }));
    } else if (field === "adult") {
      if (numOfGuests.adult <= 1) return;
      setNumOfGuests((prevState) => ({
        ...prevState,
        adult: prevState.adult - 1,
      }));
    } else {
      if (numOfGuests.children === 0) return;
      setNumOfGuests((prevState) => ({
        ...prevState,
        children: prevState.children - 1,
      }));
    }
  };

  return (
    <GuestInfoContext.Provider
      value={{
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
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
