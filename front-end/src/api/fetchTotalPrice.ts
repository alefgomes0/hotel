import axios from "./axios";

export const fetchTotalPrice = async (
  suiteTypes: string[],
  daysOfStay: number
) => {
  const priceData = JSON.stringify({
    suiteTypes,
    daysOfStay,
  });
  return await axios.get(`/calculate_price/total/${priceData}`);
};
