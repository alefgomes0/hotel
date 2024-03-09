import axios from "./axios"

export const fetchMaptilerKey = async () => {
  return await axios.get("/api/maptiler")
}