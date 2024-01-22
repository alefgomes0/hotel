import { useEffect } from "react";
import { useGuestInfo } from "./useGuestInfo";

export const useFillGuestContext = (urlParams: string) => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, setNumOfGuests } = useGuestInfo();

  useEffect(() => {
    const fillGuestInfo = () => {
      if (checkIn && checkOut) return;
      const regex =
        /checkin=([^&]+)%20\d{2}:\d{2}:\d{2}&checkout=([^&]+)%20\d{2}:\d{2}:\d{2}&rooms=([^&]+)&adults=([^&]+)&children=([^&]+)/;
      const matches = urlParams.match(regex);
      if (!matches) return;

      const paramsCheckIn = new Date(`${matches[1]}Z`);
      const paramsCheckOut = new Date(`${matches[2]}Z`);
      const apts = Number(matches[3]);
      const adults = Number(matches[4]);
      const children = Number(matches[5]);

      setCheckIn(paramsCheckIn);
      setCheckOut(paramsCheckOut);
      setNumOfGuests({
        apartment: apts,
        adult: adults,
        children,
      });
    };

    fillGuestInfo();
  }, []);
};
