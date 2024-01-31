import { RoomProps } from "@/types/RoomProps";

export const getImagesPath = (roomData: RoomProps | undefined) => {
  if (!roomData) return [];
  if (roomData.type.toLowerCase() === "deluxe") {
    return [
      "/images/dlx-1.jpg",
      "/images/dlx-2.jpg",
      "/images/dlx-3.jpg",
      "/images/dlx-4.jpg",
    ];
  } else if (roomData.type.toLowerCase() === "prime") {
    return [
      "/images/prm-1.jpg",
      "/images/prm-2.jpg",
      "/images/prm-3.jpg",
      "/images/prm-4.jpg",
    ];
  } else
    return [
      "/images/std-1.jpg",
      "/images/std-2.jpg",
      "/images/std-3.jpg",
      "/images/std-4.jpg",
    ];
};
