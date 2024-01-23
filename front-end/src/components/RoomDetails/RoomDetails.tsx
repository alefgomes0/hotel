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
    if (roomData.type === "deluxe") {
      return ["dlx-1.jpg", "dlx-2.jpg", "dlx-3.jpg", "dlx-4.jpg"];
    } else if (roomData.type === "prime") {
      return ["prm-1.jpg", "prm-2.jpg", "prm-3.jpg", "prm-4.jpg"];
    } else return ["std-1.jpg", "std-2.jpg", "std-3.jpg", "std-4.jpg"];
  };

  const imagesURL = getImagesPath();

  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 bg-[#000000CC]"
        ref={wrapperRef}
      ></div>
      <section className="z-[20] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-max bg-gray-100 rounded-sm">
        <div className="lg:w-[600px] lg:h-[400px]">
          <Carousel
            imagesPath={imagesURL}
            leftController={<LPCarouselArrow width={24} height={24} />}
            rightController={<LPCarouselArrow width={24} height={24} />}
          />
        </div>
      </section>
    </>
  );
};
