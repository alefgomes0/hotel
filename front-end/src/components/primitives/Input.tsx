import {
  UseFormRegister,
} from "react-hook-form";
import { TContactInformationSchema } from "@/types/TContactInformationSchema";
import { useState } from "react";
import { getInputType } from "@/utils/helpers";

type InputProps<T extends keyof TContactInformationSchema> = {
  fieldName: T;
  register: UseFormRegister<TContactInformationSchema>
  errorMessage: string | undefined;
};

export const Input = ({ fieldName, register, errorMessage }: InputProps<keyof TContactInformationSchema>) => {
  const [animateLabel, setAnimateLabel] = useState(false);
  const inputType = getInputType(fieldName);

  return (
    <div className="relative" onFocus={() => setAnimateLabel(true)} onBlur={() => setAnimateLabel(false)}>
      <label
        className={`absolute top-0 left-0 ${animateLabel ? "animate-label-up" : "animate-label-down"}`}
        htmlFor={fieldName}
        style={{ animationFillMode: "forwards" }}
      >
        First Name
      </label>
      <input
      {...register(fieldName)}
        type={inputType}
        placeholder="First Name"
        id={fieldName}
        className={`w-[300px] h-10 pl-2 py-6 bg-gray-100 border-2 focus:border-gray-700 transition-colors duration-200 outline-none ${
          errorMessage ? "border-red-400" : "border-transparent"
        } rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)_inset]`}
      />
      <p className="text-red-500 pt-1.5 text-xs ">
        {errorMessage}
      </p>
    </div>
  );
};
