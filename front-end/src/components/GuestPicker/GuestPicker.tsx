import {
  autoUpdate,
  useDismiss,
  useFloating,
  useInteractions,
  offset,
} from "@floating-ui/react";
import { NumericStepper } from "../NumericStepper/NumericStepper";
import { useGuestInfo } from "../../hooks/useGuestInfo";
import { useState } from "react";
import { PlusSign } from "../svg/PlusSign";
import { AddAnotherSuite } from "../Buttons/AddAnotherSuite";

export const GuestPicker = () => {
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

  return (
    <div
      ref={refs.setReference}
      {...getReferenceProps()}
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center cursor-pointer text-gray-600 bg-white text-sm w-64 h-full text-gray-600 pl-4 border-r-2 border-gray-200"
      aria-label="pick number of guests"
    >
      <p className="opacity-[65%]">
        {numOfGuests.adult} {numOfGuests.adult === 1 ? "adult" : "adults"},{" "}
        {numOfGuests.children} {numOfGuests.children === 1 ? "child" : "children"}
      </p>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="flex flex-col gap-6 bg-[#fafafa] w-[300px] lg:w-[500px] min-h-[200px] px-8 py-3 bg-gray-100 rounded-sm font-semibold text-gray-700"
        >
          <div className="bg-gray-200 mt-4 px-3 py-1.5">
            <div className="flex justify-between">
              <p>{numOfGuests.adult === 1 ? "Adult" : "Adults"}</p>
              <NumericStepper field="adult" />
            </div>
            <div>
              <div className="flex justify-between pt-4">
                <p>{numOfGuests.children === 1 ? "Child" : "Children"}</p>
                <NumericStepper field="children" />
              </div>
            </div>
          </div>
          <p className="text-xs opacity-70 mt-[-15px]">
            Individuals up to 12 years old are considered children.
          </p>
          <AddAnotherSuite />
        </div>
      )}
    </div>
  );
};
