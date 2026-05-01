import { prisma } from "../../lib/prisma";
import { ICustomer } from "./customer.interface";

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

const getAllCustomers = async () => {
  const data = await prisma.customer.findMany();
  return data;
};

const getCustomerById = async (id: string) => {
  const data = await prisma.customer.findUniqueOrThrow({
    where: { customerId: id },
  });
  return data;
};

const updateCustomer = async (id: string, payLoad: Partial<ICustomer>) => {
  const data = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payLoad,
  });

  return data;
};

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
};
