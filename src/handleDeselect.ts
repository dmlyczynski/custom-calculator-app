import { ServiceType } from ".";
import { isMainServices } from "./helpers";

export const handleDeselect = (selectedServices: ServiceType[], service: ServiceType): ServiceType[] => {
    if (selectedServices.includes(service)) {
        let updatedServices: ServiceType[] = selectedServices.filter((s) => s !== service);

        if (isMainServices(updatedServices)) {
            return updatedServices;
        }

        return updateRelatedServices(service, updatedServices);
    }

    return selectedServices;
};

const updateRelatedServices = (service: ServiceType, updatedServices: ServiceType[]) => {
    const releatedServices = getRelatedServices(service);

    if (releatedServices.length !== 0) {
        updatedServices = updatedServices.filter((element) => !releatedServices.includes(element));
    }
    return updatedServices;
}

const getRelatedServices = (mainService: ServiceType): ServiceType[] => {
    const relatedServices: Record<ServiceType, ServiceType[]> = {
        Photography: ["TwoDayEvent"],
        VideoRecording: [],
        BlurayPackage: [],
        TwoDayEvent: [],
        WeddingSession: [],
    };

    return relatedServices[mainService] || [];
};
