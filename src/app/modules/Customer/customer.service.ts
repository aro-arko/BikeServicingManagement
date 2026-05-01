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

export const CustomerService = {
  createCustomer,
};
