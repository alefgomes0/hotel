import { RoomProps } from "@/types/RoomProps";

export const getPhotoPrefix = (room: RoomProps | "") => {
  if (!room) return;

  if (room.type.toLowerCase() === "deluxe") {
    return "dlx-1.jpg";
  } else if (room.type.toLowerCase() === "prime") {
    return "prm-1.jpg";
  } else return "std-1.jpg";
};
