import axios from "./axios";
import { TPartialAmount } from "@/types/PartialAmount";

export const fetchPartialPrice = async (
  id: number,
  daysOfStay: number
): Promise<TPartialAmount | string> => {
  try {
    const response = await axios.post<TPartialAmount | string>(
      "/calculate_price/partial",
      {
        id,
        daysOfStay,
      }
    );
    return response.data;
  } catch (err) {
    return (err as Error).message;
  }
};
