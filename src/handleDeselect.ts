import { ServiceType } from ".";
import { isMainService, isMainServices } from "./helpers";

export const handleDeselect = (previouslySelectedServices: ServiceType[], service: ServiceType): ServiceType[] => {
    if (previouslySelectedServices.includes(service)) {
        let updatedServices: ServiceType[] = previouslySelectedServices.filter((s) => s !== service);

        if (isMainServices(updatedServices)) {
            return tryToDeselectRelatedServices(updatedServices);
        }
    }

    return previouslySelectedServices;
};

const tryToDeselectRelatedServices = (updatedServices: ServiceType[]): ServiceType[] => {
    return handleTwoDayEvent(updatedServices);
};

const handleTwoDayEvent = (updatedServices: ServiceType[]): ServiceType[] => {
    const TwoDayEvent = "TwoDayEvent";

    if (updatedServices.includes(TwoDayEvent)) {
        var mainServices = updatedServices.filter((serviceType: ServiceType) => {
            if (isMainService(serviceType)) {
                return serviceType;
            }
        });

        if (mainServices.length < 2) {
            return updatedServices = updatedServices.reduce((result, currentService) => {
                if (currentService !== TwoDayEvent) result.push(currentService);
                return result;
            }, []);
        }
    }

    return updatedServices;
};
