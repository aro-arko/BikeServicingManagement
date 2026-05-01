import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CustomerService } from "./customer.service";

const createCustomer = catchAsync(async (req, res) => {
  const customerData = req.body;

  const result = await CustomerService.createCustomer(customerData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

// get all customers
const getAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers retrieved successfully",
    data: result,
  });
});

export const CustomerController = {
  getAllCustomers,
  createCustomer,
};
