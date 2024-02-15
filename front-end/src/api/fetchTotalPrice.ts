import axios from "./axios";

export const fetchTotalPrice = async (stayData: string) => {
  return await axios.get(`/calculate_price/total/${stayData}`);
};
