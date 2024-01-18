import { differenceInDays } from "date-fns";
import React, { createContext, useState } from "react";
import { SearchFieldValues } from "../types/SearchFieldValues"

type GuestInfoProviderProps = {
  children: React.ReactNode;
};

type numOfGuestsProps = {
  apartment: number;
  adult: number;
  children: number;
};

type GuestInfoContextValues = {
  checkIn: null | Date;
  setCheckIn: React.Dispatch<React.SetStateAction<null | Date>>;
  checkOut: null | Date;
  setCheckOut: React.Dispatch<React.SetStateAction<null | Date>>;
  numOfGuests: numOfGuestsProps;
  daysOfStay: number;
  setNumOfGuests: React.Dispatch<React.SetStateAction<numOfGuestsProps>>;
  getFieldValue: (field: SearchFieldValues) => number;
  increaseQuantity: (
    field: SearchFieldValues,
    event: React.MouseEvent
  ) => void;
  decreaseQuantity: (
    field: SearchFieldValues,
    event: React.MouseEvent
  ) => void;
};

export const GuestInfoContext = createContext({} as GuestInfoContextValues);

export const GuestInfoProvider = ({ children }: GuestInfoProviderProps) => {
  const [checkIn, setCheckIn] = useState<null | Date>(null);
  const [checkOut, setCheckOut] = useState<null | Date>(null);
  const [numOfGuests, setNumOfGuests] = useState<numOfGuestsProps>({
    apartment: 1,
    adult: 1,
    children: 0,
  });
  const daysOfStay = differenceInDays(checkOut as Date, checkIn as Date);

  const getFieldValue = (field: "apartment" | "adult" | "children") => {
    if (field === "apartment") return numOfGuests.apartment;
    else if (field === "adult") return numOfGuests.adult;
    else return numOfGuests.children;
  };

  const increaseQuantity = (
    field: "apartment" | "adult" | "children",
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (field === "apartment") {
      if (numOfGuests.apartment >= 5) return;
      setNumOfGuests((prevState) => ({
        ...prevState,
        apartment: prevState.apartment + 1,
      }));
    } else if (field === "adult") {
      if (numOfGuests.adult > numOfGuests.apartment * 2) return;
      setNumOfGuests((prevState) => ({
        ...prevState,
        adult: prevState.adult + 1,
      }));
    } else {
      if (numOfGuests.children >= numOfGuests.apartment) return;
      setNumOfGuests((prevState) => ({
        ...prevState,
        children: prevState.children + 1,
      }));
    }
  };

  const decreaseQuantity = (
    field: "apartment" | "adult" | "children",
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
        getFieldValue,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </GuestInfoContext.Provider>
  );
};
