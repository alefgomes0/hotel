import { fetchPartialPrice } from "@/api/fetchPartialPrice";
import { useQuery } from "@tanstack/react-query";

export const useFetchPartialPrice = (id: number, suiteNumberOnCart: number) => {
  return useQuery({
    queryKey: ["calculatePartialPrice", suiteNumberOnCart],
    queryFn: () => fetchPartialPrice(id),
  });
};
