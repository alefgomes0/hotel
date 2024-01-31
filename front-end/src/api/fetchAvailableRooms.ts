import axios from "./axios";
import { formattedTime } from "../utils/formattedTime";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";

export const fetchAvailableRooms = async (
  checkIn: Date | null,
  checkOut: Date | null,
  guestData: numOfGuestsProps[]
) => {
  const searchedInfo = JSON.stringify({
    checkIn: formattedTime(checkIn as Date, "14:00:00"),
    checkOut: formattedTime(checkOut as Date, "11:00:00"),
    numOfGuests: guestData,
  });

  return await axios.get(`/rooms/${searchedInfo}`);
};
