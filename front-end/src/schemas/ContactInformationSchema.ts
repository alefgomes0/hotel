import { z } from "zod";

export const ContactInformationSchema = z.object({
  firstName: z.string().min(2, "First name must contain at least 2 characters"),
  lastName: z.string().min(2, "Last name must contain at least 2 characters"),
  email: z.string().email(),
  address: z.string().min(10, "Address must contain at least 10 characters"),
  phone: z.number({ 
    invalid_type_error: "This field must contain only numbers",
    required_error: "Phone is required"
  })
  .int()
});
