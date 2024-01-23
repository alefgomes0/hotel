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
      <section className="hide-scrollbar overflow-scroll z-[20] fixed top-[7%] left-[50%] translate-x-[-50%] grid grid-cols-1 w-[600px] max-h-[700px]  text-gray-700 bg-gray-100 rounded-sm ">
        <Carousel
          imagesPath={imagesURL}
          leftController={
            <div className="flex items-center justify-center justify-items-center w-8 h-8 bg-gray-600 rounded-sm">
              <LPCarouselArrow width={24} height={24} />
            </div>
          }
          rightController={
            <div className="flex items-center justify-center justify-items-center w-8 h-8 bg-gray-600 rounded-sm">
              <LPCarouselArrow width={24} height={24} />
            </div>
          }
          sizeOptions={{ height: "h-[400px]", width: "w-[600px]" }}
        />
        <div className="p-4">
          <p className="font-semibold text-xl pb-3">{roomData?.type} Suite</p>
          <p className="text-xs opacity-80 lg:w-[70%] leading-5">{roomData?.full_description}</p>
        </div>

      </section>
    </>
  );
};
