import { Carousel } from "../Carousel/Carousel";
import { BedIcon } from "../svg/BedIcon";
import { CloseIcon } from "../svg/CloseIcon";
import { LPCarouselArrow } from "../svg/LPCarouselArrow";
import { RoomProps } from "@/types/RoomProps";
import { useEffect, useRef } from "react";
import { FoodIcon } from "../svg/FoodIcon";
import { SignalIcon } from "../svg/SignalIcon";
import { ServiceIcon } from "../svg/ServiceIcon";

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
      <section className="hide-scrollbar overflow-scroll z-[22] fixed top-[7%] left-[50%] translate-x-[-50%] grid grid-cols-1 w-[600px] max-h-[650px]  text-gray-700 bg-gray-100 rounded-sm ">
        <div className="z-[50] relative w-full max-h-full bg-red-400">
          <div className="z-[50] absolute top-[0%] right-[0%] bg-red-400 translate-x-[220%]">
            <CloseIcon width={32} height={32} />
          </div>
        </div>
        <Carousel
          imagesPath={imagesURL}
          leftController={
            <div className="flex items-center justify-center justify-items-center w-8 h-8 bg-gray-500 rounded-sm">
              <LPCarouselArrow width={24} height={24} />
            </div>
          }
          rightController={
            <div className="flex items-center justify-center justify-items-center w-8 h-8 bg-gray-500 rounded-sm">
              <LPCarouselArrow width={24} height={24} />
            </div>
          }
          sizeOptions={{ height: "h-[400px]", width: "w-[600px]" }}
        />
        <div className="p-4">
          <p className="font-semibold text-xl pb-3">{roomData?.type} Suite</p>
          <p className="text-xs opacity-80 lg:w-[70%] leading-5">
            {roomData?.full_description}
          </p>
        </div>
        <div className="grid grid-cols-2 p-4 text-xs gap-y-4">
          <div className="flex flex-col">
            <span className="flex items-center gap-1 pb-3">
              <BedIcon width={22} height={22} />
              <p className="font-medium text-lg opacity-90">Scelerisque</p>
            </span>
            <ul className="list-disc list-inside opacity-70">
              <li className="pb-1">Et netus et malesuada fames</li>
              <li className="pb-1">Quis risus sed</li>
            </ul>
          </div>
          <div className="col-start-2 col-end-3 flex flex-col">
            <span className="flex items-center gap-1 pb-3">
              <FoodIcon width={22} height={22} />
              <p className="font-medium text-lg opacity-90">Amet nisl</p>
            </span>
            <ul className="list-disc list-inside opacity-70">
              <li className="pb-1">Habitant morbi tristique</li>
              <li className="pb-1">Dictum non consectetur a erat</li>
              <li className="pb-1">In egestas erat imperdiet</li>
              <li className="pb-1">Augue neque gravida in fermentum</li>
              <li className="pb-1">Volutpat est velit egestas dui id </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-1 pb-3">
              <SignalIcon width={22} height={22} />
              <p className="font-medium text-lg opacity-90">
                Aenean sed adipiscing
              </p>
            </span>
            <ul className="list-disc list-inside opacity-70">
              <li className="pb-1">Sapien eget mi proin</li>
              <li className="pb-1">Nisi est sit amet facilisis magna</li>
              <li className="pb-1">Faucibus a pellentesque</li>
              <li className="pb-1">Nulla aliquet enim tortor at auctor urna</li>
              <li className="pb-1">Mi bibendum neque </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-1 pb-3">
              <ServiceIcon width={22} height={22} />
              <p className="font-medium text-lg opacity-90">Sagittis id</p>
            </span>
            <ul className="list-disc list-inside opacity-70">
              <li className="pb-1">Dui id ornare arcu</li>
              <li className="pb-1">Elementum sagittis vitae et leo</li>
              <li className="pb-1">Felis imperdiet proin</li>
              <li className="pb-1">Mi proin sed libero enim</li>
              <li className="pb-1">
                Arcu cursus euismod quis viverra nibh cras{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
