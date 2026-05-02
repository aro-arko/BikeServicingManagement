import z from "zod";

const createServiceValidationSchema = z.object({
  body: z.object({
    bikeId: z.string().min(1, "Bike ID is required"),
    serviceDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    description: z.string().min(1, "Description is required"),
    status: z.enum(["pending", "in_progress", "done"] as const, {
      message: "Status must be one of: pending, in_progress, done",
    }),
  }),
});

export const ServiceManagementValidationSchema = {
  createServiceValidationSchema,
};
