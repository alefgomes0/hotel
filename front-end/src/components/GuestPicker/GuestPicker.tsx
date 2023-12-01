import {
  useFloating,
  autoUpdate,
  FloatingArrow,
  arrow,
  offset,
} from "@floating-ui/react";
import { useState, useRef } from "react";
import { NumericStepper } from "../NumericStepper/NumericStepper";

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

  return (
    <button
      ref={refs.setReference}
      onClick={() => setIsOpen(!isOpen)}
      type="button"
    >
      1 adulto, 0 crianças, 1 apartamento
      {isOpen && (
        <div ref={refs.setFloating} style={floatingStyles}>
          <FloatingArrow ref={arrowRef} context={context}/>
          <NumericStepper field="adult"/>
        </div>
      )}
    </button>
  );
};
