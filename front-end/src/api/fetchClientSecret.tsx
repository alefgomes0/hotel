import axios from "./axios";

export const fetchClientSecret = async (stayData: string) => {
  return await axios.get(`/create_intent/${stayData}`);
};
