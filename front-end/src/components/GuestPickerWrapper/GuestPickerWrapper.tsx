import {
  autoUpdate,
  useDismiss,
  useFloating,
  useInteractions,
  offset,
} from "@floating-ui/react";
import { stringifyGuestInfo } from "../../utils/helpers.ts";
import { GuestPickerModal } from "../GuestPickerModal/GuestPickerModal.tsx";
import { useGuestInfo } from "../../hooks/useGuestInfo";
import { useState } from "react";

export const GuestPickerWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const GAP = 15;
  const { refs, floatingStyles, context } = useFloating({
    placement: "top",
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(GAP)],
  });
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);
  const { numOfGuests } = useGuestInfo();
  const stringifiedGuestInfo = stringifyGuestInfo(numOfGuests)

  return (
    <div
      ref={refs.setReference}
      {...getReferenceProps()}
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center cursor-pointer text-gray-600 bg-white text-sm w-full lg:w-[250px] h-full text-gray-600 pl-4 border-r-2 border-gray-200"
      aria-label="pick number of guests"
      title="pick number of guests"
    >
      <p className="opacity-[65%]">
        {stringifiedGuestInfo}
      </p>
      {isOpen && (
        <GuestPickerModal
          modalRef={refs.setFloating}
          modalStyle={floatingStyles}
          getFloatingProps={getFloatingProps}
        />
      )}
    </div>
  );
};
