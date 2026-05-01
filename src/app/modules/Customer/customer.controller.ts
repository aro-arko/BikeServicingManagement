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

// get customer by id
const getCustomerById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await CustomerService.getCustomerById(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

// update customer details
const updateCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const result = await CustomerService.updateCustomer(id as string, updateData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

// delete customer
const deleteCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await CustomerService.deleteCustomer(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
    data: result,
  });
});

export const CustomerController = {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
