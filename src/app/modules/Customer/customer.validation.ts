import z from "zod";

const createCustomerSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
  }),
});

const updateCustomerSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .optional(),
  }),
});

export const CustomerValidationSchemas = {
  createCustomerSchema,
  updateCustomerSchema,
};
