import axios from "./axios";

export const fetchPublishKey = async (): Promise<string> => {
  try {
    const response = await axios.get("/stripe_pub");
    return response.data.publishableKey;
  } catch (err) {
    return (err as Error).message;
  }
};
