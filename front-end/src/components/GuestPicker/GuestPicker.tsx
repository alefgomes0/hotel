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
  const GAP = 2;
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

  const { searchInfo } = useGuestInfo();

  return (
    <div
      ref={refs.setReference}
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer"
      role="picker"
    >
      {searchInfo.numOfApartment}{" "}
      {searchInfo.numOfApartment === 1 ? "apartamento" : "apartamentos"},{" "}
      {searchInfo.numOfAdult}{" "}
      {searchInfo.numOfAdult === 1 ? "adulto" : "adultos"},{" "}
      {searchInfo.numOfChildren}{" "}
      {searchInfo.numOfChildren === 1 ? "criança" : "crianças"}
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="flex flex-col gap-6 bg-[#fafafa] w-[275px] px-8 py-3"
        >
          <FloatingArrow ref={arrowRef} context={context} />
          <div className="flex justify-between">
            <p>Quarto(s)</p>
            <NumericStepper field="apartment" />
          </div>{" "}
          <div className="flex justify-between">
            <p>Adulto(s)</p>
            <NumericStepper field="adult" />
          </div>
          <div className="flex justify-between">
            <p>Criança(s)</p>
            <NumericStepper field="children" />
          </div>
        </div>
      )}
    </div>
  );
};
