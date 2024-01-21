import { ServiceType } from ".";
import { isMainService } from "./helpers";

export const handleSelect = (previouslySelectedServices: ServiceType[], service: ServiceType): ServiceType[] => {
    if (isServiceExistsInPreviouslySelectedServices(service, previouslySelectedServices)) {
        return previouslySelectedServices;
    }

    if (!isMainService(service)) {
        if (!isMainServiceExistsForRelatedService(service, previouslySelectedServices)) {
            return previouslySelectedServices;
        }
    }

    return [...previouslySelectedServices, service];
};

export const isServiceExistsInPreviouslySelectedServices = (service: ServiceType, selectedServices: ServiceType[]) => {
    return selectedServices.includes(service);
};

export const isMainServiceExistsForRelatedService = (serviceToSelect: ServiceType, selectedServices: ServiceType[]): boolean => {
    const relatedServices: Record<ServiceType, ServiceType[]> = {
        Photography: [],
        VideoRecording: [],
        BlurayPackage: ["VideoRecording"],
        TwoDayEvent: ["VideoRecording", "Photography",],
        WeddingSession: [],
    };

    const services = relatedServices[serviceToSelect] || [];
    return selectedServices.some((service) => services.includes(service));
};