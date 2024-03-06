import { AddAnotherSuite } from "../Buttons/AddAnotherSuite";
import { GuestPickerCard } from "../GuestPickerCard/GuestPickerCard";
import { useGuestInfo } from "@/hooks/useGuestInfo";
import { WarningIcon } from "../svg/WarningIcon";

type GuestPickerModalProps = {
  modalRef: (node: HTMLElement | null) => void;
  modalStyle: React.CSSProperties;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement> | undefined
  ) => Record<string, unknown>;
};

export const GuestPickerModal = ({
  modalRef,
  modalStyle,
  getFloatingProps,
}: GuestPickerModalProps) => {
  const { addNewRoom, numOfGuests } = useGuestInfo();

  return (
    <div
      ref={modalRef}
      style={modalStyle}
      {...getFloatingProps()}
      className="flex flex-col gap-6 bg-[#fafafa] w-[300px] lg:w-[500px] min-h-[200px] z-[19] px-2 lg:px-8 py-3 bg-gray-100 rounded-sm font-semibold text-gray-700"
    >
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
