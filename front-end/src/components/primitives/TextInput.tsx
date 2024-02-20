import {
  UseFormRegister,
  UseFormRegisterReturn,
  FieldValues,
} from "react-hook-form";
import { TContactInformationSchema } from "@/types/TContactInformationSchema";

type TextInputProps<T extends keyof TContactInformationSchema> = {
  fieldName: T;
  register: UseFormRegister<TContactInformationSchema>;
  errors: {
    [K in T]: { message: string };
  };
};

export const TextInput = ({ fieldName, register, errors }: TextInputProps<keyof TContactInformationSchema>) => {
  return (
    <div className="relative">
      <label
        className="absolute top-0 left-0 opacity-0 focus:opacity-1"
        htmlFor="firstName"
      >
        First Name
      </label>
      <input
      {...register(fieldName)}
        type="text"
        placeholder="First Name"
        id="firstName"
        className={`w-[300px] h-10 pl-2 py-6 bg-gray-100 border-2 focus:border-gray-700 transition-colors duration-200 outline-none ${
          errors.firstName ? " border-red-400" : "border-transparent"
        } rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)_inset]`}
      />
      <p className="text-red-500 pt-1.5 text-xs ">
        {errors.firstName?.message}
      </p>
    </div>
  );
};
