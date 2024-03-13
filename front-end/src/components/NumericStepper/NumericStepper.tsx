import { useGuestInfo } from "../../hooks/useGuestInfo";

type NumericStepperProps = {
  field: "adult" | "children";
  arrayIndex: number;
};

export const NumericStepper = ({ field, arrayIndex }: NumericStepperProps) => {
  const { getFieldValue, increaseQuantity, decreaseQuantity } = useGuestInfo();

  return (
    <div className="flex items-center content-center gap-1">
      <button
        onClick={(e: React.MouseEvent) =>
          decreaseQuantity(field, arrayIndex, e)
        }
        className="flex justify-center text-center w-[24px] h-[24px] font-semibold border-[1px] rounded-full border-neutral-500 hover:scale-[1.08] transition-transform"
        title="decrease"
        aria-label="decrease"
      >
        -
      </button>
      <h6 className="w-6 text-center text-lg text-semibold text-gray-700 opacity-80">
        {getFieldValue(field, arrayIndex)}
      </h6>
      <button
        onClick={(e: React.MouseEvent) =>
          increaseQuantity(field, arrayIndex, e)
        }
        className="flex justify-center text-center w-[24px] h-[24px] font-bold border-[1px] rounded-full border-neutral-500 hover:scale-[1.08] transition-transform"
        title="increase"
        aria-label="increase"
      >
        +
      </button>
    </div>
  );
};
