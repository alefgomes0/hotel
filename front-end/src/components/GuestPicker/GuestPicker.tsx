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
        {" "}
        {numOfGuests.apartment}{" "}
        {numOfGuests.apartment === 1 ? "apartamento" : "apartamentos"},{" "}
        {numOfGuests.adult} {numOfGuests.adult === 1 ? "adulto" : "adultos"},{" "}
        {numOfGuests.children}{" "}
        {numOfGuests.children === 1 ? "criança" : "crianças"}
      </p>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="flex flex-col gap-6 bg-[#fafafa] w-[300px] lg:w-[500px] px-8 py-3 bg-gray-50 rounded-sm"
        >
          <div className="flex justify-between">
            <p>Quarto(s)</p>
            <NumericStepper field="apartment" />
          </div>{" "}
          <div className="flex justify-between">
            <p>Adulto(s)</p>
            <NumericStepper field="adult" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Criança(s)</p>
              <NumericStepper field="children" />
            </div>
            <p className="text-xs pt-[5px] opacity-60">
              São consideradas crianças individuos com até 12 anos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
