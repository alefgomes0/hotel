import axios from "./axios";
import { getSuitesType } from "@/utils/helpers";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";

export const fetchClientSecret = async (
  numOfGuests: numOfGuestsProps[],
  daysOfStay: number,
  selectedSuites: number[]
) => {
  const suitesType = getSuitesType(numOfGuests, selectedSuites);
  console.log(numOfGuests, daysOfStay, selectedSuites, suitesType);
  const priceData = JSON.stringify({
    suitesType,
    daysOfStay,
  });

  try {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    const response = await axios.get(`/create_intent/${priceData}`);
    console.log(`response: ${response}`);
    const clientSecret = response.data["client_secret"];
    console.log(clientSecret);
    return clientSecret;
  } catch (err) {
    return (err as Error).message;
  }
};
