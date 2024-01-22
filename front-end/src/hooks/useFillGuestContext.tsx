import { useGuestInfo } from "./useGuestInfo";

export const useFillGuestContext = (urlParams: string) => {
  const { setCheckIn, setCheckOut, setNumOfGuests } = useGuestInfo();
  const regex =
    /checkin=([^&]+)%20\d{2}:\d{2}:\d{2}&checkout=([^&]+)%20\d{2}:\d{2}:\d{2}&rooms=([^&]+)&adults=([^&]+)&children=([^&]+)/;
  const matches = urlParams.match(regex);
  if (!matches) return;

  const checkIn: Date = new Date(`${matches[1]}Z`);
  const checkOut = new Date(`${matches[2]}Z`);
  const apts = Number(matches[3]);
  const adults = Number(matches[4]);
  const children = Number(matches[5]);

  setCheckIn(checkIn);
  setCheckOut(checkOut);
  setNumOfGuests({
    apartment: apts,
    adult: adults,
    children,
  });
};
