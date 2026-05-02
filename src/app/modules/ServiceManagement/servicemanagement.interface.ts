import { ServiceStatus } from "../../../generated/prisma/enums";

export interface IService {
  bikeId: string;
  serviceDate: Date;
  description: string;
  status: ServiceStatus;
}
