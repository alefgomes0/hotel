import { AddAnotherSuite } from "../Buttons/AddAnotherSuite";
import { GuestPickerCard } from "../GuestPickerCard/GuestPickerCard";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { WarningIcon } from "../svg/WarningIcon";

export const GuestPickerModal = () => {
  const { addNewRoom, numOfGuests } = useGuestInfo();

  return (
    <div className="flex flex-col gap-6 bg-[#fafafa] w-[300px] lg:w-[500px] min-h-[200px] px-8 py-3 bg-gray-100 rounded-sm font-semibold text-gray-700">
      {numOfGuests.map((_, index) => (
        <GuestPickerCard arrayIndex={index} key={index} />
      ))}
      <p className="text-xs opacity-70 mt-[-15px]">
        Individuals up to 12 years old are considered children.
      </p>
      {numOfGuests.length < 3 ? (
        <AddAnotherSuite addNewRoom={addNewRoom} />
      ) : (
        <div className="flex items-center gap-x-1">
          <WarningIcon width={18} height={18} />
          <p className="text-xs opacity-[75%]">
            You can't add more than 3 suites.
          </p>
        </div>
      )}
    </div>
  );
};
