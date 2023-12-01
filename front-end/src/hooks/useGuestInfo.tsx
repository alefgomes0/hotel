import { GuestInfoContext } from "../context/GuestInfoContext";
import { useContext } from "react";

export const useGuestInfo = () => {
  return useContext(GuestInfoContext);
};
