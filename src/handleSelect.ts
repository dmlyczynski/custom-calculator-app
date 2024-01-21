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

const isServiceExistsInPreviouslySelectedServices = (service: ServiceType, previouslySelectedServices: ServiceType[]): boolean => {
    return previouslySelectedServices.includes(service);
};

const isMainServiceExistsForRelatedService = (serviceToSelect: ServiceType, previouslySelectedServices: ServiceType[]): boolean => {
    const relatedServices: Record<ServiceType, ServiceType[]> = {
        Photography: [],
        VideoRecording: [],
        BlurayPackage: ["VideoRecording"],
        TwoDayEvent: ["VideoRecording", "Photography", "WeddingSession"],
        WeddingSession: [],
    };

    const services = relatedServices[serviceToSelect] || [];
    return previouslySelectedServices.some((service) => services.includes(service));
};
