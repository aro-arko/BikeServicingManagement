import catchAsync from "../../../shared/catchAsync";

const createCustomer = catchAsync(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Customer created successfully!",
  });
});

export const CustomerController = {
  createCustomer,
};
