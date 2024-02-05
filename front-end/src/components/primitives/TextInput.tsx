import { useController, UseControllerProps } from "react-hook-form";

type FormValues = {
  FirstName: string;
};

export const TextInput = (props: UseControllerProps<FormValues>) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
};
