import { ServiceType } from ".";

export const isMainService = (service: ServiceType): boolean => {
  return service === "Photography" || service === "VideoRecording";
};
