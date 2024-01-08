import { useGuestInfo } from "../../hooks/useGuestInfo";

type NumericStepperProps = {
  field: "apartment" | "adult" | "children";
};

export const NumericStepper = ({ field }: NumericStepperProps) => {
  const { getFieldValue, increaseQuantity, decreaseQuantity } =
    useGuestInfo();

  return (
    <div className="flex gap-1">
      <button
        onClick={(e: React.MouseEvent) => decreaseQuantity(field, e)}
        className="grid font-bold w-min-w px-3 border-[1px] border-neutral-500"
      >
        -
      </button>
      <h6 className="w-6 text-center">{getFieldValue(field)}</h6>

      <button
        onClick={(e: React.MouseEvent) => increaseQuantity(field, e)}
        className="font-bold w-8 border-[1px] border-neutral-500"
      >
        +
      </button>
    </div>
  );
};
