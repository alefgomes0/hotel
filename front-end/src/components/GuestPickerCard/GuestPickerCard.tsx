import { NumericStepper } from "../NumericStepper/NumericStepper";
import { TrashIcon } from "../svg/TrashIcon";
import { useGuestInfo } from "@/hooks/useGuestInfo";

type GuestPickerCardProps = {
  arrayIndex: number;
};

export const GuestPickerCard = ({ arrayIndex }: GuestPickerProps) => {
  const { deleteRoom, numOfGuests } = useGuestInfo();
  const numberOfSuite = arrayIndex + 1;

  return (
    <div
      className="relative bg-gray-200 px-3 py-1.5"
      aria-label="guest info for this suite"
    >
      <p className="text-xs opacity-70 pb-3">SUITE {numberOfSuite}</p>
      <div className="flex justify-between">
        <label aria-label="number of adults">
          {numOfGuests[arrayIndex].adult === 1 ? "Adult" : "Adults"}
        </label>
        <NumericStepper field="adult" arrayIndex={arrayIndex} />
      </div>
      <div>
        <div className="flex justify-between pt-4">
          <label className="number of children">
            {numOfGuests[arrayIndex].children === 1 ? "Child" : "Children"}
          </label>
          <NumericStepper field="children" arrayIndex={arrayIndex} />
        </div>
      </div>
      <button
        title="delete suite"
        aria-label="delete suite"
        className="absolute top-0 right-0 translate-x-full hover:scale-[1.07] transtion-transform"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          deleteRoom(arrayIndex);
        }}
      >
        {arrayIndex > 0 && <TrashIcon width={20} height={20} />}
      </button>
    </div>
  );
};
