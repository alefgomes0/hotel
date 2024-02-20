import { z } from "zod";

const ContactInformationSchema = z.object({
  firstName: z.string().min(2, "First name must contain at least 2 characters"),
  lastName: z.string().min(2, "Last name must contain at least 2 characters"),
  email: z.string().email(),
  address: z.string().min(10, "Address must contain at least 10 characters"),
  phone: z.number().min(10, "Phone must contain at least 10 characters"),
});

export { ContactInformationSchema };
