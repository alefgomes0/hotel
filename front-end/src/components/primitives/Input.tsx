import { Control, UseFormRegister, useWatch } from "react-hook-form";
import { TContactInformationSchema } from "@/types/TContactInformationSchema";
import { useRef, useState } from "react";
import { getInputType, getPlaceholderText } from "@/utils/helpers";

type InputProps<T extends keyof TContactInformationSchema> = {
  control: Control<TContactInformationSchema>;
  errorMessage: string | undefined;
  fieldName: T;
  register: UseFormRegister<TContactInformationSchema>;
};

export const Input = ({
  control,
  fieldName,
  register,
  errorMessage,
}: InputProps<keyof TContactInformationSchema>) => {
  const [animateLabel, setAnimateLabel] = useState(false);
  const inputType = getInputType(fieldName);
  const placeholderText = getPlaceholderText(fieldName);
  const isInputDirty = useRef<boolean>(false);

  const fieldValue = useWatch({
    control,
    name: fieldName,
    defaultValue: fieldName === "phone" ? undefined : "",
  });

  const handleOnBlur = () => {
    isInputDirty.current = true;
    if (fieldValue || errorMessage) return;
    setAnimateLabel(false);
  };

  return (
    <div className="relative" onFocus={() => setAnimateLabel(true)}>
      <label
        className={`absolute top-0 left-0 opacity-0 ${
          animateLabel
            ? "animate-label-up"
            : `${isInputDirty.current && "animate-label-down"}`
        } text-sm`}
        htmlFor={fieldName}
        style={{ animationFillMode: "forwards" }}
      >
        {placeholderText}
      </label>
      <input
        {...register(fieldName, { valueAsNumber: fieldName === "phone" })}
        onBlur={handleOnBlur}
        type={inputType}
        placeholder={
          animateLabel
            ? fieldName === "phone"
              ? undefined
              : ""
            : placeholderText
        }
        id={fieldName}
        className={`w-[300px] h-10 pl-2 py-6 bg-gray-100 border-2 focus:border-gray-700 transition-colors duration-200 outline-none ${
          errorMessage ? "border-red-400" : "border-transparent"
        } rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)_inset] placeholder:text-gray-500`}
      />
      <p className="text-red-500 pt-1.5 text-xs ">{errorMessage}</p>
    </div>
  );
};
