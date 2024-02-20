import { ContactInformationSchema } from "@/schemas/ContactInformationSchema";
import { z } from "zod";

export type TContactInformationSchema = z.infer<typeof ContactInformationSchema>;
