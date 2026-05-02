import { prisma } from "../../lib/prisma";
import { IService } from "./servicemanagement.interface";

const createServiceIntoDb = async (payload: IService) => {
  const { bikeId, serviceDate, description, status } = payload;
  const existingBike = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });

  if (!existingBike) {
    throw new Error("This bike is not included in our service list");
  }

  const service = await prisma.serviceRecord.create({
    data: {
      bikeId,
      serviceDate,
      description,
      status,
    },
  });
  return service;
};

export const ServiceManagementService = {
  createServiceIntoDb,
};
