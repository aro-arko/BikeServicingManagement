import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ServiceManagementService } from "./servicemanagement.service";

const CreateService = catchAsync(async (req, res) => {
  const serviceData = req.body;
  const result =
    await ServiceManagementService.createServiceIntoDb(serviceData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

export const ServiceManagementController = {
  CreateService,
};
