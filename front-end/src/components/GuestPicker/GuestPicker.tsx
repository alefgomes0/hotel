import { useGuestInfo } from "@/hooks/useGuestInfo";
import { NumericStepper } from "../NumericStepper/NumericStepper";
import { TrashIcon } from "../svg/TrashIcon";

type GuestPickerProps = {
  arrayIndex: number;
};

export const GuestPicker = ({ arrayIndex }: GuestPickerProps) => {
  const { deleteRoom, numOfGuests } = useGuestInfo();
  const numberOfSuite = arrayIndex + 1;

  return (
    <div className="relative bg-gray-200 px-3 py-1.5">
      <p className="text-xs opacity-70 pb-3">SUITE {numberOfSuite}</p>
      <div className="flex justify-between">
        <p>{numOfGuests[arrayIndex].adult === 1 ? "Adult" : "Adults"}</p>
        <NumericStepper field="adult" arrayIndex={arrayIndex} />
      </div>
      <div>
        <div className="flex justify-between pt-4">
          <p>{numOfGuests[arrayIndex].children === 1 ? "Child" : "Children"}</p>
          <NumericStepper field="children" arrayIndex={arrayIndex} />
        </div>
      </div>
      <div
        className="absolute top-0 right-0 translate-x-full hover:scale-[1.07] transtion-transform"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          deleteRoom(arrayIndex);
        }}
      >
        {arrayIndex > 0 && <TrashIcon width={20} height={20} />}
      </div>
    </div>
  );
};
