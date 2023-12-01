import React, { createContext, useState } from "react";
import { SearchFieldValues } from "../types/SearchFieldValues"

type GuestInfoProviderProps = {
  children: React.ReactNode;
};

type SearchInfoProps = {
  numOfApartment: number;
  numOfAdult: number;
  numOfChildren: number;
};

type GuestInfoContextValues = {
  checkIn: null | Date;
  setCheckIn: React.Dispatch<React.SetStateAction<null | Date>>;
  checkOut: null | Date;
  setCheckOut: React.Dispatch<React.SetStateAction<null | Date>>;
  searchInfo: SearchInfoProps;
  setSearchInfo: React.Dispatch<React.SetStateAction<SearchInfoProps>>;
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
  const [searchInfo, setSearchInfo] = useState<SearchInfoProps>({
    numOfApartment: 1,
    numOfAdult: 1,
    numOfChildren: 0,
  });

  const getFieldValue = (field: "apartment" | "adult" | "children") => {
    if (field === "apartment") return searchInfo.numOfApartment;
    else if (field === "adult") return searchInfo.numOfAdult;
    else return searchInfo.numOfChildren;
  };

  const increaseQuantity = (
    field: "apartment" | "adult" | "children",
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (field === "apartment") {
      if (searchInfo.numOfApartment >= 5) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfApartment: prevState.numOfApartment + 1,
      }));
    } else if (field === "adult") {
      if (searchInfo.numOfAdult > searchInfo.numOfApartment * 2) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfAdult: prevState.numOfAdult + 1,
      }));
    } else {
      if (searchInfo.numOfChildren > searchInfo.numOfAdult) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfChildren: prevState.numOfChildren + 1,
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
      if (searchInfo.numOfApartment <= 1) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfApartment: prevState.numOfApartment - 1,
      }));
    } else if (field === "adult") {
      if (searchInfo.numOfAdult <= 1) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfAdult: prevState.numOfAdult - 1,
      }));
    } else {
      if (searchInfo.numOfChildren === 0) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfChildren: prevState.numOfChildren - 1,
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
        searchInfo,
        setSearchInfo,
        getFieldValue,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </GuestInfoContext.Provider>
  );
};
