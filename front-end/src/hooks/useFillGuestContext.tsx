import { useEffect } from "react";
import { useGuestInfo } from "./useGuestInfo";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";

export const useFillGuestContext = (urlParams: string) => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, setNumOfGuests } =
    useGuestInfo();

  useEffect(() => {
    if (checkIn && checkOut) return;
    const checkinCheckoutPattern: RegExp = /checkin=([^&]+)&checkout=([^&]+)/;
    const checkinCheckoutMatches: RegExpExecArray | null =
      checkinCheckoutPattern.exec(urlParams);
    if (!checkinCheckoutMatches) return;
    const paramsCheckIn: string = decodeURIComponent(
      checkinCheckoutMatches[1]
    ).split(" ")[0];
    const paramsCheckOut: string = decodeURIComponent(
      checkinCheckoutMatches[2]
    ).split(" ")[0];

    console.log(paramsCheckIn.split(" ")[0], paramsCheckOut.split(" ")[0]);

    const roomPattern: RegExp = /room=([^&]+)&adults=([^&]+)&children=([^&]+)/g;

    let roomMatches: RegExpExecArray | null;
    const rooms: string[] = [];
    const adults: string[] = [];
    const children: string[] = [];

    while ((roomMatches = roomPattern.exec(urlParams)) !== null) {
      rooms.push(decodeURIComponent(roomMatches[1]));
      adults.push(decodeURIComponent(roomMatches[2]));
      children.push(decodeURIComponent(roomMatches[3]));
    }

    const guestInfo: numOfGuestsProps[] = [];
    for (let i = 0; i < rooms.length; i++) {
      const data: numOfGuestsProps = {
        adult: Number(adults[i]),
        children: Number(children[i]),
        selectedRoom: {
          name: "",
          pricePerDay: 0,
        },
      };
      guestInfo.push(data);
    }

    setCheckIn(new Date(paramsCheckIn));
    setCheckOut(new Date(paramsCheckOut));
    setNumOfGuests(guestInfo);
  }, [urlParams]);
};
