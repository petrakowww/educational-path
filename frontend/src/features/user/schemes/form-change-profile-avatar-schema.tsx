import { z } from "zod";

export const fileValidationSchema = z.object({
    file: z
      .instanceof(File)
      .refine((file) => file.size <= 20 * 1024 * 1024, {
        message: 'Размер файла должен быть не более 20 МБ',
      })
  });