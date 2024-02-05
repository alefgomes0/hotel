import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendForm } from "../Buttons/SendForm";

const ContactInformationSchema = z.object({
  firstName: z.string().min(2, "First name must contain at least 2 characters"),
  lastName: z.string().min(2, "Last name must contain at least 2 characters"),
  email: z.string().email(),
  address: z.string().min(10, "Address must contain at least 10 characters"),
  phone: z.number().min(10, "Phone must contain at least 10 characters"),
});

type ContactInformationSchema = z.infer<typeof ContactInformationSchema>;

export const ContactInformation = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactInformationSchema>({
    resolver: zodResolver(ContactInformationSchema),
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-2 auto-rows-max gap-y-6"
    >
      <input
        {...register("firstName")}
        type="text"
        placeholder="John"
        className="w-60 h-10 pl-2 py-6 border-transparent outline-none focus:ring-2 focus:ring-teal-700 rounded-sm"
      />
      {errors.firstName && (
        <p className="text-red-500 text-xs pt-[-18px] pb-3">
          {errors.firstName.message}
        </p>
      )}
      <input
        {...register("lastName")}
        type="text"
        placeholder="Doe"
        className="w-60 h-10 pl-2 py-6 border-transparent outline-none focus:ring-2 focus:ring-teal-700 rounded-sm"
      />
      {errors.lastName && (
        <p className="text-red-500 text-xs pt-[-18px] pb-3">
          {errors.lastName.message}
        </p>
      )}
      <input
        {...register("email")}
        type="email"
        placeholder="johndoe@email.com"
        className="w-60 h-10 pl-2 py-6 border-transparent outline-none focus:ring-2 focus:ring-teal-700 rounded-sm"
      />
      {errors.email && (
        <p className="text-red-500 text-xs pt-[-18px] pb-3">
          {errors.email.message}
        </p>
      )}
      <input
        {...register("address")}
        type="text"
        placeholder="123 Actual Street"
        className="w-60 h-10 pl-2 py-6 border-transparent outline-none focus:ring-2 focus:ring-teal-700 rounded-sm"
      />
      {errors.address && (
        <p className="text-red-500 text-xs pt-[-18px] pb-3">
          {errors.address.message}
        </p>
      )}
      <input
        {...register("phone")}
        type="text"
        placeholder="432213-3213"
        className="w-60 h-10 pl-2 py-6 border-transparent outline-none focus:ring-2 focus:ring-teal-700 rounded-sm"
      />
      {errors.phone && (
        <p className="text-red-500 text-xs pt-[-18px] pb-3">
          {errors.phone.message}
        </p>
      )}
      <SendForm />
    </form>
  );
};
