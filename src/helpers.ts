import { ServiceType } from ".";

export const isMainService = (service: ServiceType): boolean => {
  return service === "Photography" || service === "VideoRecording";
};

export const isMainServices = (services: ServiceType[]): boolean => {
  return services.some((service) => isMainService(service));
};
