import { useGuestInfo } from "@/hooks/useGuestInfo";
import axios from "./axios";
import { TPartialAmount } from "@/types/PartialAmount";

export const fetchPartialPrice = async (id: number) => {
  const { daysOfStay } = useGuestInfo()

  return await axios.post<TPartialAmount | string>("/calculate_price/partial", {
    id,
    daysOfStay,
  });
};
