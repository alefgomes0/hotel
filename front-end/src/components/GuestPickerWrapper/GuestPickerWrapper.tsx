import { AddAnotherSuite } from "../Buttons/AddAnotherSuite";
import {
  autoUpdate,
  useDismiss,
  useFloating,
  useInteractions,
  offset,
} from "@floating-ui/react";
import { GuestPicker } from "../GuestPicker/GuestPicker";
import { useGuestInfo } from "../../hooks/useGuestInfo";
import { useState } from "react";
import { numOfGuestsProps } from "@/types/numOfGuestsProps";
import { WarningIcon } from "../svg/WarningIcon";

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
  const { addNewRoom, numOfGuests } = useGuestInfo();
  const numOfSuites = numOfGuests.length;

  const teste = (list: numOfGuestsProps[]) => {
    let totalGuests = {
      adult: 0,
      children: 0,
    };
    for (let i = 0; i < list.length; i++) {
      totalGuests = {
        adult: totalGuests.adult + list[i].adult,
        children: totalGuests.children + list[i].children,
      };
    }

    return totalGuests;
  };

  const totalGuests = teste(numOfGuests);

  return (
    <div
      ref={refs.setReference}
      {...getReferenceProps()}
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center cursor-pointer text-gray-600 bg-white text-sm w-64 h-full text-gray-600 pl-4 border-r-2 border-gray-200"
      aria-label="pick number of guests"
    >
      <p className="opacity-[65%]">
        {numOfSuites} {numOfSuites === 1 ? "Suite" : "Suites"},{" "}
        {totalGuests.adult} {totalGuests.adult === 1 ? "Adult" : "Adults"},{" "}
        {totalGuests.children}{" "}
        {totalGuests.children === 1 ? "Child" : "Children"}
      </p>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="flex flex-col gap-6 bg-[#fafafa] w-[300px] lg:w-[500px] min-h-[200px] px-8 py-3 bg-gray-100 rounded-sm font-semibold text-gray-700"
        >
          {numOfGuests.map((_, index) => (
            <GuestPicker arrayIndex={index} key={index} />
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
      )}
    </div>
  );
};
