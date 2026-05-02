import { ServiceStatus } from "../../../generated/prisma/enums";
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

const getAllServicesFromDb = async () => {
  const services = await prisma.serviceRecord.findMany();
  return services;
};

const getServiceByIdFromDb = async (id: string) => {
  const service = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
  return service;
};

const updateServiceInDb = async (id: string, payload: Partial<IService>) => {
  const updateData: Partial<IService> = {};

  if (payload.serviceDate !== undefined) {
    updateData.serviceDate = payload.serviceDate;
  }

  if (payload.description !== undefined) {
    updateData.description = payload.description;
  }

  if (payload.status !== undefined) {
    updateData.status = payload.status;
  }

  if (payload.completionDate !== undefined) {
    updateData.completionDate = payload.completionDate;
  }

  if (updateData.completionDate) {
    updateData.status = ServiceStatus.done;
  }

  if (updateData.status === ServiceStatus.done && !updateData.completionDate) {
    updateData.completionDate = new Date();
  }

  const result = await prisma.serviceRecord.update({
    where: { serviceId: id },
    data: updateData,
  });

  return result;
};

export const ServiceManagementService = {
  createServiceIntoDb,
  getAllServicesFromDb,
  getServiceByIdFromDb,
  updateServiceInDb,
};
