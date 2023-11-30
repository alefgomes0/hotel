import { useState } from "react";

type GuestInfoProviderProps = {
  children: React.ReactNode;
};

type SearchInfoProps = {
  numOfApartment: number;
  numOfAdult: number;
  numOfChildren: number;
};

export const GuestInfoProvider = ({ children }: GuestInfoProvider) => {
  const [checkIn, setCheckIn] = useState<null | Date>(null);
  const [checkOut, setCheckOut] = useState<null | Date>(null);
  const [searchInfo, setSearchInfo] = useState<SearchInfoProps>({
    numOfApartment: 1,
    numOfAdult: 1,
    numOfChildren: 0,
  });

  const increaseQuantity = (field: "apartment" | "adult" | "children") => {
    if (field === "apartment") {
      if (searchInfo.numOfApartment >= 5) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfApartment: prevState.numOfApartment++,
      }));
    } else if (field === "adult") {
      if (searchInfo.numOfAdult > searchInfo.numOfApartment * 2) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfAdult: prevState.numOfAdult++,
      }));
    } else {
      if (searchInfo.numOfChildren > searchInfo.numOfAdult) return;
      setSearchInfo((prevState) => ({
        ...prevState,
        numOfChildren: prevState.numOfChildren++,
      }));
    }
  };
};
