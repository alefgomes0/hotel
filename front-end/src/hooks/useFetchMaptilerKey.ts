import { fetchMaptilerKey } from "@/api/fetchMaptilerKey"
import { useQuery } from "@tanstack/react-query"

export const useFetchMaptilerKey = () => {
  return useQuery({
    queryKey: ["maptilerKey"],
    queryFn: fetchMaptilerKey
  })
}