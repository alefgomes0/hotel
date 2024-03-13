import { BookNow } from "../Buttons/BookNow";
import { CheckmarkIcon } from "../svg/CheckmarkIcon";
import { CoffeeIcon } from "../svg/CoffeeIcon";
import { ForbiddenIcon } from "../svg/ForbiddenIcon";
import { getPhotoPrefix } from "@/utils/getPhotoPrefix";
import { useState } from "react";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { RoomProps } from "@/types/RoomProps";
import { SuiteDetails } from "../SuiteDetails/SuiteDetails";
import { findNextSuite } from "@/utils/helpers";

type SuiteCardProps = {
  room: RoomProps;
  index: number;
};

export const SuiteCard = ({ room, index }: SuiteCardProps) => {
  const [showSuiteDetails, setShowSuiteDetails] = useState(false);
  const {
    handleSuiteSelection,
    numOfGuests,
    selectedSuiteIndex,
    setSelectedSuiteIndex,
  } = useGuestInfo();

  const handleButtonClick = () => {
    const selectedSuites = selectedSuiteIndex.selected.concat(
      selectedSuiteIndex.current
    );
    handleSuiteSelection(index, room);
    setSelectedSuiteIndex({
      current: findNextSuite(numOfGuests.length, selectedSuites),
      selected: selectedSuites,
    });
  };

  console.log(selectedSuiteIndex)

  return (
    <div
      className="grid grid-rows-[auto_1fr] lg:grid-rows-1 grid-cols-1 lg:grid-cols-[auto_1fr] border-[1px] border-gray-300 gap-x-12 rounded-sm p-4 text-gray-700 mb-12 z-[500]"
      key={index}
    >
      <div>
        <img
          src={`/images/${getPhotoPrefix(room)}`}
          className="lg:w-[320px] lg:h-[192px] aspect-[3/2]  object-cover rounded-sm cursor-pointer"
          onClick={() => setShowSuiteDetails(true)}
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <h6
          className="w-max text-xl cursor-pointer hover:underline underline-offset-[6px]"
          onClick={() => setShowSuiteDetails(true)}
        >
          {room.type.toUpperCase()} SUITE
        </h6>
        <div className="flex items-center gap-x-5">
          <span className="text-xs bg-gray-300 w-max px-3 py-1 rounded-sm opacity-80">
            {room.occupants} {room.occupants > 1 ? "adults" : "adult"}
          </span>
          <span className="text-xs bg-gray-300 w-max px-3 py-1 rounded-sm opacity-80">
            {room.size}m²
          </span>
        </div>
        <p className="text-sm pt-1">{room.short_description}</p>
        <span className="flex items-center gap-x-2 pt-2">
          <CoffeeIcon width={16} height={16} />
          <p className="text-sm">Breakfast included</p>
        </span>
        <span className="flex items-center gap-x-2">
          <CheckmarkIcon width={16} height={16} />
          <p className="text-sm">Best price guaranteed</p>
        </span>
        <span className="flex items-center gap-x-2">
          <ForbiddenIcon width={16} height={16} />
          <p className="text-sm">Non refundable</p>
        </span>
        <p
          className="text-sm w-max cursor-pointer underline underline-offset-4 pt-1"
          onClick={() => setShowSuiteDetails(true)}
        >
          Veja detalhes
        </p>
        <div className="h-[1px] bg-gray-400 mt-4"></div>
        <div className="lg:self-end">
          <p className="text-gray-500 mb-3">
            <span className="text-xl text-gray-700">
              ${room.price_per_day}
            </span>{" "}
            per night
          </p>
          <BookNow
            pricePerDay={Number(room.price_per_day)}
            selectRoom={handleButtonClick}
          />
        </div>
      </div>
      {showSuiteDetails && (
        <SuiteDetails
          closeRoomDetails={() => setShowSuiteDetails(false)}
          roomData={room}
          showSuiteDetails={showSuiteDetails}
        />
      )}
    </div>
  );
};
