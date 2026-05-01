import { prisma } from "../../lib/prisma";
import { ICustomer } from "./customer.interface";

const getAllCustomers = async () => {
  const data = await prisma.customer.findMany();
  return data;
};

const createCustomer = async (payload: ICustomer) => {
  const { name, email, phone } = payload;
  const data = await prisma.customer.create({
    data: {
      name,
      email,
      phone,
    },
  });

  return data;
};

export const CustomerService = {
  getAllCustomers,
  createCustomer,
};
