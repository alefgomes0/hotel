import { BookNow } from "../Buttons/BookNow";
import { CheckmarkIcon } from "../svg/CheckmarkIcon";
import { CoffeeIcon } from "../svg/CoffeeIcon";
import { ForbiddenIcon } from "../svg/ForbiddenIcon";
import { RoomProps } from "@/types/RoomProps";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useState } from "react";
import { RoomDetails } from "../RoomDetails/RoomDetails";

type RoomDisplayerProps = {
  roomData: RoomProps | undefined;
};

export const RoomDisplayer = ({ roomData }: RoomDisplayerProps) => {
  const [showRoomDetails, setShowRoomDetails] = useState(false);

  const getPhotoPrefix = () => {
    if (roomData?.type.toLowerCase() === "deluxe") {
      return "dlx-1.jpg";
    } else if (roomData?.type.toLowerCase() === "prime") {
      return "prm-1.jpg";
    } else return "std-1.jpg";
  };

  const { daysOfStay, setSelectedRoom } = useGuestInfo();

  return (
    <>
      {roomData ? (
        <div className="grid grid-rows-1 grid-cols-[auto_1fr] border-[1px] border-gray-300 gap-x-12 rounded-sm p-4 text-gray-700 mb-12 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
          <div>
            <img
              src={`/images/${getPhotoPrefix()}`}
              width={320}
              height={192}
              className="object-cover rounded-sm cursor-pointer"
              onClick={() => setShowRoomDetails(true)}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h6 className="w-max font-semibold text-xl cursor-pointer hover:underline underline-offset-[6px]" onClick={() => setShowRoomDetails(true)}>
              {roomData.type.toUpperCase()} SUITE
            </h6>
            <span className="text-xs bg-gray-300 w-max px-3 py-1 rounded-lg opacity-60">
              {roomData.occupants}{" "}
              {roomData.occupants > 1 ? "adultos" : "adulto"}
            </span>
            <p className="text-sm opacity-90 pt-1">
              {roomData.short_description}
            </p>
            <span className="flex items-center gap-x-2 pt-2">
              <CoffeeIcon width={16} height={16} />
              <p className="text-sm">Café da manhã incluso</p>
            </span>
            <span className="flex items-center gap-x-2">
              <CheckmarkIcon width={16} height={16} />
              <p className="text-sm">Melhor preço garantido</p>
            </span>
            <span className="flex items-center gap-x-2">
              <ForbiddenIcon width={16} height={16} />
              <p className="text-sm">Não reembolsável</p>
            </span>
            <p
              className="text-sm w-max cursor-pointer underline underline-offset-4 pt-1"
              onClick={() => setShowRoomDetails(true)}
            >
              Veja detalhes
            </p>
            <div className="h-[1px] bg-gray-400 mt-4"></div>
            <div className="self-end">
              <p className="text-gray-500 mb-3">
                <span className="text-xl font-semibold text-gray-700">
                  ${roomData.price_per_day}
                </span>{" "}
                per night
              </p>
              <BookNow
                pricePerDay={Number(roomData.price_per_day)}
                selectRoom={() =>
                  setSelectedRoom({
                    daysOfStay,
                    name: roomData.type,
                    pricePerDay: Number(roomData.price_per_day),
                  })
                }
              />
            </div>
          </div>
          {showRoomDetails && (
            <RoomDetails
              closeRoomDetails={() => setShowRoomDetails(false)}
              roomData={roomData}
              showRoomDetails={showRoomDetails}
            />
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
