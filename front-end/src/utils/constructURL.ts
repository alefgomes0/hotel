import { formattedTime } from "./formattedTime";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";

export const constructURL = (
  checkIn: Date | null,
  checkOut: Date | null,
  guestData: numOfGuestsProps[]
): string => {
  let url = `availability?checkin=${formattedTime(
    checkIn as Date,
    "14:00:00"
  )}&checkout=${formattedTime(checkOut as Date, "11:00:00")}`;
  for (let i = 0; i < guestData.length; i++) {
    const roomNumber = i + 1;
    const room = `&room=${roomNumber}&adults=${guestData[i].adult}&children=${guestData[i].children}`;
    url += room;
  }

  return url;
};
