import { BookNow } from "../Buttons/BookNow";
import { CheckmarkIcon } from "../svg/CheckmarkIcon";
import { CoffeeIcon } from "../svg/CoffeeIcon";
import { ForbiddenIcon } from "../svg/ForbiddenIcon";
import { RoomProps } from "@/types/RoomProps";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { useState } from "react";
import { RoomDetails } from "../RoomDetails/RoomDetails";

type RoomDisplayerProps = {
  roomData: object | "";
  arrayIndex: number;
};

export const RoomDisplayer = ({ roomData, arrayIndex }: RoomDisplayerProps) => {
  const [showRoomDetails, setShowRoomDetails] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number | null>(
    null
  );

  const getPhotoPrefix = (room: RoomProps | "") => {
    if (!room) return;

    if (room.type.toLowerCase() === "deluxe") {
      return "dlx-1.jpg";
    } else if (room.type.toLowerCase() === "prime") {
      return "prm-1.jpg";
    } else return "std-1.jpg";
  };

  const { daysOfStay, numOfGuests, handleSuiteSelection } = useGuestInfo();

  const extractedSuites: RoomProps[] = [];
  Object.keys(roomData).forEach((suiteType) => {
    if (roomData === "") return;
    const suiteArray: RoomProps[] = (roomData as Record<string, any>)[
      suiteType
    ];
    if (Array.isArray(suiteArray) && suiteArray.length > 0) {
      extractedSuites.push(suiteArray[0] as RoomProps);
    }
  });

  const handleRoomDetails = (arrayIndex: number) => {
    setSelectedRoomIndex(arrayIndex);
    setShowRoomDetails(true);
  };

  return (
    <>
      {roomData ? (
        extractedSuites.map((room: RoomProps, index) => {
          return (
            <div
              className="grid grid-rows-1 grid-cols-[auto_1fr] border-[1px] border-gray-300 gap-x-12 rounded-sm p-4 text-gray-700 mb-12 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]"
              key={index}
            >
              <div>
                <img
                  src={`/images/${getPhotoPrefix(room)}`}
                  width={320}
                  height={192}
                  className="object-cover rounded-sm cursor-pointer"
                  onClick={() => handleRoomDetails(index)}
                />
              </div>
              <div className="flex flex-col gap-y-3">
                <h6
                  className="w-max font-semibold text-xl cursor-pointer hover:underline underline-offset-[6px]"
                  onClick={() => handleRoomDetails(index)}
                >
                  {room.type.toUpperCase()} SUITE
                </h6>
                <span className="text-xs bg-gray-300 w-max px-3 py-1 rounded-sm opacity-60">
                  {room.occupants} {room.occupants > 1 ? "adultos" : "adulto"}
                </span>
                <p className="text-sm opacity-90 pt-1">
                  {room.short_description}
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
                  onClick={() => handleRoomDetails(index)}
                >
                  Veja detalhes
                </p>
                <div className="h-[1px] bg-gray-400 mt-4"></div>
                <div className="self-end">
                  <p className="text-gray-500 mb-3">
                    <span className="text-xl font-semibold text-gray-700">
                      ${room.price_per_day}
                    </span>{" "}
                    per night
                  </p>
                  <BookNow
                    pricePerDay={Number(room.price_per_day)}
                    selectRoom={() => handleSuiteSelection(arrayIndex, room)}
                  />
                </div>
              </div>
              {showRoomDetails && (
                <RoomDetails
                  closeRoomDetails={() => setShowRoomDetails(false)}
                  roomData={extractedSuites[selectedRoomIndex as number]}
                  showRoomDetails={true}
                />
              )}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};
