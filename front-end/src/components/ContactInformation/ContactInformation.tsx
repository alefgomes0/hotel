import { ProceedToPayment } from "../Buttons/ProceedToPayment";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactInformationSchema = z.object({
  firstName: z.string().min(2, "First name must contain at least 2 characters"),
  lastName: z.string().min(2, "Last name must contain at least 2 characters"),
  email: z.string().email(),
  address: z.string().min(10, "Address must contain at least 10 characters"),
  phone: z.number().min(10, "Phone must contain at least 10 characters"),
});

type TContactInformationSchema = z.infer<typeof ContactInformationSchema>;

export const ContactInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    getFieldState,
  } = useForm<TContactInformationSchema>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: undefined,
    },
    resolver: zodResolver(ContactInformationSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmit = (data: TContactInformationSchema) => {
    console.log(data);
    navigate("/checkout/payment");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 grid-rows-[1fr_auto] gap-y-1"
    >
      <div className="flex flex-col">
        <label className="pb-1.5" htmlFor="firstName">
          First Name
        </label>
        <input
          {...register("firstName")}
          type="text"
          placeholder="John"
          id="firstName"
          className={`w-[300px] h-10 pl-2 py-6 bg-gray-100 border-2 focus:border-gray-700 transition-colors duration-200 outline-none ${
            errors.firstName ? " border-red-400" : "border-transparent"
          } rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)_inset]`}
        />
        <p className="text-red-500 pt-1.5 text-xs ">
          {errors.firstName?.message}
        </p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName" className="pb-1.5">
          Last Name
        </label>
        <input
          {...register("lastName")}
          type="text"
          placeholder="Doe"
          id="lastName"
          className={`w-[300px] h-10 pl-2 py-6 bg-gray-100 border-2 focus:border-gray-700 transition-colors duration-200 outline-none ${
            errors.lastName ? "border-red-400" : "border-transparent"
          } rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)_inset]`}
        />
        <p className="text-red-500 pt-1.5 text-xs pb-3">
          {errors.lastName?.message}
        </p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="pb-1.5">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="johndoe@email.com"
          id="email"
          className={`w-[300px] h-10 pl-2 py-6 bg-gray-100 border-2 focus:border-gray-700 transition-colors duration-200 outline-none ${
            errors.email ? "border-red-400" : "border-transparent"
          } rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)_inset]`}
        />
        <p className="text-red-500 pt-1.5 text-xs pb-3">
          {errors.email?.message}
        </p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="address" className="pb-1.5">
          Address
        </label>
        <input
          {...register("address")}
          type="text"
          placeholder="123, Actual Street"
          id="address"
          className={`w-[300px] h-10 pl-2 py-6 bg-gray-100 border-2 focus:border-gray-700 transition-colors duration-200 outline-none ${
            errors.address ? "border-red-400" : "border-transparent"
          } rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)_inset]`}
        />
        <p className="text-red-500 pt-1.5 text-xs pb-3">
          {errors.address?.message}
        </p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="pb-1.5">
          Phone
        </label>
        <input
          {...register("phone", { valueAsNumber: true })}
          type="phone"
          placeholder="432213-3213"
          id="phone"
          className={`w-[300px] h-10 pl-2 py-6 bg-gray-100 border-2 focus:border-gray-700 transition-colors duration-200 outline-none ${
            errors.phone ? "border-red-400" : "border-transparent"
          } rounded-sm shadow-[0_1px_1px_0_rgba(0,0,0,0.1)_inset]`}
        />
        <p className="text-red-500 pt-1.5 text-xs pb-3">
          {errors.phone?.message}
        </p>
      </div>
      <div className="row-start-4 row-end-5 mt-4">
        <ProceedToPayment isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};
