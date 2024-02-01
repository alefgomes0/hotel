import { BedIcon } from "../svg/BedIcon";
import { Carousel } from "../Carousel/Carousel";
import { CloseIcon } from "../svg/CloseIcon";
import { FoodIcon } from "../svg/FoodIcon";
import { getImagesPath } from "@/utils/getImagesPath";
import { RoomProps } from "@/types/RoomProps";
import { useEffect, useRef } from "react";
import { offset, useFloating } from "@floating-ui/react";
import { SignalIcon } from "../svg/SignalIcon";
import { ServiceIcon } from "../svg/ServiceIcon";
import { SquaredArrow } from "../svg/SquaredArrow";

type SuiteDetailsProps = {
  closeRoomDetails: () => void;
  roomData: RoomProps | undefined;
  showSuiteDetails: boolean;
};

export const SuiteDetails = ({
  closeRoomDetails,
  roomData,
  showSuiteDetails,
}: SuiteDetailsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { refs, floatingStyles } = useFloating({
    strategy: "fixed",
    placement: "right-start",
    middleware: [
      offset(10)
    ]
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showSuiteDetails && wrapperRef.current?.contains(e.target as Node)) {
        closeRoomDetails();
      }
    };
    window.addEventListener("click", handleClickOutside);

    if (showSuiteDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.scrollBehavior = "auto";
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, []);

  const imagesURL = getImagesPath(roomData);

  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 bg-black opacity-40"
        ref={wrapperRef}
      ></div>
      <button
        className="p-.5 z-[25] bg-gray-500 rounded-sm"
        ref={refs.setFloating}
        style={floatingStyles}
        onClick={closeRoomDetails}
        title="close suite details"
        aria-label="close suite details"
      >
        <CloseIcon width={32} height={32} />
      </button>
      <section
        className="overflow-x-hidden z-[22] fixed top-[7%] left-[50%] translate-x-[-50%] grid grid-cols-1 w-[600px] max-h-[650px]  text-gray-700 bg-gray-100 rounded-sm "
        ref={refs.setReference}
      >
        <Carousel
          imagesPath={imagesURL}
          leftController={<SquaredArrow width={24} height={24} />}
          rightController={<SquaredArrow width={24} height={24} />}
        />
        <div className="p-4">
          <p className="font-semibold text-xl pb-3">{roomData?.type} Suite</p>
          <p className="text-xs opacity-80 leading-5">
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
