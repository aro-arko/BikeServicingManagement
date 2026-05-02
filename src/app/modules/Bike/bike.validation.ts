import z from "zod";

const createBikeValidationSchema = z.object({
  body: z.object({
    brand: z.string().min(1, "Brand is required"),
    model: z.string().min(1, "Model is required"),
    year: z
      .number()
      .int()
      .min(1900, "Year must be a valid year")
      .max(new Date().getFullYear(), "Year cannot be in the future"),
    customerId: z.string().min(1, "Customer ID is required"),
  }),
});

export const BikeValidationSchema = {
  createBikeValidationSchema,
};
