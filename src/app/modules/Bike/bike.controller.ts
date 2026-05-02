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

const getAllBikes = catchAsync(async (req, res) => {
  const bikes = await BikeService.getAllBikesFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: bikes,
  });
});

const getBikeById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeService.getBikeByIdFromDb(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getBikeById,
};
