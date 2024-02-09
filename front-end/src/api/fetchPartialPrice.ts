import axios from "./axios";
import { TPartialAmount } from "@/types/PartialAmount";

export const fetchPartialPrice = async (id: number, daysOfStay: number) => {
  return await axios.post<TPartialAmount | string>("/calculate_price/partial", {
    id,
    daysOfStay,
  });
};
