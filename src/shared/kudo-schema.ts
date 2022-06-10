import { z } from "zod";

export const kudoSchema = z.object({
  name: z.string().min(1, "Name must contain 1 character"),
  text: z.string().min(1, "Text must contain 1 character")
});

export type KudoSchema = z.infer<typeof kudoSchema>;
