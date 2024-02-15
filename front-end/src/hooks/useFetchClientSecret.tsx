import { fetchClientSecret } from "@/api/fetchClientSecret";
import { getSuitesType } from "@/utils/helpers";
import { useGuestInfo } from "./useGuestInfo";
import { useQuery } from "@tanstack/react-query";

export const useFetchClientSecret = () => {
  const { numOfGuests, daysOfStay, selectedSuiteIndex } = useGuestInfo();
  const suitesType = getSuitesType(numOfGuests, selectedSuiteIndex.selected);
  const stayData = JSON.stringify({
    suitesType,
    daysOfStay,
  });

  return useQuery({
    queryKey: ["clientSecret"],
    queryFn: () => fetchClientSecret(stayData),
  });
};
