import { ServiceType } from ".";

export const isMainService = (service: ServiceType): boolean => {
  return service === "Photography" || service === "VideoRecording" || service === "WeddingSession";
};

export const isMainServices = (services: ServiceType[]): boolean => {
  return services.some((service) => isMainService(service));
};
