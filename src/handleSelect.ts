import { ServiceType } from ".";

export const handleSelect = (previouslySelectedServices: ServiceType[], service: ServiceType): ServiceType[] => {
    if (isServiceExistsInPreviouslySelectedServices(previouslySelectedServices, service)) {
        return previouslySelectedServices;
    }

};

export const isServiceExistsInPreviouslySelectedServices = (selectedServices: ServiceType[], service: ServiceType) => {
    return selectedServices.includes(service);
};