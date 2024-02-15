import axios from "./axios";

export const fetchClientSecret = async (stayData: string) => {
  try {
    const response = await axios.get(`/create_intent/${stayData}`);
    console.log(`response: ${response.data}`);
    const clientSecret = response.data.client_secret;
    console.log(clientSecret);
    return clientSecret;
  } catch (err) {
    return (err as Error).message;
  }
};
