import { prisma } from "../../lib/prisma";
import { IBike } from "./bike.interface";

const createBikeIntoDb = async (payload: IBike) => {
  const { brand, model, year, customerId } = payload;

  const existingCustomer = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });

  if (!existingCustomer) {
    throw new Error("Customer not found");
  }

  const data = await prisma.$transaction(async (transationClient) => {
    const bike = await transationClient.bike.create({
      data: {
        brand,
        model,
        year,
        customerId,
      },
    });

    await transationClient.customer.update({
      where: {
        customerId,
      },
      data: {
        bikes: {
          connect: {
            bikeId: bike.bikeId,
          },
        },
      },
    });

    return bike;
  });

  return data;
};

const getAllBikesFromDb = async () => {
  const bikes = await prisma.bike.findMany();
  return bikes;
};

export const BikeService = {
  createBikeIntoDb,
  getAllBikesFromDb,
};
