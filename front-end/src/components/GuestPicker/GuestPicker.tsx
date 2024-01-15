import {
  useFloating,
  autoUpdate,
  FloatingArrow,
  arrow,
  offset,
} from "@floating-ui/react";
import { useState, useRef } from "react";
import { NumericStepper } from "../NumericStepper/NumericStepper";
import { useGuestInfo } from "../../hooks/useGuestInfo";

export const GuestPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const ARROW_HEIGHT = 7;
  const GAP = 10;
  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const { numOfGuests } = useGuestInfo();

  return (
    <div
      ref={refs.setReference}
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center cursor-pointer text-gray-600 bg-white text-xs w-64 h-full pl-4 border-r-2 border-green-400"
      role="picker"
    >
      <p>
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
          className="flex flex-col gap-6 bg-[#fafafa] w-[300px] lg:w-[500px] px-8 py-3 bg-gray-50 rounded-sm"
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            className="fill-gray-500 [&>path:first-of-type]:stroke-gray-500 [&>path:last-of-type]:stroke-gray-500"
          />
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
