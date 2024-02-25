import axios from "./axios";

export const fetchPartialPrice = async (id: number, daysOfStay: number) => {
  const stayData = JSON.stringify({
    id,
    daysOfStay
  })
  
  return await axios.get(`/calculate_price/partial/${stayData}`);
};
