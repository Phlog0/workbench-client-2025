import { z } from "zod/v4";

export const AiBodySchema = z.object({
  prompt: z.string().nonempty().trim(),
});

export type AiBody = z.infer<typeof AiBodySchema>;
