import { useState } from "react";

type NumericStepper = {
  field: "Apartment" | "Adult" | "Children";
};

export const NumericStepper = ({ field }: NumericStepper) => {
  const [inputValue, setInputValue] = useState(1);
  const decreaseInputValue = (e: React.MouseEvent) => {
    if (inputValue <= 1) return;
    e.stopPropagation();
    e.preventDefault();
    setInputValue((prev) => prev - 1);
  };
  const increaseInputValue = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setInputValue((prev) => prev + 1);
  };

  return (
    <div className="flex gap-1">
      <button
        onClick={decreaseInputValue}
        className="grid font-bold w-min-w px-3 border-[1px] border-neutral-500"
      >
        -
      </button>
      <input
        type="text"
        value={inputValue}
        name={`numOf${field}`}
        className="w-6 text-center"
      />
      <button
        onClick={increaseInputValue}
        className="font-bold w-8 border-[1px] border-neutral-500"
      >
        +
      </button>
    </div>
  );
};
