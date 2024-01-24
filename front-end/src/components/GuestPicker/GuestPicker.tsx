import { useGuestInfo } from "@/hooks/useGuestInfo";
import { NumericStepper } from "../NumericStepper/NumericStepper";

type GuestPickerProps = {
  arrayIndex: number;
};

export const GuestPicker = ({ arrayIndex }: GuestPickerProps) => {
  const { numOfGuests } = useGuestInfo();

  return (
    <div className="bg-gray-200 mt-4 px-3 py-1.5">
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
    </div>
  );
};
