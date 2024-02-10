import { useGuestInfo } from "@/hooks/useGuestInfo";
import axios from "./axios";
import { TPartialAmount } from "@/types/PartialAmount";

export const fetchPartialPrice = async (id: number, daysOfStay: number) => {
  const data = JSON.stringify({
    id,
    daysOfStay
  })
  
  return await axios.get<TPartialAmount | string>(`/calculate_price/partial/${data}`);
};
