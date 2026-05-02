import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BikeService } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const bikeData = req.body;
  const result = await BikeService.createBikeIntoDb(bikeData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

export const BikeController = {
  createBike,
};
