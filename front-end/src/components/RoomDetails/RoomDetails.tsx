import { Carousel } from "../Carousel/Carousel";
import { LPCarouselArrow } from "../svg/LPCarouselArrow";
import { RoomProps } from "@/types/RoomProps";
import { useEffect, useRef } from "react";

type RoomDetailsProps = {
  closeRoomDetails: () => void;
  roomData: RoomProps | undefined;
  showRoomDetails: boolean;
};

export const RoomDetails = ({
  closeRoomDetails,
  roomData,
  showRoomDetails,
}: RoomDetailsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showRoomDetails && wrapperRef.current?.contains(e.target as Node)) {
        closeRoomDetails();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const getImagesPath = () => {
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

  const imagesURL = getImagesPath();

  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 bg-black opacity-40"
        ref={wrapperRef}
      ></div>
      <section className="z-[20] fixed top-[20%] left-[50%] translate-x-[-50%]  grid grid-cols-1 w-max bg-gray-100 rounded-sm bg-gray-100">
        <Carousel
          imagesPath={imagesURL}
          leftController={<LPCarouselArrow width={24} height={24} />}
          rightController={<LPCarouselArrow width={24} height={24} />}
          sizeOptions={{ height: "h-[300px]", width: "w-[450px]" }}
        />
      </section>
    </>
  );
};
