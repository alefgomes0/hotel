import { ContactInformationSchema } from "@/schemas/ContactInformationSchema";
import { Input } from "../primitives/Input";
import { ProceedToPayment } from "../Buttons/ProceedToPayment";
import { TContactInformationSchema } from "@/types/TContactInformationSchema";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

export const ContactInformation = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
    navigate("/checkout/payment");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col xl:grid xl:grid-cols-2 xl:grid-rows-[auto_1fr] shrink-1 gap-8"
    >
      <Input
        control={control}
        errorMessage={errors.firstName?.message}
        fieldName="firstName"
        register={register}
      />
      <Input
        control={control}
        errorMessage={errors.lastName?.message}
        fieldName="lastName"
        register={register}
      />
      <Input
        control={control}
        errorMessage={errors.email?.message}
        fieldName="email"
        register={register}
      />
      <Input
        control={control}
        errorMessage={errors.address?.message}
        fieldName="address"
        register={register}
      />
      <Input
        control={control}
        errorMessage={errors.phone?.message}
        fieldName="phone"
        register={register}
      />
      <ProceedToPayment isSubmitting={isSubmitting} />
    </form>
  );
};
